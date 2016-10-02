
function DisplayYouTubeVideo( videoURL, panelid )
{
	DebugOut( $.GetContextPanel().id + ": DisplayYouTubeVideo( " + videoURL + ", " + panelid + " )" );

	var layout = '<root> \
					<styles> \
						<include src="file://{resources}/styles/steamstyles.css" /> \
						<include src="file://{resources}/styles/community/community.css" /> \
						<include src="file://{resources}/styles/movie.css" /> \
						<include src="