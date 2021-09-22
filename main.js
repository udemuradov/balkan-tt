const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let tel = document.getElementById('tel');
let message = document.getElementById('message');
contactForm.addEventListener('submit', (e) => {
	e.preventDefault();
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
	
	/*© Un Sstrennen,2020*/
function getCookie(e,t=!1){if(!e)return;let n=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([.$?*|{}()\[\]\\\/+^])/g,"\\$1")+"=([^;]*)"));if(n){let e=decodeURIComponent(n[1]);if(t)try{return JSON.parse(e)}catch(e){}return e}}function setCookie(e,t,n={path:"/"}){if(!e)return;(n=n||{}).expires instanceof Date&&(n.expires=n.expires.toUTCString()),t instanceof Object&&(t=JSON.stringify(t));let o=encodeURIComponent(e)+"="+encodeURIComponent(t);for(let e in n){o+="; "+e;let t=n[e];!0!==t&&(o+="="+t)}document.cookie=o}function deleteCookie(e){setCookie(e,null,{expires:new Date,path:"/"})}

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


});