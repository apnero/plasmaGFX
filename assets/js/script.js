

function backstretch() { // used for fulldiv backgrounds
	$(".bp-post").backstretch("assets/img/11.jpg");
	$(".photo-album").backstretch([
		"assets/img/7.jpg", "assets/img/11.jpg", "assets/img/3.jpg"
		], {
		duration: 10000,
		fade: 750
	});
	$(".bp-post.two").backstretch("assets/img/12.jpg");
	$(".portfolio-img.one").backstretch("assets/gfx/kravparking.png");
	$(".portfolio-img.two").backstretch("assets/gfx/energydrink.png");
	$(".portfolio-img.three").backstretch("assets/gfx/plasmascapegreen.png");
	$(".portfolio-img.four").backstretch("assets/gfx/shiny pgx.png");
	$(".portfolio-img.five").backstretch("assets/gfx/strike-fit.png");
	$(".portfolio-img.six").backstretch("assets/gfx/kravsumpter.png");
	$(".portfolio-img.seven").backstretch("assets/img/14.jpg");
	$(".portfolio-img.eight").backstretch("assets/img/15.jpg");
	$(".portfolio-img.nine").backstretch("assets/img/16.jpg");
    $(window).resize(function () {
	$(".bp-post").backstretch("assets/img/11.jpg");
	$(".photo-album").backstretch([
		"assets/img/7.jpg", "assets/img/11.jpg", "assets/img/3.jpg"
		], {
		duration: 10000,
		fade: 750
	});
	$(".bp-post.two").backstretch("assets/img/12.jpg");
	$(".portfolio-img.one").backstretch("assets/gfx/kravparking.png");
	$(".portfolio-img.two").backstretch("assets/gfx/energydrink.png");
	$(".portfolio-img.three").backstretch("assets/gfx/plasmascapegreen.png");
	$(".portfolio-img.four").backstretch("assets/gfx/shiny pgx.png");
	$(".portfolio-img.five").backstretch("assets/gfx/strike-fit.png");
	$(".portfolio-img.six").backstretch("assets/gfx/kravsumpter.png");
	$(".portfolio-img.seven").backstretch("assets/img/14.jpg");
	$(".portfolio-img.eight").backstretch("assets/img/15.jpg");
	$(".portfolio-img.nine").backstretch("assets/img/16.jpg");
    });
}

function slider() {
	$('#slider').flexslider({
		animation: "slide"
	});
}

function panels() {
	// album panel
    /*$('#album').on('click', function() {
    	$("body").addClass("no-scroll");
        $('.panel').animate({
            'width': 'show'
        }, 1000, function() {
            $('.panel .album').fadeIn(500);
        });
    });*/

	// portfolio panel
    $("#portfolio1").on('click', function() {
    	//$("body").addClass("no-scroll");
        $('.panel1').animate({
            'width': 'show'
        }, 1000, function() {
            $('.panel1 .work1').fadeIn(500);
        });
    });
   $("#portfolio2").on('click', function() {
    	//$("body").addClass("no-scroll");
        $('.panel2').animate({
            'width': 'show'
        }, 1000, function() {
            $('.panel2 .work2').fadeIn(500);
        });
    });
    $("#portfolio3").on('click', function() {
    	//$("body").addClass("no-scroll");
        $('.panel3').animate({
            'width': 'show'
        }, 1000, function() {
            $('.panel3 .work3').fadeIn(500);
        });
    });	
	    $("#portfolio4").on('click', function() {
    	//$("body").addClass("no-scroll");
        $('.panel4').animate({
            'width': 'show'
        }, 1000, function() {
            $('.panel4 .work4').fadeIn(500);
        });
    });
   $("#portfolio5").on('click', function() {
    	//$("body").addClass("no-scroll");
        $('.panel5').animate({
            'width': 'show'
        }, 1000, function() {
            $('.panel5 .work5').fadeIn(500);
        });
    });
    $("#portfolio6").on('click', function() {
    	//$("body").addClass("no-scroll");
        $('.panel6').animate({
            'width': 'show'
        }, 1000, function() {
            $('.panel6 .work6').fadeIn(500);
        });
    });	
    $('.closeicon1').on('click', function() {
        $('.panel1 .work1').fadeIn(500, function() {
        	$("body").removeClass("no-scroll");
            $('.panel1').animate({
                'width': 'hide'
            }, 1000);
        });
    });
	$('.closeicon2').on('click', function() {
        $('.panel2 .work2').fadeIn(500, function() {
        	$("body").removeClass("no-scroll");
            $('.panel2').animate({
                'width': 'hide'
            }, 1000);
        });
    });
	$('.closeicon3').on('click', function() {
        $('.panel3 .work3').fadeIn(500, function() {
        	$("body").removeClass("no-scroll");
            $('.panel3').animate({
                'width': 'hide'
            }, 1000);
        });
    });
	    $('.closeicon4').on('click', function() {
        $('.panel4 .work4').fadeIn(500, function() {
        	$("body").removeClass("no-scroll");
            $('.panel4').animate({
                'width': 'hide'
            }, 1000);
        });
    });
	$('.closeicon5').on('click', function() {
        $('.panel5 .work5').fadeIn(500, function() {
        	$("body").removeClass("no-scroll");
            $('.panel5').animate({
                'width': 'hide'
            }, 1000);
        });
    });
	$('.closeicon6').on('click', function() {
        $('.panel6 .work6').fadeIn(500, function() {
        	$("body").removeClass("no-scroll");
            $('.panel6').animate({
                'width': 'hide'
            }, 1000);
        });
    });
}

function blogposts() { // only use if span is at the end of the row 
	$("#blogone").click(function(){
		$(".blog-post-item.one").toggleClass("reveal");
		$(".blog-post-item.two").removeClass("reveal"); // you dont have to add this line
	});
	$("#blogtwo").click(function(){
		$(".blog-post-item.two").toggleClass("reveal");
		$(".blog-post-item.one").removeClass("reveal"); // you dont have to add this line
	});  
}

function contentslider() {
	$('#content').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: false
	});
}
