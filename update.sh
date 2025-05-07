#!/bin/bash

LOCKFILE=.support/update.lock

if [[ -f "$LOCKFILE" ]] && kill -0 "$(cat "$LOCKFILE")" 2>/dev/null; then
	echo Still running
	exit 1
fi

echo $$ > "$LOCKFILE"

git_commit_message() {
	local all_changed_files
	all_changed_files=$(git status --porcelain)

	local num_files
	num_files=$(echo "$all_changed_files" | wc -l)

	local non_c_files
	non_c_files=$(echo "$all_changed_files" | grep -v "^.. c/")

	local file_list
	file_list=$(echo "$non_c_files" | awk '{print $2}' | xargs -n1 basename | sed '{:q;N;s/\n/, /g;t q}')

	echo "$num_files files${file_list:+ | $file_list}"
}

#mkdir -p .support/{archives,bins,linux_archives,linux_bins,steampal_archives}

php update.php "$1"

git add -A
git commit -S -a -m "$(git_commit_message)"
git push

rm "$LOCKFILE"
