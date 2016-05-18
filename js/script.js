
/* progress loader */
$(document).ready(function(){
	NProgress.start();
});

$(window).load(function(){
	setTimeout(function(){
		$(".title, .drops").removeClass("out");
		NProgress.set(0.5);
	}, 400);
	setTimeout(function(){
		NProgress.set(0.7);
	}, 800);
	setTimeout(function(){
		NProgress.set(0.8);
	}, 1300);
	setTimeout(function(){
		NProgress.done();
	}, 1500);
});
/* /progress preloader */



/* smooth scrolling from nav menu */
$(document).ready(function(){

	$(".headhesive .main-nav-bar a[href^='#']").click(function(){
			$("html, body").animate({
					scrollTop: $( $.attr(this, "href") ).offset().top
			}, 500);
			return false;
	});

});
/* /smooth scrolling from nav menu */



/* back to top */
$(document).ready(function(){

    $("#back-to-top").click(function(){
        $("html,body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
/* /back to top */



// typed.js
function typed () {
	if ($(".typed").length) {
		$(".typed").typed({
	        stringsElement: $('.typed-strings'),
	        typeSpeed: 200,
	        backDelay: 1500,
	        loop: true,
	        contentType: 'html', // or text
	        // defaults to false for infinite loop
	        loopCount: false,
	        callback: function () { null; },
	        resetCallback: function () { newTyped(); }
	    });
    };
}

	// instance of fuction while Document ready event
jQuery(document).on('ready', function () {
	(function ($) {
		typed();
	})(jQuery);
});
// /typed.js



// Headhesive
	// Options
var options = {
  offset: 1
}

	// Create a new instance of Headhesive.js and pass in some options
var header = new Headhesive('.top-nav', options);
// /Headhesive



// burger

	// burger animation itself:
$("a.burger-link").click(function(e){
	e.preventDefault();
  $(this).toggleClass("burger-active");
});


	// main-nav-bar appearence:
$(document).ready(function(){
	var open = false;
	jQuery('a.burger-link').on('click', function() {
			// jQuery(this).find(".burger-menu").toggleClass("main-nav-bar-active");
			if (open == false) {
					jQuery('.main-nav-bar').fadeIn(300);
					open = true;
			} else {
					jQuery('.main-nav-bar').fadeOut(300);
					open = false;
			}
	});

	// отлов событя размер окна
	window.addEventListener("resize", function(){
		// при ширине до 700px делаем следующее:
		if (window.matchMedia("(max-width: 700px)").matches) {
			jQuery('.toggle-handy').on('click', function() {
					if (open == true) {
							jQuery('.main-nav-bar').fadeOut(300);
							open = false;
							$("a.burger-link").removeClass("burger-active");
					}
			});
		}
	})

});

// /burger


// services-hover
var thisBox =  null;
$('.portfolio-item-content').on('mouseenter', function() {

    thisBox =  $(this);
    thisBox.addClass('element-box-hover1');

    var intervalBox1 = setTimeout(function(){
      thisBox.addClass('element-box-hover2');
      //clearInterval(intervalBox1);
    }, 300);
    return false;
});

$('.portfolio-item-content').on('mouseleave', function() {
    thisBox =  $(this);
    var intervalBox2 = setTimeout(function(){
      $('.portfolio-item-content').removeClass('element-box-hover2');
      //clearInterval(intervalBox3);
    }, 300);

    var intervalBox3 =setTimeout(function(){
      $('.portfolio-item-content').removeClass('element-box-hover1');
      //clearInterval(intervalBox4);
    }, 600);
    return false;
});

// /services-hover
