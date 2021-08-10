
"use strict"; // Start of use strict

    $(document).ready(function(){

          $('#sandbox-container div').datepicker({
         }); 



    	 
    //      $(".login_form_bg").fadeOut();
    // $(".close_1").click(function(){
    //      $(".login_form_bg").fadeOut();
    // });

    // $(".login_pop").click(function(){
    //      $(".login_form_bg").fadeIn();
    // });


    //   $(".sign_form_bg").fadeOut();
    // $(".close_2").click(function(){
    //      $(".sign_form_bg").fadeOut();
    // });

    // $(".sign_pop").click(function(){
    //      $(".sign_form_bg").fadeIn();
    // });
    
});
    // Starrr plugin (https://github.com/dobtco/starrr)
var __slice = [].slice;

(function($, window) {
  var Starrr;

  Starrr = (function() {
    Starrr.prototype.defaults = {
      rating: void 0,
      numStars: 5,
      change: function(e, value) {}
    };

    function Starrr($el, options) {
      var i, _, _ref,
        _this = this;

      this.options = $.extend({}, this.defaults, options);
      this.$el = $el;
      _ref = this.defaults;
      for (i in _ref) {
        _ = _ref[i];
        if (this.$el.data(i) != null) {
          this.options[i] = this.$el.data(i);
        }
      }
      this.createStars();
      this.syncRating();
      this.$el.on('mouseover.starrr', 'span', function(e) {
        return _this.syncRating(_this.$el.find('span').index(e.currentTarget) + 1);
      });
      this.$el.on('mouseout.starrr', function() {
        return _this.syncRating();
      });
      this.$el.on('click.starrr', 'span', function(e) {
        return _this.setRating(_this.$el.find('span').index(e.currentTarget) + 1);
      });
      this.$el.on('starrr:change', this.options.change);
    }

    Starrr.prototype.createStars = function() {
      var _i, _ref, _results;

      _results = [];
      for (_i = 1, _ref = this.options.numStars; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--) {
        _results.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"));
      }
      return _results;
    };

    Starrr.prototype.setRating = function(rating) {
      if (this.options.rating === rating) {
        rating = void 0;
      }
      this.options.rating = rating;
      this.syncRating();
      return this.$el.trigger('starrr:change', rating);
    };

    Starrr.prototype.syncRating = function(rating) {
      var i, _i, _j, _ref;

      rating || (rating = this.options.rating);
      if (rating) {
        for (i = _i = 0, _ref = rating - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          this.$el.find('span').eq(i).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
        }
      }
      if (rating && rating < 5) {
        for (i = _j = rating; rating <= 4 ? _j <= 4 : _j >= 4; i = rating <= 4 ? ++_j : --_j) {
          this.$el.find('span').eq(i).removeClass('glyphicon-star').addClass('glyphicon-star-empty');
        }
      }
      if (!rating) {
        return this.$el.find('span').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
      }
    };

    return Starrr;

  })();
  return $.fn.extend({
    starrr: function() {
      var args, option;

      option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return this.each(function() {
        var data;

        data = $(this).data('star-rating');
        if (!data) {
          $(this).data('star-rating', (data = new Starrr($(this), option)));
        }
        if (typeof option === 'string') {
          return data[option].apply(data, args);
        }
      });
    }
  });
})(window.jQuery, window);

$(function() {
  return $(".starrr").starrr();
});

$( document ).ready(function() {
      
  $('#stars').on('starrr:change', function(e, value){
    $('#count').html(value);
  });
  
  $('#stars-existing').on('starrr:change', function(e, value){
    $('#count-existing').html(value);
  });
});
// 1. revolution slider
function revolutionSliderActiver () {
	if ($('.rev_slider_wrapper #slider1').length) {
		jQuery("#slider1").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			dottedOverlay:"yes",
			delay:5000,
			navigation: {
				arrows:{enable:true,
						left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0
                    }

				} 
			}, 
            gridwidth: [1200, 940, 720, 480],
            gridheight: [900, 800, 650, 500],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
		});
	};
}

// 2. mainmenu
function mainmenu() {

    var navcollapse = $('.main-menu .navigation li');
        navcollapse.hover(function() {
            $(this).children('ul').stop(true, false, true).slideToggle(300);
        });
	//Submenu Dropdown Toggle
	if($('.main-menu .mobile-menu li.dropdown ul').length){
		$('.main-menu .mobile-menu li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-menu .mobile-menu li.dropdown .dropdown-btn').click(function() {
			$(this).prev('ul').slideToggle(500);
		});
	}
}

// 3.sticky Header
function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').addClass('stricky-fixed');
            $('.scroll-to-top').fadeIn(1500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed');
            $('.scroll-to-top').fadeOut(1500);
        }
    };
}

// 4. gallery fancybox activator 
function GalleryFancyboxActivator () {
  var galleryFcb = $('.fancybox');
  if(galleryFcb.length){
    galleryFcb.fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',
      helpers : {
        media : {}
      }
    });
  }
}

// 5. service carousel
function servicecarousel () {
	if ($('.service-carousel').length) {
		$('.service-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: true,
		    navText: [
	            '<i class="fa fa-angle-left"></i>',
	            '<i class="fa fa-angle-right"></i>'
	        ],
		    smartSpeed:2000,
		    autoplayTimeout:3000,
		    dots: false,
		    autoWidth: false,
		    autoplay:true,
		    autoplayHoverPause:true,
		    responsive: {
		        0:{
		            items:3,
		            autoWidth: false
		        },
		        540:{
		            items:3,
		            autoWidth: false
		        },
		        740:{
		            items:5,
		            autoWidth: false
		        },
		        992:{
		            items:6,
		            autoWidth: false
		        }
		    }
		});
	};
}

