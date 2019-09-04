
var CommentControl = Class.create( {
	m_elemTextarea: null,
	m_elemButton: null,
	m_strDefaultText: '',
	
	initialize: function( args )
	{
		this.m_elemTextarea = $(args.elemTextarea);
		this.m_elemButton = $(args.elemButton);
		this.m_strDefaultText = args.strDefaultText;

		new CAutoSizingTextArea( this.m_elemTextarea, args.nTextAreaHeight || 100, this.OnTextInput.bind(this) );

		Event.observe( this.m_elemTextarea, 'focus', this.clearCommentInput.bind( this ) );
		Event.observe( this.m_elemTextarea, 'blur', this.restoreCommentInput.bind( this ) );

		this.OnTextInput( this.m_elemTextarea );
	},

	OnTextInput: function( elTextArea )
	{
		if ( this.m_elemButton )
		{
			if ( elTextArea.value.length > 0 && this.m_elemTextarea.value != this.m_strDefaultText )
				this.m_elemButton.show();
			else
				this.m_elemButton.hide();
		}
	},

	handleNewLine: function( event )
	{
		if ( event.keyCode == Event.KEY_RETURN )
		{
			// size the box ahead of time
			this.updateTextareaRows( this.m_elemTextarea.rows + 1 );
		}
		
		return false;
	},

	clearCommentInput: function()
	{
		var tbox = this.m_elemTextarea;
		if ( tbox.value == this.m_strDefaultText )
		{
			tbox.value = '';
		}
	},

	restoreCommentInput: function()
	{
		var tbox = this.m_elemTextarea;
		if ( tbox.value == '' )
		{
			tbox.value = this.m_strDefaultText;
		}
	}
	
} );

var CAutoSizingTextArea = Class.create( {
	m_elTextArea: null,
	m_nMinHeight: 20,
	m_nMaxHeight: 500,
	m_cCurrentSize: Number.MAX_VALUE,
	m_fnChangeCallback: null,

	initialize: function( elTextArea, nMinHeight, fnChangeCallback )
	{
		this.m_elTextArea = elTextArea;
		this.m_elTextArea.observe( 'keyup', this.OnTextInput.bind( this ) );
		this.m_elTextArea.observe( 'blur', this.OnTextInput.bind( this ) );
		this.m_elTextArea.observe( 'click', this.OnTextInput.bind( this ) );
		this.m_elTextArea.observe( 'paste', this.OnPasteText.bind( this ) );
		this.m_elTextArea.observe( 'cut', this.OnPasteText.bind( this ) );

		this.m_cEntryLength = Number.MAX_VALUE;
		this.m_nMinHeight = nMinHeight || 20;
		this.m_fnChangeCallback = fnChangeCallback || null;

		this.OnTextInput();
	},

	OnPasteText: function()
	{
		this.OnTextInput.bind( this ).defer();
	},

	OnTextInput: function()
	{
		var iScrollOffset = undefined;
		var cNewLength = this.m_elTextArea.value.length;
		// force a resize
		if ( cNewLength < this.m_cEntryLength )
		{
			// when we shrink this box, we might scroll the window.  Remember where we are so we can jump back
			iScrollOffset = window.scrollY;
			this.m_elTextArea.style.height = this.m_nMinHeight + 'px';
		}

		if ( this.m_elTextArea.scrollHeight > this.m_nMaxHeight )
		{
			this.m_elTextArea.style.height = this.m_nMaxHeight + 'px';
			this.m_elTextArea.style.overflow = 'auto';
		}
		else if ( this.m_elTextArea.scrollHeight != this.m_elTextArea.getHeight() )
		{
			var nHeight = Math.max( this.m_elTextArea.scrollHeight, this.m_nMinHeight );
			this.m_elTextArea.style.height = nHeight + 'px';

			if ( this.m_elTextArea.style.overflow == 'auto' )
				this.m_elTextArea.style.overflow = 'hidden';
		}

		if ( this.m_fnChangeCallback )
			this.m_fnChangeCallback( this.m_elTextArea );

		if ( iScrollOffset )
			window.scrollTo( window.scrollX, iScrollOffset );

		this.m_cEntryLength = cNewLength;
	}
});

