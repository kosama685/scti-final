// Wrap every letter in a span

/*home page animation start here*/
//

try{
	var textWrapper = document.querySelector('.ml13');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	anime.timeline({loop: true})
	  .add({
		targets: '.ml13 .letter',
		translateY: [100,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1400,
		delay: (el, i) => 300 + 30 * i
	  }).add({
		targets: '.ml13 .letter',
		translateY: [0,-100],
		opacity: [1,0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	  });

}
catch(e){ console.log(e); }


try{

	var textWrapper = document.querySelector('.ml10 .letters');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
	  .add({
		targets: '.ml10 .letter',
		rotateY: [-90, 0],
		duration: 1300,
		delay: (el, i) => 45 * i
	  }).add({
		targets: '.ml10',
		opacity: 0,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 1000
	  });	
}
catch(e){ console.log(e); }


try{
	var textWrapper = document.querySelector('.ml14');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
	  .add({
		targets: '.ml14 .letter',
		translateY: [100,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1400,
		delay: (el, i) => 300 + 30 * i
	  }).add({
		targets: '.ml14 .letter',
		translateY: [0,-100],
		opacity: [1,0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	  });	
}
catch(e){ console.log(e); }

try{
	var textWrapper = document.querySelector('.anim-heading');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
	  .add({
		targets: '.anim-heading .letter',
		translateY: [100,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1400,
		delay: (el, i) => 300 + 30 * i
	  }).add({
		targets: '.anim-heading .letter',
		translateY: [0,-100],
		opacity: [1,0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	  });	
}
catch(e){ console.log(e); }

 
try{
	var textWrapper = document.querySelector('.anim-heading-2');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
	  .add({
		targets: '.anim-heading-2 .letter',
		translateY: [100,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1400,
		delay: (el, i) => 300 + 30 * i
	  }).add({
		targets: '.anim-heading-2 .letter',
		translateY: [0,-100],
		opacity: [1,0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	  }); 
}
catch(e){ console.log(e); }


try{
	var textWrapper = document.querySelector('.anim-heading-3');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
	  .add({
		targets: '.anim-heading-3 .letter',
		translateY: [100,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1400,
		delay: (el, i) => 300 + 30 * i
	  }).add({
		targets: '.anim-heading-3 .letter',
		translateY: [0,-100],
		opacity: [1,0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	  });

}
  catch(e){ console.log(e); }

try{
	var textWrapper = document.querySelector('.anim-content');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
	  .add({
		targets: '.anim-content .letter',
		translateX: [40,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1200,
		delay: (el, i) => 500 + 30 * i
	  }).add({
		targets: '.anim-content .letter',
		translateX: [0,-30],
		opacity: [1,0],
		easing: "easeInExpo",
		duration: 1100,
		delay: (el, i) => 100 + 30 * i
	  });
	
}catch(e){ console.log(e); }

try{
	var textWrapper = document.querySelector('.anim-content-2');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
	  .add({
		targets: '.anim-content-2 .letter',
		translateX: [40,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1300,
		delay: (el, i) => 500 + 30 * i
	  }).add({
		targets: '.anim-content-2 .letter',
		translateX: [0,-30],
		opacity: [1,0],
		easing: "easeInExpo",
		duration: 1100,
		delay: (el, i) => 100 + 30 * i
	  });
	
}catch(e){ console.log(e); }


try{
	var textWrapper = document.querySelector('.anim-content-3');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
	  .add({
		targets: '.anim-content-3 .letter',
		translateX: [40,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1400,
		delay: (el, i) => 500 + 30 * i
	  }).add({
		targets: '.anim-content-3 .letter',
		translateX: [0,-30],
		opacity: [1,0],
		easing: "easeInExpo",
		duration: 1100,
		delay: (el, i) => 100 + 30 * i
	  });
	
}catch(e){ console.log(e); }




try{
	var textWrapper = document.querySelector('.anim-content-4');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
	  .add({
		targets: '.anim-content-4 .letter',
		translateX: [40,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1200,
		delay: (el, i) => 500 + 30 * i
	  }).add({
		targets: '.anim-content-4 .letter',
		translateX: [0,-30],
		opacity: [1,0],
		easing: "easeInExpo",
		duration: 1100,
		delay: (el, i) => 100 + 30 * i
	  });
	
}catch(e){ console.log(e); }

try{
	var textWrapper = document.querySelector('.anim-content-5');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
	  .add({
		targets: '.anim-content-5 .letter',
		translateX: [40,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1300,
		delay: (el, i) => 500 + 30 * i
	  }).add({
		targets: '.anim-content-5 .letter',
		translateX: [0,-30],
		opacity: [1,0],
		easing: "easeInExpo",
		duration: 1100,
		delay: (el, i) => 100 + 30 * i
	  });
	
}catch(e){ console.log(e); }


try{
	var textWrapper = document.querySelector('.anim-content-6');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
	  .add({
		targets: '.anim-content-6 .letter',
		translateX: [40,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1400,
		delay: (el, i) => 500 + 30 * i
	  }).add({
		targets: '.anim-content-6 .letter',
		translateX: [0,-30],
		opacity: [1,0],
		easing: "easeInExpo",
		duration: 1100,
		delay: (el, i) => 100 + 30 * i
	  });
	
}catch(e){ console.log(e); }
/*home page animation end here*/

/*content page animation start here*/


try{
	var textWrapper = document.querySelector('.c-1');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
	  .add({
		targets: '.c-1 .letter',
		translateX: [40,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1200,
		delay: (el, i) => 500 + 30 * i
	  }).add({
		targets: '.c-1 .letter',
		translateX: [0,-30],
		opacity: [1,0],
		easing: "easeInExpo",
		duration: 1100,
		delay: (el, i) => 100 + 30 * i
	  });	
}catch(e){ console.log(e); }



//var textWrapper = document.querySelector('.c-1 .letters');
//textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//
//anime.timeline({loop: true})
//  .add({
//    targets: '.c-1 .letter',
//    rotateY: [-90, 0],
//    duration: 1300,
//    delay: (el, i) => 45 * i
//  }).add({
//    targets: '.c-1',
//    opacity: 0,
//    duration: 1000,
//    easing: "easeOutExpo",
//    delay: 1000
//  });



//
//var textWrapper = document.querySelector('.ml13');
//textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//
//anime.timeline({loop: true})
//  .add({
//    targets: '.ml13 .letter',
//    translateY: [100,0],
//    translateZ: 0,
//    opacity: [0,1],
//    easing: "easeOutExpo",
//    duration: 1400,
//    delay: (el, i) => 300 + 30 * i
//  }).add({
//    targets: '.ml13 .letter',
//    translateY: [0,-100],
//    opacity: [1,0],
//    easing: "easeInExpo",
//    duration: 1200,
//    delay: (el, i) => 100 + 30 * i
//  });
//
//
//
//var textWrapper = document.querySelector('.ml14');
//textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//
//anime.timeline({loop: true})
//  .add({
//    targets: '.ml14 .letter',
//    translateY: [100,0],
//    translateZ: 0,
//    opacity: [0,1],
//    easing: "easeOutExpo",
//    duration: 1400,
//    delay: (el, i) => 300 + 30 * i
//  }).add({
//    targets: '.ml14 .letter',
//    translateY: [0,-100],
//    opacity: [1,0],
//    easing: "easeInExpo",
//    duration: 1200,
//    delay: (el, i) => 100 + 30 * i
//  });
//
//var textWrapper = document.querySelector('.anim-heading');
//textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//
//anime.timeline({loop: true})
//  .add({
//    targets: '.anim-heading .letter',
//    translateY: [100,0],
//    translateZ: 0,
//    opacity: [0,1],
//    easing: "easeOutExpo",
//    duration: 1400,
//    delay: (el, i) => 300 + 30 * i
//  }).add({
//    targets: '.anim-heading .letter',
//    translateY: [0,-100],
//    opacity: [1,0],
//    easing: "easeInExpo",
//    duration: 1200,
//    delay: (el, i) => 100 + 30 * i
//  }); 
//
//var textWrapper = document.querySelector('.anim-heading-2');
//textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//
//anime.timeline({loop: true})
//  .add({
//    targets: '.anim-heading-2 .letter',
//    translateY: [100,0],
//    translateZ: 0,
//    opacity: [0,1],
//    easing: "easeOutExpo",
//    duration: 1400,
//    delay: (el, i) => 300 + 30 * i
//  }).add({
//    targets: '.anim-heading-2 .letter',
//    translateY: [0,-100],
//    opacity: [1,0],
//    easing: "easeInExpo",
//    duration: 1200,
//    delay: (el, i) => 100 + 30 * i
//  });
//
//var textWrapper = document.querySelector('.anim-heading-3');
//textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//
//anime.timeline({loop: true})
//  .add({
//    targets: '.anim-heading-3 .letter',
//    translateY: [100,0],
//    translateZ: 0,
//    opacity: [0,1],
//    easing: "easeOutExpo",
//    duration: 1400,
//    delay: (el, i) => 300 + 30 * i
//  }).add({
//    targets: '.anim-heading-3 .letter',
//    translateY: [0,-100],
//    opacity: [1,0],
//    easing: "easeInExpo",
//    duration: 1200,
//    delay: (el, i) => 100 + 30 * i
//  });
// 
// 
//
//var textWrapper = document.querySelector('.anim-content');
//textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//
//anime.timeline({loop: true})
//  .add({
//    targets: '.anim-content .letter',
//    translateX: [40,0],
//    translateZ: 0,
//    opacity: [0,1],
//    easing: "easeOutExpo",
//    duration: 1200,
//    delay: (el, i) => 500 + 30 * i
//  }).add({
//    targets: '.anim-content .letter',
//    translateX: [0,-30],
//    opacity: [1,0],
//    easing: "easeInExpo",
//    duration: 1100,
//    delay: (el, i) => 100 + 30 * i
//  });

/*content page animation end here*/





  /*modal click change start here*/

  $(function(){
  	
      $('#order-2').on('click', function(){
          $('.order-1').modal('hide');
          $('.order-2').modal('show');
      }); 
  
  }); 


  /*modal click change end here*/




  /*ck editor end here*/

  /*slider start here*/

  jQuery('#header-slider').owlCarousel({
  	loop: true,
  	margin: 20,
  	dots: false,
  	autoplay: true,
  	nav: false,
  	autoplayTimeout: 3000,
  	autoplayHoverPause: true,
  	responsiveClass: true,
  	responsive: {
  		0: {
  			items: 1,
  			nav: true
  		},
  		600: {
  			items: 2,
  			nav: false,

  		},
  		991: {
  			items: 3,
  			nav: false,

  		},
  		992: {
  			items: 2,
  			nav: false,

  		},
  		1200: {
  			items: 3,



  		}
  	}
  });
  $('#home-slider-2').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	asNavFor: '#home-slider-1',
  	margin: 10,
  	autoplay: true,
  	autoplaySpeed: 3000,


  });

  $('#home-slider-1').slick({

  	accessibility: true,
  	adaptiveHeight: true,
  	centerMode: true,
  	centerPadding: '0px',
  	slidesPerRow: 3,
  	slidesToShow: 3,
  	slidesToScroll: 3,
  	asNavFor: '.home-slider-2',
  	dots: true,
  	focusOnSelect: true,
  	margin: 10,
  	responsive: [{
  		breakpoint: 767,
  		settings: {
  			slidesPerRow: 3,
  			slidesToShow: 3,
  			slidesToScroll: 3,
  			infinite: true, 
  		}
  	}, {
  		breakpoint: 576,
  		settings: {
  			slidesPerRow: 1,
  			slidesToShow: 1,
  			slidesToScroll: 1,
  			infinite: true, 
  		}
  	}]
  });


  //const one = document.querySelector("#slick-slide10");

  /*slider end here*/

  $('.user-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.logo-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.discount-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.design-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.prof-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.web-testi-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.prof-testi').owlCarousel({
    loop:true,
    margin:10,
	nav:false,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

  /*nav start here*/


  !(function (n, i, e, a) {
  	(n.navigation = function (t, s) {
  		var o = {
  				responsive: !0,
  				mobileBreakpoint: 1050,
  				showDuration: 200,
  				hideDuration: 200,
  				showDelayDuration: 0,
  				hideDelayDuration: 0,
  				submenuTrigger: "hover",
  				effect: "fade",
  				submenuIndicator: !0,
  				submenuIndicatorTrigger: !1,
  				hideSubWhenGoOut: !0,
  				visibleSubmenusOnMobile: !1,
  				fixed: !1,
  				overlay: !0,
  				overlayColor: "rgba(0, 0, 0, 0.5)",
  				hidden: !1,
  				hiddenOnMobile: !1,
  				offCanvasSide: "left",
  				offCanvasCloseButton: !0,
  				animationOnShow: "",
  				animationOnHide: "",
  				onInit: function () {},
  				onLandscape: function () {},
  				onPortrait: function () {},
  				onShowOffCanvas: function () {},
  				onHideOffCanvas: function () {}
  			},
  			r = this,
  			u = Number.MAX_VALUE,
  			d = 1,
  			l = "click.nav touchstart.nav",
  			f = "mouseenter focusin",
  			c = "mouseleave focusout";
  		r.settings = {};
  		var t = (n(t), t);
  		n(t).find(".nav-search").length > 0 &&
  			n(t)
  			.find(".nav-search")
  			.find("form")
  			.prepend(
  				"<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"
  			),
  			(r.init = function () {
  				(r.settings = n.extend({}, o, s)),
  				r.settings.offCanvasCloseButton &&
  					n(t)
  					.find(".nav-menus-wrapper")
  					.prepend(
  						"<span class='nav-menus-wrapper-close-button'>&#10005;</span>"
  					),
  					"right" == r.settings.offCanvasSide &&
  					n(t)
  					.find(".nav-menus-wrapper")
  					.addClass("nav-menus-wrapper-right"),
  					r.settings.hidden &&
  					(n(t).addClass("navigation-hidden"),
  						(r.settings.mobileBreakpoint = 99999)),
  					v(),
  					r.settings.fixed && n(t).addClass("navigation-fixed"),
  					n(t)
  					.find(".nav-toggle")
  					.on("click touchstart", function (n) {
  						n.stopPropagation(),
  							n.preventDefault(),
  							r.showOffcanvas(),
  							s !== a && r.callback("onShowOffCanvas");
  					}),
  					n(t)
  					.find(".nav-menus-wrapper-close-button")
  					.on("click touchstart", function () {
  						r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas");
  					}),
  					n(t)
  					.find(".nav-search-button, .nav-search-close-button")
  					.on("click touchstart keydown", function (i) {
  						i.stopPropagation(), i.preventDefault();
  						var e = i.keyCode || i.which;
  						"click" === i.type ||
  							"touchstart" === i.type ||
  							("keydown" === i.type && 13 == e) ?
  							r.toggleSearch() :
  							9 == e && n(i.target).blur();
  					}),
  					n(t).find(".megamenu-tabs").length > 0 && y(),
  					n(i).resize(function () {
  						r.initNavigationMode(C()), O(), r.settings.hiddenOnMobile && m();
  					}),
  					r.initNavigationMode(C()),
  					r.settings.hiddenOnMobile && m(),
  					s !== a && r.callback("onInit");
  			});
  		var h = function () {
  				n(t)
  					.find(".nav-submenu")
  					.hide(0),
  					n(t)
  					.find("li")
  					.removeClass("focus");
  			},
  			v = function () {
  				n(t)
  					.find("li")
  					.each(function () {
  						n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
  							(n(this)
  								.children(".nav-dropdown,.megamenu-panel")
  								.addClass("nav-submenu"),
  								r.settings.submenuIndicator &&
  								n(this)
  								.children("a")
  								.append(
  									"<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
  								));
  					});
  			},
  			m = function () {
  				n(t).hasClass("navigation-portrait") ?
  					n(t).addClass("navigation-hidden") :
  					n(t).removeClass("navigation-hidden");
  			};
  		(r.showSubmenu = function (i, e) {
  			C() > r.settings.mobileBreakpoint &&
  				n(t)
  				.find(".nav-search")
  				.find("form")
  				.fadeOut(),
  				"fade" == e ?
  				n(i)
  				.children(".nav-submenu")
  				.stop(!0, !0)
  				.delay(r.settings.showDelayDuration)
  				.fadeIn(r.settings.showDuration)
  				.removeClass(r.settings.animationOnHide)
  				.addClass(r.settings.animationOnShow) :
  				n(i)
  				.children(".nav-submenu")
  				.stop(!0, !0)
  				.delay(r.settings.showDelayDuration)
  				.slideDown(r.settings.showDuration)
  				.removeClass(r.settings.animationOnHide)
  				.addClass(r.settings.animationOnShow),
  				n(i).addClass("focus");
  		}),
  		(r.hideSubmenu = function (i, e) {
  			"fade" == e
  				?
  				n(i)
  				.find(".nav-submenu")
  				.stop(!0, !0)
  				.delay(r.settings.hideDelayDuration)
  				.fadeOut(r.settings.hideDuration)
  				.removeClass(r.settings.animationOnShow)
  				.addClass(r.settings.animationOnHide) :
  				n(i)
  				.find(".nav-submenu")
  				.stop(!0, !0)
  				.delay(r.settings.hideDelayDuration)
  				.slideUp(r.settings.hideDuration)
  				.removeClass(r.settings.animationOnShow)
  				.addClass(r.settings.animationOnHide),
  				n(i)
  				.removeClass("focus")
  				.find(".focus")
  				.removeClass("focus");
  		});
  		var p = function () {
  				n("body").addClass("no-scroll"),
  					r.settings.overlay &&
  					(n(t).append("<div class='nav-overlay-panel'></div>"),
  						n(t)
  						.find(".nav-overlay-panel")
  						.css("background-color", r.settings.overlayColor)
  						.fadeIn(300)
  						.on("click touchstart", function (n) {
  							r.hideOffcanvas();
  						}));
  			},
  			g = function () {
  				n("body").removeClass("no-scroll"),
  					r.settings.overlay &&
  					n(t)
  					.find(".nav-overlay-panel")
  					.fadeOut(400, function () {
  						n(this).remove();
  					});
  			};
  		(r.showOffcanvas = function () {
  			p(),
  				"left" == r.settings.offCanvasSide ?
  				n(t)
  				.find(".nav-menus-wrapper")
  				.css("transition-property", "left")
  				.addClass("nav-menus-wrapper-open") :
  				n(t)
  				.find(".nav-menus-wrapper")
  				.css("transition-property", "right")
  				.addClass("nav-menus-wrapper-open");
  		}),
  		(r.hideOffcanvas = function () {
  			n(t)
  				.find(".nav-menus-wrapper")
  				.removeClass("nav-menus-wrapper-open")
  				.on(
  					"webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
  					function () {
  						n(t)
  							.find(".nav-menus-wrapper")
  							.css("transition-property", "none")
  							.off();
  					}
  				),
  				g();
  		}),
  		(r.toggleOffcanvas = function () {
  			C() <= r.settings.mobileBreakpoint &&
  				(n(t)
  					.find(".nav-menus-wrapper")
  					.hasClass("nav-menus-wrapper-open") ?
  					(r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas")) :
  					(r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")));
  		}),
  		(r.toggleSearch = function () {
  			"none" ==
  			n(t)
  				.find(".nav-search")
  				.find("form")
  				.css("display") ?
  				(n(t)
  					.find(".nav-search")
  					.find("form")
  					.fadeIn(200),
  					n(t)
  					.find(".nav-search")
  					.find("input")
  					.focus()) :
  				(n(t)
  					.find(".nav-search")
  					.find("form")
  					.fadeOut(200),
  					n(t)
  					.find(".nav-search")
  					.find("input")
  					.blur());
  		}),
  		(r.initNavigationMode = function (i) {
  			r.settings.responsive ?
  				(i <= r.settings.mobileBreakpoint &&
  					u > r.settings.mobileBreakpoint &&
  					(n(t)
  						.addClass("navigation-portrait")
  						.removeClass("navigation-landscape"),
  						S(),
  						s !== a && r.callback("onPortrait")),
  					i > r.settings.mobileBreakpoint &&
  					d <= r.settings.mobileBreakpoint &&
  					(n(t)
  						.addClass("navigation-landscape")
  						.removeClass("navigation-portrait"),
  						k(),
  						g(),
  						r.hideOffcanvas(),
  						s !== a && r.callback("onLandscape")),
  					(u = i),
  					(d = i)) :
  				(n(t).addClass("navigation-landscape"),
  					k(),
  					s !== a && r.callback("onLandscape"));
  		});
  		var b = function () {
  				n("html").on("click.body touchstart.body", function (i) {
  					0 === n(i.target).closest(".navigation").length &&
  						(n(t)
  							.find(".nav-submenu")
  							.fadeOut(),
  							n(t)
  							.find(".focus")
  							.removeClass("focus"),
  							n(t)
  							.find(".nav-search")
  							.find("form")
  							.fadeOut());
  				});
  			},
  			C = function () {
  				return (
  					i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
  				);
  			},
  			w = function () {
  				n(t)
  					.find(".nav-menu")
  					.find("li, a")
  					.off(l)
  					.off(f)
  					.off(c);
  			},
  			O = function () {
  				if (C() > r.settings.mobileBreakpoint) {
  					var i = n(t).outerWidth(!0);
  					n(t)
  						.find(".nav-menu")
  						.children("li")
  						.children(".nav-submenu")
  						.each(function () {
  							n(this)
  								.parent()
  								.position().left +
  								n(this).outerWidth() >
  								i ?
  								n(this).css("right", 0) :
  								n(this).css("right", "auto");
  						});
  				}
  			},
  			y = function () {
  				function i(i) {
  					var e = n(i)
  						.children(".megamenu-tabs-nav")
  						.children("li"),
  						a = n(i).children(".megamenu-tabs-pane");
  					n(e).on("click.tabs touchstart.tabs", function (i) {
  						i.stopPropagation(),
  							i.preventDefault(),
  							n(e).removeClass("active"),
  							n(this).addClass("active"),
  							n(a)
  							.hide(0)
  							.removeClass("active"),
  							n(a[n(this).index()])
  							.show(0)
  							.addClass("active");
  					});
  				}
  				if (n(t).find(".megamenu-tabs").length > 0)
  					for (var e = n(t).find(".megamenu-tabs"), a = 0; a < e.length; a++)
  						i(e[a]);
  			},
  			k = function () {
  				w(),
  					h(),
  					navigator.userAgent.match(/Mobi/i) ||
  					navigator.maxTouchPoints > 0 ||
  					"click" == r.settings.submenuTrigger ?
  					n(t)
  					.find(".nav-menu, .nav-dropdown")
  					.children("li")
  					.children("a")
  					.on(l, function (e) {
  						if (
  							(r.hideSubmenu(
  									n(this)
  									.parent("li")
  									.siblings("li"),
  									r.settings.effect
  								),
  								n(this)
  								.closest(".nav-menu")
  								.siblings(".nav-menu")
  								.find(".nav-submenu")
  								.fadeOut(r.settings.hideDuration),
  								n(this).siblings(".nav-submenu").length > 0)
  						) {
  							if (
  								(e.stopPropagation(),
  									e.preventDefault(),
  									"none" ==
  									n(this)
  									.siblings(".nav-submenu")
  									.css("display"))
  							)
  								return (
  									r.showSubmenu(n(this).parent("li"), r.settings.effect),
  									O(), !1
  								);
  							if (
  								(r.hideSubmenu(n(this).parent("li"), r.settings.effect),
  									"_blank" === n(this).attr("target") ||
  									"blank" === n(this).attr("target"))
  							)
  								i.open(n(this).attr("href"));
  							else {
  								if (
  									"#" === n(this).attr("href") ||
  									"" === n(this).attr("href") ||
  									"javascript:void(0)" === n(this).attr("href")
  								)
  									return !1;
  								i.location.href = n(this).attr("href");
  							}
  						}
  					}) :
  					n(t)
  					.find(".nav-menu")
  					.find("li")
  					.on(f, function () {
  						r.showSubmenu(this, r.settings.effect), O();
  					})
  					.on(c, function () {
  						r.hideSubmenu(this, r.settings.effect);
  					}),
  					r.settings.hideSubWhenGoOut && b();
  			},
  			S = function () {
  				w(),
  					h(),
  					r.settings.visibleSubmenusOnMobile ?
  					n(t)
  					.find(".nav-submenu")
  					.show(0) :
  					(n(t)
  						.find(".submenu-indicator")
  						.removeClass("submenu-indicator-up"),
  						r.settings.submenuIndicator && r.settings.submenuIndicatorTrigger ?
  						n(t)
  						.find(".submenu-indicator")
  						.on(l, function (i) {
  							return (
  								i.stopPropagation(),
  								i.preventDefault(),
  								r.hideSubmenu(
  									n(this)
  									.parent("a")
  									.parent("li")
  									.siblings("li"),
  									"slide"
  								),
  								r.hideSubmenu(
  									n(this)
  									.closest(".nav-menu")
  									.siblings(".nav-menu")
  									.children("li"),
  									"slide"
  								),
  								"none" ==
  								n(this)
  								.parent("a")
  								.siblings(".nav-submenu")
  								.css("display") ?
  								(n(this).addClass("submenu-indicator-up"),
  									n(this)
  									.parent("a")
  									.parent("li")
  									.siblings("li")
  									.find(".submenu-indicator")
  									.removeClass("submenu-indicator-up"),
  									n(this)
  									.closest(".nav-menu")
  									.siblings(".nav-menu")
  									.find(".submenu-indicator")
  									.removeClass("submenu-indicator-up"),
  									r.showSubmenu(
  										n(this)
  										.parent("a")
  										.parent("li"),
  										"slide"
  									), !1) :
  								(n(this)
  									.parent("a")
  									.parent("li")
  									.find(".submenu-indicator")
  									.removeClass("submenu-indicator-up"),
  									void r.hideSubmenu(
  										n(this)
  										.parent("a")
  										.parent("li"),
  										"slide"
  									))
  							);
  						}) :
  						n(t)
  						.find(".nav-menu, .nav-dropdown")
  						.children("li")
  						.children("a")
  						.on(l, function (e) {
  							if (
  								(e.stopPropagation(),
  									e.preventDefault(),
  									r.hideSubmenu(
  										n(this)
  										.parent("li")
  										.siblings("li"),
  										r.settings.effect
  									),
  									r.hideSubmenu(
  										n(this)
  										.closest(".nav-menu")
  										.siblings(".nav-menu")
  										.children("li"),
  										"slide"
  									),
  									"none" ==
  									n(this)
  									.siblings(".nav-submenu")
  									.css("display"))
  							)
  								return (
  									n(this)
  									.children(".submenu-indicator")
  									.addClass("submenu-indicator-up"),
  									n(this)
  									.parent("li")
  									.siblings("li")
  									.find(".submenu-indicator")
  									.removeClass("submenu-indicator-up"),
  									n(this)
  									.closest(".nav-menu")
  									.siblings(".nav-menu")
  									.find(".submenu-indicator")
  									.removeClass("submenu-indicator-up"),
  									r.showSubmenu(n(this).parent("li"), "slide"), !1
  								);
  							if (
  								(n(this)
  									.parent("li")
  									.find(".submenu-indicator")
  									.removeClass("submenu-indicator-up"),
  									r.hideSubmenu(n(this).parent("li"), "slide"),
  									"_blank" === n(this).attr("target") ||
  									"blank" === n(this).attr("target"))
  							)
  								i.open(n(this).attr("href"));
  							else {
  								if (
  									"#" === n(this).attr("href") ||
  									"" === n(this).attr("href") ||
  									"javascript:void(0)" === n(this).attr("href")
  								)
  									return !1;
  								i.location.href = n(this).attr("href");
  							}
  						}));
  			};
  		(r.callback = function (n) {
  			s[n] !== a && s[n].call(t);
  		}),
  		r.init();
  	}),
  	(n.fn.navigation = function (i) {
  		return this.each(function () {
  			if (a === n(this).data("navigation")) {
  				var e = new n.navigation(this, i);
  				n(this).data("navigation", e);
  			}
  		});
  	});
  })(jQuery, window, document);



  (function ($) {
  	'use strict';

  	var $window = $(window);

  	if ($.fn.navigation) {
  		$("#navigation1").navigation();
  		$("#always-hidden-nav").navigation({
  			hidden: true
  		});
  	}

  	$window.on('load', function () {
  		$('#preloader').fadeOut('slow', function () {
  			$(this).remove();
  		});
  	});

  })(jQuery);
  /*nav end here*/
