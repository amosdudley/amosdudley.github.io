 $(document).ready(function() {


/////////////////////////////SLIDE FOR HRESUME//CV////////////////////////
 $('small#view-resume a').click(function() {    
		$('section#cv').fadeTo("slow",0.85);
		$('body').addClass('fixed');
		$('#wrapper-content').addClass('all-fixed');
		$('#nav-first-child').css("visibility", "hidden");
 });
 $('.close-btn').click(function() {    
		$('section#cv').fadeOut("slow");
		$('body').removeClass('fixed');
		$('#wrapper-content').removeClass('all-fixed');
		$('#nav-first-child').css("visibility", "visible");
 });
/////////////////////////////HOVER EFFECT FOR INFO BOX////////////////////////
 $('li.work-item').hover(function() {   
          
        //display the aux info caption  
		$(this).find('div.work-caption').stop(false,true).fadeIn("fast");
    },  
    function() {        
        //hide the caption  
        $(this).find('div.work-caption').stop(false,true).fadeOut("slow");
    });

 /////////////////////////////SLIDE EFFECT FOR FILTER MENU////////////////////////
 
$("nav").hover(function() {
	
		$(this).find("li.fade-option").stop()
		.animate({left: "25", opacity:1}, "fast")
		.css("visibility","visible")

	}, function() {
		$(this).find("li.fade-option").stop()
		.animate({left: "0", opacity: 0}, "meddium")
		.css("display","inline")
	});
	
 });
 


