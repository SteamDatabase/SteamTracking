#!/usr/bin/env python
"""
	This script handles installing system dependencies for games using the
	Steam runtime.  It is intended to be customized by other distributions
	to "do the right thing"

	Usage: steamdeps dependencies.txt
"""

import os
import re
import stat
import subprocess
import sys
import tempfile

# This is the set of supported Steam runtime environments
SUPPORTED_STEAM_RUNTIME = [ '1' ]

# This is the set of supported dependency formats
SUPPORTED_STEAM_DEPENDENCY_VERSION = [ '1' ]

###
# Get the current package architecture
# This may be different than the actual architecture for the case of i386
# chroot environments on amd64 hosts.
_arch = None
def getArch():
	"""
	Get the current architecture
	"""
	global _arch

	if ( _arch is None ):
		_arch = subprocess.check_output(['dpkg', '--print-architecture']).decode("utf-8").strip()
	return _arch


###
def getFullPackageName( name ):
	"""
	Get the full name of a package, qualified by architecture
	"""
	if ( name.find(":") < 0 ):
		return name + ":" + getArch()
	else:
		return name

#
# Check to see if another package Provides this package
# N.B. Version checks are not supported on virtual packages
#
def isProvided(pkgname):
	try:
		process = subprocess.Popen( ['apt-cache', 'showpkg', pkgname], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
		pattern = re.compile( r'^Reverse Provides\:')
		providers = {}
		for line in process.stdout:
			if re.match(pattern,line):
				for provider in process.stdout:
					(name, version) = provider.split()
					providers[name] = version
				for provider in providers.keys():
					if hasPackage(provider):
						return True
				return False
	except:
		return False
	return False


###
class Package:
	"""
	Package definition class
	"""
	def __init__(self, name, versionConditions):
		self.name = name
		self.versionConditions = versionConditions
		self.installed = None

	def setInstalled(self, version):
		self.installed = version


	def isAvailable(self):
		if ( self.installed is None ):
			# check to see if another package is providing this virtual package
			return isProvided(self.name)

		for (op, version) in self.versionConditions:
			if ( subprocess.call( ['dpkg', '--compare-versions', self.installed, op, version] ) != 0 ):
				return False

		return True

	def __str__(self):
		text = self.name
		for (op, version) in self.versionConditions:
			text += " (%s %s)" % (op, version)
		return text


###
def hasPackage( package ):
	process = subprocess.Popen( ['dpkg', '-l', package], stdout=subprocess.PIPE, stderr=subprocess.PIPE )
	installed_pattern = re.compile( r"^\Si\s+([^\s]+)\s+([^\s]+)" )
	for line in process.stdout:
		line = line.decode( "utf-8" ).strip()
		match = re.match( installed_pattern, line )
		if ( match is None ):
			continue

		return True
	return False


def remapPackage( description ):

	# Ubuntu 12.04.2, 12.04.3, and 12.04.4 introduce new X stacks which require 
	# different sets of incompatible glx packages depending on which X 
	# is currently installed.

	if hasPackage( "xserver-xorg-core-lts-quantal" ):
		if description == "libgl1-mesa-glx:i386":
			return "libgl1-mesa-glx-lts-quantal:i386"
		elif description == "libgl1-mesa-dri:i386":
			return "libgl1-mesa-dri-lts-quantal:i386"

	elif hasPackage( "xserver-xorg-core-lts-raring" ):
		if description == "libgl1-mesa-glx:i386":
			return "libgl1-mesa-glx-lts-raring:i386"
		elif description == "libgl1-mesa-dri:i386":
			return "libgl1-mesa-dri-lts-raring:i386"

	elif hasPackage( "xserver-xorg-core-lts-saucy" ):
		if description == "libgl1-mesa-glx:i386":
			return "libgl1-mesa-glx-lts-saucy:i386"
		elif description == "libgl1-mesa-dri:i386":
			return "libgl1-mesa-dri-lts-saucy:i386"

	return description


###
def createPackage( description ):
	"""
	Create a package object based on a description.
	This can return None if the package isn't meaningful on this platform.
	"""
	# Look for package substitutions
	description = remapPackage( description )
	if ( description is None ):
		return None

	# Look for architecture conditions, e.g. foo [i386]
	match = re.match( r"(.*) \[([^\]]+)\]", description )
	if match is not None:
		description = match.group(1).strip()
		condition = match.group(2)
		if ( condition[0] == '!' ):
			if ( getArch() == condition[1:] ):
				return None
		else:
			if ( getArch() != condition ):
				return None

	# Look for version requirements, e.g. foo (>= 1.0)
	versionConditions = []
	while True:
		match = re.search( r"\s*\(\s*([<>=]+)\s*([\w\-\.:]+)\s*\)\s*", description )
		if ( match is None ):
			break

		versionConditions.append( ( match.group(1), match.group(2) ) )
		description = description[:match.start()] + description[match.end():]

	return Package( description.strip(), versionConditions )
	


###
def getTerminalCommandLine( title ):
	"""
	Function to find a useful terminal like xterm or compatible
	"""
	if ( "DISPLAY" in os.environ ):
		programs = [
			( "gnome-terminal", ["gnome-terminal", "--disable-factory", "-t", title, "-e"] ),
			( "konsole", ["konsole", "--nofork", "-p", "tabtitle="+title, "-e"] ),
			( "xterm", ["xterm", "-bg", "#383635", "-fg", "#d1cfcd", "-T", title, "-e"] ),
		]
		for (program, commandLine) in programs:
			if ( subprocess.call( ['which', program], stdout=subprocess.PIPE ) == 0 ):
				return commandLine

	# Fallback if no GUI terminal program is available
	return ['/bin/sh']


###
def updatePackages( packages ):
	"""
	Function to install or update package dependencies
	Ideally we would call some sort of system UI that users were familiar with to do this, but nothing that exists yet does what we need.
	"""

	packageList = " ".join( [ package.name for package in packages ] )

	# Create a temporary file to hold the installation completion status
	(fd, statusFile) = tempfile.mkstemp()
	os.close( fd )

	# Create a script to run, in a secure way
	(fd, scriptFile) = tempfile.mkstemp()
	script = """#!/bin/sh
check_sudo()
{
    # If your host file is misconfigured in certain circumstances this
    # can cause sudo to block for a while, which causes gksudo to go into
    # limbo and never return.
    timeout --signal=9 5 sudo -v -S </dev/null 2>/dev/null
    if [ $? -eq 124 -o $? -eq 137 ]; then
        # sudo timed out or was killed due to timeout
        cat <<__EOF__
sudo timed out, your hostname may be missing from /etc/hosts.

See https://support.steampowered.com/kb_article.php?ref=7493-ADXN-9620 for more details.
__EOF__
        return 1
    else
        return 0
    fi
}

cat <<__EOF__
Steam needs to install these additional packages: 
	%s
__EOF__
check_sudo

# Check to make sure 64-bit systems can get 32-bit packages
if [ "$(dpkg --print-architecture)" = "amd64" ] && ! dpkg --print-foreign-architectures | grep i386 >/dev/null; then
    sudo dpkg --add-architecture i386
fi

# Update the package list, showing progress
sudo apt-get update | while read line; do echo -n "."; done
echo

# Install the packages!
sudo apt-get install %s
echo $? >%s
echo -n "Press return to continue: "
read line
""" % ( ", ".join( [ package.name for package in packages ] ), packageList, statusFile )
	os.write( fd, script.encode("utf-8") )
	os.close( fd )
	os.chmod( scriptFile, (stat.S_IRUSR | stat.S_IWUSR | stat.S_IXUSR) )

	try:
		subprocess.call( getTerminalCommandLine( "Package Install" ) + [scriptFile] )
	except KeyboardInterrupt:
		pass
	os.unlink( scriptFile )

	# Read the status out of the file, since if we ran the script in a
	# terminal the process status will be whether the terminal started
	try:
		status = int( open( statusFile ).read() )
	except ValueError:
		# The status wasn't written to the file
		status = 255

	os.unlink( statusFile )

	return status


###
def checkConfig( config ):
	if ( "STEAM_RUNTIME" not in config ):
		sys.stderr.write( "Missing STEAM_RUNTIME definition in %s\n" % sys.argv[1] )
		return False

	if ( config["STEAM_RUNTIME"] not in SUPPORTED_STEAM_RUNTIME ):
		sys.stderr.write( "Unsupported Steam runtime: %s\n" % config["STEAM_RUNTIME"] )
		return False

	if ( "STEAM_DEPENDENCY_VERSION" not in config ):
		sys.stderr.write( "Missing STEAM_DEPENDENCY_VERSION definition in %s\n" % sys.argv[1] )
		return False

	if ( config["STEAM_DEPENDENCY_VERSION"] not in SUPPORTED_STEAM_DEPENDENCY_VERSION ):
		sys.stderr.write( "Unsupported dependency version: %s\n" % config["STEAM_DEPENDENCY_VERSION"] )
		return False

	# Make sure we can use dpkg on this system.
	try:
		subprocess.call( ['dpkg', '--version'], stdout=subprocess.PIPE )
	except:
		sys.stderr.write( "Couldn't find dpkg, please update steamdeps for your distribution.\n" )
		return False

	return True


###
def main():
	config = {}

	# Check the command line arguments
	if ( len(sys.argv) < 2 ):
		sys.stderr.write( "Usage: %s dependencies.txt\n" % sys.argv[0] )
		return 1

	# Make sure we can open the file
	try:
		fp = open(sys.argv[1])
	except Exception as e:
		sys.stderr.write( "Couldn't open file: %s\n" % (e) )
		return 2

	# Look for configuration variables
	config_pattern = re.compile( r"(\w+)\s*=\s*(\w+)" )
	for line in fp:
		line = line.strip()
		if ( line == "" or line[0] == '#' ):
			continue

		match = re.match(config_pattern, line)
		if ( match is not None ):
			config[match.group(1)] = match.group(2)

	# Check to make sure we have a valid config
	if ( not checkConfig( config ) ):
		return 3

	# Seek back to the beginning of the file
	fp.seek(0)

	# Load the package dependency information
	packages = {}
	dependencies = []
	lineNumber = 0
	for line in fp:
		++lineNumber
		line = line.strip()
		if ( line == "" or line[0] == '#' ):
			continue

		match = re.match( config_pattern, line )
		if ( match is not None ):
			continue
	
		row = []
		for section in line.split( "|" ):
			package = createPackage( section )
			if ( package is None ):
				continue

			packages[ package.name ] = package
			row.append( package )

		dependencies.append( row )

	# Print package dependency information for debug
	"""
	for row in dependencies:
		print " | ".join( [ str(package) for package in row ] )
	"""

	# Get the installed package versions
	# Make sure COLUMNS isn't set, or dpkg will truncate its output
	if ( "COLUMNS" in os.environ ):
		del os.environ[ "COLUMNS" ]

	process = subprocess.Popen( ['dpkg', '-l'] + list( packages.keys() ), stdout=subprocess.PIPE, stderr=subprocess.PIPE )
	installed_pattern = re.compile( r"^\Si\s+([^\s]+)\s+([^\s]+)" )
	for line in process.stdout:
		line = line.decode( "utf-8" ).strip()
		match = re.match( installed_pattern, line )
		if ( match is None ):
			continue

		name = match.group(1)
		if ( name not in packages ):
			name = getFullPackageName( name )
		packages[ name ].setInstalled( match.group(2) )

	# See which ones need to be installed
	needed = []
	for row in dependencies:
		if ( len(row) == 0 ):
			continue

		satisfied = False
		for dep in row:
			if ( dep.isAvailable() ):
				satisfied = True
				break
		if ( not satisfied ):
			needed.append( row[0] )

	# If we have anything to install, do it!
	if ( len(needed) > 0 ):
		for package in needed:
			if package.installed:
				print( "Package %s is installed with version '%s' but doesn't match requirements: %s" % (package.name, package.installed, package) )
			else:
				print( "Package %s needs to be installed" % package.name )

		return updatePackages( needed )
	else:
		return 0


if __name__ == "__main__":
	sys.exit(main())
