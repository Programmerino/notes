/**
* Attaches a DART-served wallpaper ad to a webpage.
*
* OPTIONS:
*    image_url				Where to get the wallpaper image. (def='')
*    background_color		Bkgd color behind the wallpaper. (def=white)
*    background_tiling		How to repeat the wallpaper. (def=repeat-x & -y)
*    link_url				Clickthru url. (def='')
*
* TO USE:
*     Set idPageWrapper below to the div that wraps your content. This is the part of the page that
*     should be prevented from having its cursor turned into a pointer because of the wallpaper ad.
*
*     On your page:
*     <?php
*     // Set up your DART framework for page type, etc.
*     ?>
*     <script type='text/javascript' src='/url/to/dart.js'>
*     <body>
*     <div id='content'>
*     <?= (the DART call) ?> // Must be after #content. Can be later but earlier == quicker loading.
*
*     The DART call loads in the JS that calls this function w/params for the ad.
*/
dartJs = {};
dartJs.dtStart = new Date();
dartJs.idMaskClicks = "#header, #mainwrap";

// This checks for the existence of a wallpaper that wants to push our website down. Adjust it so that // it only pushes the content body down & leaves the masthead above it.
dartJs.timer = setInterval (
	function()
	{
		if (new Date().getTime() > dartJs.dtStart.getTime() + 20000) {
			clearInterval(dartJs.timer);
		}
		else
		{
			var jqBody = $('html');
			var sPadding = jqBody.css('padding-top');
			if (sPadding != undefined && sPadding.substr(0,1) != '0')
			{
				// Move the masthead back up to the top, push the content back down by that amount,
				// & move the wallpaper image down below the masthead.
				var nPadding = parseInt(jqBody.css('padding-top'));
				$('#header').css('margin-top', '-' + nPadding + 'px');
				$('#mainwrap').css('margin-top', nPadding + 'px');
				jqBody.css('background-position', ('center ' + nPadding + 'px'));

				clearInterval(dartJs.timer);
			}
		}
	},
	500
);

var dartWallpaperRender = function (options) {
	options.background_color  = options.background_color || "#f5f5f5";
	options.image_url         = options.image_url || "";
	options.background_tiling = options.background_tiling || "no-repeat";
	options.link_url          = options.link_url || "";

	$("body").css("background", options.background_color + " url(" + options.image_url + ")  top center " + options.background_tiling + " scroll");
	if (options.link_url)
	{
		$("html").css("cursor", "pointer");
		$(dartJs.idMaskClicks).css("cursor", "default"); // make the main body section not appear clickable
		$("html").click(function(e) {
			if(e.target.tagName.toLowerCase() == "html")
			{
				window.open(options.link_url);
			}
		});
	}
}