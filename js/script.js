
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

/* eof progress preloader */



// back to top
$(document).ready(function(){

    $("#back-to-top").click(function(){
        $("html,body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
// eof back to top


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
// EOF typed.js

// Create a new instance of Headhesive
// Options
var options = {
  offset: 1
}

// Create a new instance of Headhesive.js and pass in some options
var header = new Headhesive('.top-nav', options);


// EOF headsive.js

// burger animation itself
//
// var toggled = 0;
//
// $('.burger-menu').click(function(){
//   if(toggled == 0){
//   $('.burg3').stop().transition({rotate: "45", "margin-top": "13px"});
//   $('.burg2').stop().transition({opacity: "0"}, "fast");
//   $('.burg1').stop().transition({rotate: "-45", "margin-top": "13px"});
//     toggled++;
//   }
//   else{
//   $('.burg3').stop().transition({rotate: "+=135", "margin-top": "8px"});
//   $('.burg2').transition({opacity: "1"}, "fast");
//   $('.burg1').stop().transition({rotate: "-=135", "margin-top": "18px"});
//   toggled--;
//   }
// });

$("a.burger").click(function(){
  $(this).toggleClass("selected");
});
// EOF  burger animation itself




// burger behave



// добавляем класс с анимацией по клику на бургер, а сами стили выносим из js into css
// одновременно по клику на бургер вешаем классы на всплывающее меню
// при отбратном клике по бургеру всё предыдущее отменяется.
// opacity для nav блока меняем динамически и display none на block

$(document).ready(function(){
	var open = false;
	jQuery('a.burger').on('click', function() {
			// jQuery(this).find(".burger-menu").toggleClass("main-nav-bar-active");
			if (open == false) {
					jQuery('.main-nav-bar').fadeIn(300);
					open = true;
			} else {
					jQuery('.main-nav-bar').fadeOut(300);
					open = false;
			}
			stag_wpml_widget_position();
	});
});
// EOF burger behave
