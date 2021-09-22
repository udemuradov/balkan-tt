
(function ($) {
	
	"use strict";

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// // Menu elevator animation
	// $('a[href*=\\#]:not([href=\\#])').on('click', function() {
	// 	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	// 		var target = $(this.hash);
	// 		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	// 		if (target.length) {
	// 			var width = $(window).width();
	// 			if(width < 991) {
	// 				$('.menu-trigger').removeClass('active');
	// 				$('.header-area .nav').slideUp(200);	
	// 			}				
	// 			$('html,body').animate({
	// 				scrollTop: (target.offset().top) - 130
	// 			}, 700);
	// 			return false;
	// 		}
	// 	}
	// });

	// $(document).ready(function () {
	//     $(document).on("scroll", onScroll);
	    
	//     //smoothscroll
	//     $('a[href^="#"]').on('click', function (e) {
	//         e.preventDefault();
	//         $(document).off("scroll");
	        
	//         $('a').each(function () {
	//             $(this).removeClass('active');
	//         })
	//         $(this).addClass('active');
	      
	//         var target = this.hash,
	//         menu = target;
	//        	var target = $(this.hash);
	//         $('html, body').stop().animate({
	//             scrollTop: (target.offset().top) - 130
	//         }, 500, 'swing', function () {
	//             window.location.hash = target;
	//             $(document).on("scroll", onScroll);
	//         });
	//     });
	// });

	// function onScroll(event){
	//     var scrollPos = $(document).scrollTop();
	//     $('.nav a').each(function () {
	//         var currLink = $(this);
	//         var refElement = $(currLink.attr("href"));
	//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	//             $('.nav ul li a').removeClass("active");
	//             currLink.addClass("active");
	//         }
	//         else{
	//             currLink.removeClass("active");
	//         }
	//     });
	// }


	// Home seperator
	// if($('.home-seperator').length) {
	// 	$('.home-seperator .left-item, .home-seperator .right-item').imgfix();
	// }


	// // Home number counterup
	// if($('.count-item').length){
	// 	$('.count-item strong').counterUp({
	// 		delay: 10,
	// 		time: 1000
	// 	});
	// }


	// // Page loading animation
	// $(window).on('load', function() {
	// 	if($('.cover').length){
	// 		$('.cover').parallax({
	// 			imageSrc: $('.cover').data('image'),
	// 			zIndex: '1'
	// 		});
	// 	}

	// 	$("#preloader").animate({
	// 		'opacity': '0'
	// 	}, 600, function(){
	// 		setTimeout(function(){
	// 			$("#preloader").css("visibility", "hidden").fadeOut();
	// 		}, 300);
	// 	});
	// });


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);

const time = 1028;

for (let i of document.querySelectorAll(".counter")){
   let numberTop = i.getBoundingClientRect().top,
      start = +i.innerHTML,
      end = +i.getAttribute('data-target');  
    // end = +i.dataset.max;
   window.addEventListener("scroll", function onScroll() {
      if (window.pageYOffset > numberTop - window.innerHeight / 2) {
      this.removeEventListener("scroll", onScroll);
      let interval = this.setInterval(function () {
   start += (end/time);
         i.innerHTML = Math.floor( start);
         if (start > end) {
   i.innerHTML = end;
            clearInterval(interval);
         }
         }, 1);
      }
   });
}

if (!navigator.cookieEnabled) {
	alert("Для комфортной работы с сайтом, - включите Cookie");
}
	
	

        var defLang = 'ru';
let cookLang  = getCookie('lang');

if (cookLang){
    defLang = cookLang;
    changeLang(cookLang);
}else {
    setCookie('lang', defLang);
}
function changeLang(lang){
    // console.log('defLang: ', defLang)
    // console.log('lang: ', lang)
    // if (defLang !== lang){

        defLang = lang;
        setCookie('lang', lang);
        let elements = document.querySelectorAll('.lang');

        Array.prototype.forEach.call(elements, function(el, i){
            let attr = el.getAttribute('data-key');
            el.innerHTML = arrLang[lang][attr];
		});
         }
    // }

	$(function(){
	  $('#ru').click(function(){
		$('#name').attr('placeholder','Имя');
		$('#tel').attr('placeholder','Номер телефона');
		$('#message').attr('placeholder','Сообщение');
		
	  });
	});
	$(function(){
	  $('#tm').click(function(){
		$('#name').attr('placeholder','Ady');
		$('#tel').attr('placeholder','Telefon nomer');
		$('#message').attr('placeholder','Habar');
		
	  });
	});
	$(function(){
		$('#en').click(function(){
		  $('#name').attr('placeholder','Name');
		  $('#tel').attr('placeholder','Telephone number');
		  $('#message').attr('placeholder','Message');
		});
	  });

const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let tel = document.getElementById('tel');
let message = document.getElementById('message');
contactForm.addEventListener('submit', (e) => {
	e.preventDefault()
	let formData = {
	  name: name.value,
	  email: email.value,
	  tel: tel.value,
	  message: message.value
	}
	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/');
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.onload = function(){
	  console.log(xhr.responseText);
	  if(xhr.responseText == 'success'){
		alert('Сообщение отправлено');
		name.value = '';
		email.value = '';
		tel.value = '';
		message.value = '';
	  }
	  else{
		alert('Проверьте форму отправки')
	  }
	}
	xhr.send(JSON.stringify(formData));
});
