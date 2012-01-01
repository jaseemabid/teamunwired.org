$(document).ready(function(){

	$('ul#globalnav > li > a')
		.mouseover (function() { $(this).animate({top:'4px'} , 200 , 'linear' , function(){} ) } )
		.mouseout (function() { $(this).animate	({top:'0px'} , 100 , '' , function(){} ) } )
		.click( function() { $('*').removeClass("live"); $(this).addClass("live"); });

	/* Show main div on clicking globalnav */
	$('ul#globalnav li').click(function() {
		var numb = $("ul#globalnav li").index(this);
		var resource = 'ajax/tab' + numb + '.html';
		$('div.maincontent').load(resource , function(){
			$('div.maincontent').height(465);
			$('ul#subnav > li > a')
				.mouseover (function() { $(this).animate({'padding-left':'10px'} , 200 , '' , function(){} ) } )
				.mouseout (function() { $(this).animate({'padding-left':'0px'} , 100 , '' , function(){} ) } )
				.click( function() { $('ul#subnav > li > a').removeClass("live"); $(this).addClass("live"); });
			/* Show sub div on clicking subnav */
			$('ul#subnav li').click(function() {
			var numb = $("ul#subnav li").index(this);
			$('div.panel').fadeOut("fast").eq(numb).fadeIn("");
			});
		});
	});
	/* Slideshow */
	function slideshow(){
		var images = [{
			'src': 'graphics/logos/sanpar.png',
			'type': 'Transport sponsor', 
			'link': 'http://www.sanpar.com/'
		},{
			'src': 'graphics/logos/gasotech.png',
			'type': 'Title Sponsor', 
			'link': 'http://www.gasotech.com/'
		},{
			'src': 'graphics/logos/eaton.png',
			'type': 'Past Sponsors', 
			'link': 'http://www.eaton.in/'
		},{
			'src': 'graphics/logos/acc.png',
			'type': 'Past Sponsors', 
			'link': 'http://www.acclimited.com/'
		},{
			'src': 'graphics/logos/sw.png',
			'type': 'Software Support',
			'link': 'http://www.solidworks.com/'
		},{
			'src': 'graphics/logos/ongc.png',
			'type': 'Past Sponsors', 
			'link': 'http://www.ongcindia.com/'
		}], i = 0, sImage = $('img#jSlider'), sLink = $('a.SponsorLink');

		setInterval(function(){
			if (i === images.length) i = 0;
			sImage.attr('src',images[i].src );
			sLink.attr('href',images[i].link );
			$('#SponsorTitle').html(images[i].type);
			i+= 1;
		}, 3000 );
	} slideshow();

	// Deck initialization
	$.deck('.slide');
	$('#style-themes').change(function() {
		$('#style-theme-link').attr('href', $(this).val());
	});
	$('#transition-themes').change(function() {
		$('#transition-theme-link').attr('href', $(this).val());
	});

});
