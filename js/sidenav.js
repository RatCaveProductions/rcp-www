$(function() {

	$(' #about ').waypoint(function (direction) {
		if (direction == 'down') {
			$(' #nav ').show("slide", { direction: "left", duration: 500, easing: 'easeOutQuart' } );
			$( 'article' ).clearQueue().animate({ "padding": "100px 50px 100px 330px"}, 1000, "easeOutBack" );
		}
		else {
			//nothing
		}
	}, { offset: 100 });

	$(' #about ').waypoint(function (direction) {
		if (direction == 'down') {
			$( "ul li a" ).first().addClass( "active" );
		}
		else {
			$(' #nav ').hide("slide", { direction: "left", duration: 200, easing: 'swing' } );
			$( 'article' ).clearQueue().animate({ "padding": "100px 0"}, 1000, "easeOutBack" );
		}
	}, { offset: '30%' });

	$(' #services ').waypoint(function (direction) {
		if (direction == 'down') {
			$( "ul li a" ).slice( 0, 2 ).toggleClass( "active" );
			$( ".selector" ).clearQueue().animate({ "top": "202px"}, 500, "easeOutQuart" );
		}
		else {
			$( "ul li a" ).slice( 0, 2 ).toggleClass( "active" );
			$( ".selector" ).clearQueue().animate({ "top": "156px"}, 500, "easeOutQuart" );
		}
	}, { offset: '30%' });

	$(' #team ').waypoint(function (direction) {
		if (direction == 'down') {
			$( "ul li a" ).slice( 1, 3 ).toggleClass( "active" );
			$( ".selector" ).clearQueue().animate({ "top": "248px"}, 500, "easeOutQuart" );
		}
		else {
			$( "ul li a" ).slice( 1, 3 ).toggleClass( "active" );
			$( ".selector" ).clearQueue().animate({ "top": "202px"}, 500, "easeOutQuart" );
		}
	}, { offset: '30%' });

	$(' #work ').waypoint(function (direction) {
		if (direction == 'down') {
			$( "ul li a" ).slice( 2, 4 ).toggleClass( "active" );
			$( ".selector" ).clearQueue().animate({ "top": "294px"}, 500, "easeOutQuart" );
		}
		else {
			$( "ul li a" ).slice( 2, 4 ).toggleClass( "active" );
			$( ".selector" ).clearQueue().animate({ "top": "248px"}, 500, "easeOutQuart" );
		}
	}, { offset: '30%' });

	$(' #contact ').waypoint(function (direction) {
		if (direction == 'down') {
			$( "ul li a" ).slice( 3, 5 ).toggleClass( "active" );
			$( ".selector" ).clearQueue().animate({ "top": "340px"}, 500, "easeOutQuart" );
		}
		else {
			$( "ul li a" ).slice( 3, 5 ).toggleClass( "active" );
			$( ".selector" ).clearQueue().animate({ "top": "294px"}, 500, "easeOutQuart" );
		}
	}, { offset: '30%' });

});