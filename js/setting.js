//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    $(".header-nav").fadeToggle();
  $(this).parent().toggleClass('is-active');
});


// $(document).on("click", function(){
// 	$("aa").hide();
// });

$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $("#header").addClass("scroll-down");
    }
    else {
        $("#header").removeClass("scroll-down");
    }
});

//resize slider load page
// var window_type;
// var $window = $(window);
// if ($window.width() <= 1024) {
//     window_type = 'sp';
// } else {
//     window_type = 'pc';
// }
// $(window).resize(function() {
//     if($window.width() <= 1024){
//         if( (window_type != 'sp') ){
//             location.reload();
//         }
//     }else{
//         if(window_type != 'pc'){
//             location.reload();
//         }
//     }
// });




// $(window).on("load resize",function () {
//     $("main").css("padding-top",$("#header").outerHeight());
// });



//siider-home
// $('.js-mv-slider').slick({
//     dots: false,
//     focusOnSelect: true,
//     pauseOnHover:false,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     autoplay: false,
//     cssEase: 'linear'
// });

// $(".js-product").slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	autoplay: true,
// 	autoplaySpeed: 2000,
	// prevArrow:"<button type='button' class='slick-prev pull-left'></button>",
	// nextArrow:"<button type='button' class='slick-next pull-right'></button>"
// });


// $(".js-product").slick({
//   slidesToShow: item,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });


// $(function () {
//     objectFitImages('img');
// });


//matchHeight
// jQuery(function ($) {
//     $('.news .item').matchHeight();
// });



//fade
// $(window).on('scroll load assessFeatureHeaders', function(){
//     var scrollTop = $(window).scrollTop();
//     var appearenceBuffer = 60;
//     var windowBottom = scrollTop + $(window).height() - appearenceBuffer;
//     $('body').toggleClass('scrolled-down', scrollTop > 0);
//     $('.js-scrollin:not(.active)').filter(function(){
//         var offset = $(this).offset().top;
//         var height = $(this).outerHeight();
//         return offset + height >= scrollTop && offset <= windowBottom;
//     }).addClass('active');
// });


//backtop
// jQuery(document).ready(function ($) {
//     $(".js-backtop").hide();
//     $(window).on("scroll", function () {
//         if($(window).scrollTop()> $("#footer").offset().top - $(window).outerHeight()){
//             $(".js-backtop").addClass("active");
//         }
//         else {
//             $(".js-backtop").removeClass("active");
//         }
//         if ($(this).scrollTop() > 100) {
//             $(".js-backtop").fadeIn("fast");
//         } else {
//             $(".js-backtop").fadeOut("fast");
//         }
//     });
//     $('.js-backtop').click(function () {
//         $('body,html').animate({
//             scrollTop: 0
//         }, 500);
//         return false;
//     });
// });


const mv_slider = $('.js-mv-slider');
const school_slider = $('.js-school-slider');

const paging = $('.lp-mv__slider-pagination');
const paging_02 = $('.slider-pagination');

mv_slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    paging.html('<span>0' + i +'/</span>0'+ slick.slideCount);
});


school_slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  paging_02.html('<span>0' + i +'/</span>0'+ slick.slideCount);
});

school_slider.slick({
    infinite: true,
    slidesToShow: 3,
		slidesToScroll: 1,
		appendDots: $('.slider-dots'),
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
              slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
});


$(".slider-prev").click(function () {
  school_slider.slick("slickPrev");
});

$(".slider-next").click(function () {
  school_slider.slick("slickNext");
});


mv_slider.slick({
  infinite: true,
  fade: true,
  dots: true,
	autoplay: true,
});

$('.js-slider-news').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768,
          settings: {
                slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
});


$(function () {
	var headerHeight = $('#header').outerHeight();
	var urlHash = location.hash;
	if (urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function () {
			var target = $(urlHash);
			var position = target.offset().top - headerHeight - 50;
			$('body,html').stop().animate({scrollTop: position}, 1000);
		}, 100);
	}
	
	$('.js-scroll').click(function () {
		var href = $(this).attr("href");
		var target = $(href);
		var position = target.offset().top - headerHeight - 50;
		$('body,html').stop().animate({scrollTop: position}, 1000);
	});
});
