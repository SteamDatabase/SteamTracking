$(function() {
    var scrollableContent = $( '#scrollableContent' );
    var scrollableContentHeight = $(window).height() - scrollableContent.offset().top;
    scrollableContentHeight -= (scrollableContent.innerHeight() - scrollableContent.height());
    scrollableContent.css('height', scrollableContentHeight);

    var hashToken = window.location.hash.substr(1);
    if (hashToken.length >= 8)
        document.cookie = "device_token=" + escape(hashToken) + "; path=/";
});