// 6. service carousel2
function servicecarousel2 () {
	if ($('.service-carousel2').length) {
		$('.service-carousel2').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: false,
		    smartSpeed:2000,
		    dots: false,
		    autoWidth: false,
		    autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true,
		    responsive: {
		        0:{
		            items:1,
		            autoWidth: false
		        },
		        540:{
		            items:1,
		            autoWidth: false
		        },
		        740:{
		            items:2,
		            autoWidth: false
		        },
		        992:{
		            items:3,
		            autoWidth: false
		        }
		    }
		});
	};
}

// 7. Fact Counter
function factCounter() {
	if($('.fact-counter').length){
		$('.fact-counter .counter-column.animated').each(function() {
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		});
	}
}

// 8. Price Ranger 
function priceFilter() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 10,
            max: 200,
            values: [2, 100],
            slide: function(event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    };
}

// 9. Cart Touch Spin
function cartTouchSpin () {
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}
}

// 10. Video Fancybox
function videoFancybox () {
	if ($("a.video-fancybox").length) {
		$("a.video-fancybox").click(function() {
		    $.fancybox({
		            'padding'       : 0,
		            'autoScale'     : false,
		            'transitionIn'  : 'none',
		            'transitionOut' : 'none',
		            'title'         : this.title,
		            'width'         : 680,
		            'height'        : 495,
		            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		            'type'          : 'swf',
		            openEffect      : 'elastic',
				    closeEffect     : 'elastic',
				    helpers         : {
				    	media : {}
				    },
		            'swf'           : {
		            	'wmode'             : 'transparent',
		                'allowfullscreen'   : 'true'
		            }
		        });

		    return false;
		});
	};
}

// 11. Prealoder
function handlePreloader() {
	if($('.preloader').length){
		$('.preloader').delay(200).fadeOut(500);
	}
}


// 12. Scroll to top
function scrollToTop() {
    if ($('.scroll-top').length) {

        //Check to see if the window is top if not then display button
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scroll-top').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 1500);
            return false;
        });
    }
}

// 13. flexslider
function singleProduct () {
    
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
}

// 14. LightBox / Fancybox
if($('.lightbox-image').length) {
	$('.lightbox-image').fancybox({
		openEffect  : 'fade',
		closeEffect : 'fade',
		helpers : {
			media : {}
		}
	});
}

// 15. masonary layout
function galleryMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
        $('.post-filter li').children('span').click(function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');

            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}

// 16. Contact Form Validation
if($("#contact-form").length){
	$("#contact-form").validate({
	    submitHandler: function(form) {
	      var form_btn = $(form).find('button[type="submit"]');
	      var form_result_div = '#form-result';
	      $(form_result_div).remove();
	      form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
	      var form_btn_old_msg = form_btn.html();
	      form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
	      $(form).ajaxSubmit({
	        dataType:  'json',
	        success: function(data) {
	          if( data.status == 'true' ) {
	            $(form).find('.form-control').val('');
	          }
	          form_btn.prop('disabled', false).html(form_btn_old_msg);
	          $(form_result_div).html(data.message).fadeIn('slow');
	          setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
	        }
	      });
	    }
	});
}


// 17. Accordion box
if ($('.accordion-box').length) {
    $('.accordion-box .acc-btn').click(function() {
        if ($(this).hasClass('active') !== true) {
            $('.accordion-box .acc-btn').removeClass('active');
        }

        if ($(this).next('.acc-content').is(':visible')) {
            $(this).removeClass('active');
            $(this).next('.acc-content').slideUp(500);
        } else {
            $(this).addClass('active');
            $('.accordion-box .acc-content').slideUp(500);
            $(this).next('.acc-content').slideDown(500);
        }
    });
}

// 18. service-accordion-box 
if ($('.service-accordion-box').length) {
    $('.service-accordion-box .acc-btn').click(function() {
        if ($(this).hasClass('active') !== true) {
            $('.service-accordion-box .acc-btn').removeClass('active');
        }

        if ($(this).next('.acc-content').is(':visible')) {
            $(this).removeClass('active');
            $(this).next('.acc-content').slideUp(500);
        } else {
            $(this).addClass('active');
            $('.service-accordion-box .acc-content').slideUp(500);
            $(this).next('.acc-content').slideDown(500);
        }
    });
}


// 19. Progress Bar / Levels
if($('.progress-levels .progress-box .bar-fill').length){
	$(".progress-box .bar-fill").each(function() {
		var progressWidth = $(this).attr('data-percent');
		$(this).css('width',progressWidth+'%');
		$(this).parents('.progress-box').children('.percent').html(progressWidth+'%');
	});
}

// 20. Elements Animation
if($('.wow').length){
	var wow = new WOW(
	  {
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,       // trigger animations on mobile devices (default is true)
		live:         true       // act on asynchronously loaded content (default is true)
	  }
	);
	wow.init();
}


// instance of fuction while Document ready event	
jQuery(document).ready(function () {
	(function ($) {
		// revolutionSliderActiver();					
		// GalleryFancyboxActivator();
		// priceFilter();
		// cartTouchSpin();
		// videoFancybox();
		handlePreloader();
		// scrollToTop();
		// singleProduct();
		mainmenu();
		// galleryMasonaryLayout();
	})(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).load(function () {
	(function ($) {
		servicecarousel();
		servicecarousel2();
		galleryMasonaryLayout();
	})(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).scroll(function () {	
	(function ($) {
		stickyHeader();
		factCounter();
	})(jQuery);
});
