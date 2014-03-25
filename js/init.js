jQuery.easing.easeOutQuart = function (x, t, b, c, d) {
	return -c * ((t=t/d-1)*t*t*t - 1) + b;
};

jQuery(function( $ ){
	$('#portfolio').serialScroll({
		target:'#list-works',
		items:'li.break', // Selector to the items ( relative to the matched elements, '#sections' in this case )
		prev:'#arrow-left a',// Selector to the 'prev' button (absolute!, meaning it's relative to the document)
		next:'#arrow-right a',// Selector to the 'next' button (absolute too)
		axis:'xy',// The default is 'y' scroll on both ways
		navigation:'#navigation li a',
		duration:700,// Length of the animation (if you scroll 2 axes and use queue, then each axis take half this time)
		force:true, // Force a scroll to the element specified by 'start' (some browsers don't reset on refreshes)
		
		//queue:false,// We scroll on both axes, scroll both at the same time.
		//event:'click',// On which event to react (click is the default, you probably won't need to specify it)
		//stop:false,// Each click will stop any previous animations of the target. (false by default)
		//lock:true, // Ignore events if already animating (true by default)		
		//start: 0, // On which element (index) to begin ( 0 is the default, redundant in this case )		
		//cycle:true,// Cycle endlessly ( constant velocity, true is the default )
		//step:1, // How many items to scroll each time ( 1 is the default, no need to specify )
		//jump:false, // If true, items become clickable (or w/e 'event' is, and when activated, the pane scrolls to them)
		//lazy:false,// (default) if true, the plugin looks for the items on each event(allows AJAX or JS content, or reordering)
		//interval:1000, // It's the number of milliseconds to automatically go to the next
		//constant:true, // constant speed
		
		onBefore:function( e, elem, $pane, $items, pos ){
			e.preventDefault();
			if( this.blur )
				this.blur();
		},
		onAfter:function( elem ){
			//'this' is the element being scrolled ($pane) not jqueryfied
		}
	});
	
});