//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    $(".header-nav").fadeToggle();
  $(this).parent().toggleClass('is-active');
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $("#header").addClass("scroll-down");
    }
    else {
        $("#header").removeClass("scroll-down");
    }
});


//matchHeight
jQuery(function ($) {
    $('.top-school__slider-ttl').matchHeight();
});



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
        breakpoint: 1200,
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
  autoplay: true
});

$('.js-slider-news').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1201,
          settings: {
                slidesToShow: 3
          }
        },
        {
          breakpoint: 641,
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

$(window).on('resize load', function () {
  const h_img = $('.top-news__slider-img').outerHeight();
  const h_img_2 = $('.top-school__slider-img').outerHeight() + 30;
  $('.top-news__slider .slick-arrow').css('top', h_img / 2);
  $('.top-school__slider .slick-arrow').css('top', h_img_2 / 2);
})

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
