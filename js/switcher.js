/* cookie vars */
var cookie_name = "selected_theme";
var cookie_options = { path: '/', expires: 7 };

/* theme drawer hider */
function hideDrawer() {
   		$('#theme-drawer').slideToggle();
  }

$(document).ready(function(){	
	$(".drawer-toggler").click(function() {
	hideDrawer();
	});
	 
	/* carousel */
	$("#themes-frame").carousel("#btn-previous", "#btn-next");
	 
	/* Get Cookie*/
	var get_cookie = $.cookie(cookie_name);
	if(get_cookie != null) {
		$("#active-theme").attr({ href: "themes/" + get_cookie + "/theme.css"});
		}
	
	 
	/* theme switcher */
	$("#themes-frame a").click(function() {
		$('body').append('<div id="overlay" />');
		$('body').css({height:'100%'});
		$('#overlay')
			.css({
				display: 'none',
				position: 'absolute',
				top:0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 1010,
				background: 'black'
			})
			.fadeIn(50);
			$('#overlay').delay(1500).fadeOut(1000);
		var themename = $(this).attr("rel");
		$("#active-theme").attr({ href: "themes/" + themename + "/theme.css"});
		$("#active-theme-color").attr({ href: "themes/" + themename + "/color.css"});
		hideDrawer();
		$.cookie(cookie_name, themename, cookie_options);
		//return false;
	});
	
	$("#theme-colors li a").click(function() {
		$('body').append('<div id="overlay" />');
		$('body').css({height:'100%'});
		$('#overlay')
			.css({
				display: 'none',
				position: 'absolute',
				top:0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 1010,
				background: 'black'
			})
			.fadeIn(100);
			$('#overlay').delay(100).fadeOut(200);
		var themenamecolor = $(this).attr("rel");
		$("#active-theme-color").attr({ href: "themes/" + themenamecolor + "/color.css"});
		hideDrawer();
		$.cookie(cookie_name, themenamecolor, cookie_options);
		//return false;
	});
	$('#theme-drawer').hide();
	$('#theme-wrapper').css('display','none');
	$('#theme-wrapper').delay(3000).fadeIn('middle');
});