
"use strict";

var GroupAnnouncement = function( creatorLists, creatorURL ) {
	this.m_creatorLists = creatorLists;
	this.m_creatorURL = creatorURL; // for example: https://store.steampowered.com/curator/4-VALVE/
};

GroupAnnouncement.prototype.OnChangeTargetList = function( selected ) {
	console.log( this.m_creatorLists );
	if ( selected.val() ) 	{
		var listid = selected.val();
		$J( "#CreatorHomeOpenList" ).attr("href", this.m_creatorURL + 'list/' + listid ).show();
		$J( "#checkboxAudienceList" ).prop('checked', true);
	}
	else
	{
		$J( "#CreatorHomeOpenList" ).hide();
		$J( "#checkboxAudienceList" ).prop('checked', false);
	}
};

