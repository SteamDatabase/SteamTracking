
var CComicViewer = function( strIDPrefix, rgPages, strKey )
{
	this.eleComicFrame = document.getElementById(strIDPrefix + 'Frame');
	this.eleComicPager = document.getElementById(strIDPrefix + 'Pages');
	this.strKey = strKey;
	this.rgPages = rgPages;
	this.strLocalStorageKey = strKey;
	this.nCurrentPage = 0;
	this.nLastPage = 0;
	this.rgImageElements = {};

	// Figure out what page we were on before
	var nLastPage = WebStorage.GetLocal(this.strLocalStorageKey + '-page');

	// Slam to 0 if we get null, undefined, NaN, or any other false-but-not-int value.
	if( !nLastPage )
		nLastPage = 0;

	if( nLastPage > this.rgPages.length-1 )
		nLastPage = this.rgPages.length-1;

	// If we were keeping up with the comic and a new frame was added, nudge them to the new panel.
	// Actually don't do this, we'll have placeholders which solve the problem in a different way
	//if( nLastPage + 1 == this.rgPages.length - 1 )
	//	nLastPage++

	this.nCurrentPage = nLastPage;

	this.PreloadPage( this.nCurrentPage );
	this.PreloadPage( this.nCurrentPage + 1 );
	this.PreloadPage( this.nCurrentPage + 2 );
	this.PreloadPage( this.nCurrentPage - 1 );

	var instance = this;

	document.addEventListener("keydown", function(e)
	{
		switch( e.keyCode )
		{
			case 39: // ->
			case 32: // Space
				instance.NextPage();
				e.preventDefault();
				break;
			case 37: // <-
				instance.PreviousPage();
				e.preventDefault();
				break;
		}
	});

	window.onpopstate = function( event )
	{
		console.log(event);
		if( event.state.comic_page != undefined )
			instance.GoToPage( event.state.comic_page, true );

	}

	this.eleComicFrame.onclick = function()
	{
		instance.NextPage();
	}

	for( var i=0; i<this.rgPages.length; i++)
	{
		var a = document.createElement('a');
		a.text = i+1;
		a.id = this.strKey + "_page_" + i;
		a.onclick = function( nPage ) { return function() { instance.GoToPage( nPage ); return false; } }(i);
		this.eleComicPager.appendChild( a );
	}

	this.GoToPage( this.nCurrentPage );
}


CComicViewer.prototype.NextPage = function()
{
	if( this.nCurrentPage + 1 >= this.rgPages.length )
		return;

	// Slam to loaded to solve race condition
	this.eleComicFrame.className = 'loaded';

	this.nCurrentPage++;

	this.PreloadPage( this.nCurrentPage + 1 );
	this.PreloadPage( this.nCurrentPage + 2 );
	this.GoToPage( this.nCurrentPage );
}

CComicViewer.prototype.PreviousPage = function()
{
	if( this.nCurrentPage - 1 < 0 )
		return;

	// Slam to loaded to solve race condition
	this.eleComicFrame.className = 'loaded';

	this.nCurrentPage--;

	this.PreloadPage( this.nCurrentPage - 1 );
	this.PreloadPage( this.nCurrentPage - 2 );
	this.GoToPage( this.nCurrentPage );
}

CComicViewer.prototype.PreloadPage = function( nPage )
{
	if( nPage > this.rgPages.length - 1 || nPage < 0 ) // IN THE FUUUTURREEEEE
		return;

	if( this.rgImageElements['page_'+nPage] ) // Already preloaded
		return;

	var strComicImage = this.rgPages[nPage];
	var ele = document.createElement('img');

	var target = this.eleComicFrame;
	var instance = this;

	ele.onload = function(){ if( nPage == instance.nCurrentPage ) target.className = 'loaded'; };

	ele.src = strComicImage;
	this.rgImageElements['page_'+nPage] = ele;
}

CComicViewer.prototype.GoToPage = function( nPage, bNoPush )
{
	if( !this.rgImageElements['page_'+nPage] ) // Shouldn't happen. Don't bother trying to handle it (This will not bite me in the ass later, nope!) EDIT: TOTALLY DID.
		this.PreloadPage(nPage);

	this.nCurrentPage = nPage;

	this.eleComicFrame.removeChild(this.eleComicFrame.firstChild);
	this.eleComicFrame.appendChild( this.rgImageElements['page_'+nPage] );

	for (var i=0; i<this.rgPages.length; i++ )
	{
		var pager = document.getElementById(this.strKey + '_page_' + i);
		if( pager )
			pager.className = (i == nPage) ? 'active' : '';
	}

	WebStorage.SetLocal(this.strLocalStorageKey + '-page', this.nCurrentPage);
	if( this.nLastPage != this.nCurrentPage && !bNoPush )
	{
		history.pushState({comic_page: this.nCurrentPage}, "Page " + this.nCurrentPage, "https://store.steampowered.com/store/wintercomic/");
	}

	this.nLastPage = this.nCurrentPage;

}