$(document).ready(function(){$('small#view-resume a').click(function(){$('section#cv').fadeTo("slow",0.85);$('body').addClass('fixed');$('#wrapper-content').addClass('all-fixed');$('#nav-first-child').css("visibility","hidden")});$('.close-btn').click(function(){$('section#cv').fadeOut("slow");$('body').removeClass('fixed');$('#wrapper-content').removeClass('all-fixed');$('#nav-first-child').css("visibility","visible")});$('li.work-item').hover(function(){$(this).find('div.work-caption').stop(false,true).css("visibility", "visible").fadeIn("fast")},function(){$(this).find('div.work-caption').stop(false,true).fadeOut("slow")});$("nav").hover(function(){$(this).find("li.fade-option").stop().animate({left:"25",opacity:1},"fast").css("visibility","visible")},function(){$(this).find("li.fade-option").stop().animate({left:"0",opacity:0},"meddium").css("display","inline")})
	
		var wrapper = $(".work-caption");
		var theItem =$(".work-caption h3");
		var contHeight=$(wrapper).height();
		var contMiddle=contHeight/2;
		var titleMiddle=$(".work-caption h3").height()/2;
		var theMiddle=contMiddle-titleMiddle;

		$('.work-caption').each(function(i) {
			var wh = $(this).height();
			var ih = $('h3', this).height();
			
			if (wh > ih) {
			$('h3', this).css('margin-top', (wh-ih)/2 + 'px');
			} else {
			$('h3', this).css('margin-top',0);
			}
		});
		
		
		// SUPERSCROLL
		$('<div class="mask"></div>').insertAfter('#portfolio nav');
		var miniaturas = $('#portfolio ul#list-works');
		$('.mask').append(miniaturas);
		var hMask = $('#portfolio .mask').height(),
			hPos = 0;
		function hPort(){ return $('#portfolio ul#list-works').height(); }
		function hLimit(){ return Math.ceil( hPort() / hMask ) }
		function hMove(){
			$('#portfolio ul#list-works').animate({
				marginTop: -hPos * hMask + 'px'
			},500);
		}
		function hSube(e){
			if (e){ 
				(hPos < hLimit()-1) ? hPos++ : hPos=0;
			}else{
				(hPos == 0) ? hPos = hLimit()-1 : hPos--;
			}
			hMove();
		}
		$('#arrow-left a').click(function(){ hSube(); return false; }); // Click on next button
		$('#arrow-right a').click(function(){ hSube(1);	return false; }); // Click on prev button
		$('.works-filters li a').click(function(){ hPos = 0; hMove(); }); // Click on filter
		
/**********************************
   SEQUENTIAL THUMB LOADER
****************************************/
		var i = 0;
		$('ul#list-works li img').clone().appendTo($('#thumbspreload'));
		$('ul#list-works li img').css('display', 'block');
		$('ul#list-works li img').each(function()
		{
		var me = this;
		$(this).hide()
		var j = i;
		setTimeout(function()
		{
		$(me).fadeIn(200);
		}, i)
		i += 50
	});


	//DETECT iPad/iPhone devices for manage fixed position elements
	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
	if (agentID) {
        $('#theme-wrapper').delay('200').remove();
 		$('section#cv{').css('width','120%');
		$('#cboxOverlay').css({'width': '110%', 'height': '250%'});
	}

});