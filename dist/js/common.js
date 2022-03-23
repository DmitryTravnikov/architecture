'use strict';

//  //Каруселька
//  //Документация: http://owlgraphic.com/owlcarousel/
//  var owl = $(".carousel");
//  owl.owlCarousel({
// 	 items : 1,
// 	 autoPlay: 5000,
// 	 pagination: false,
// 	 transitionStyle: 'fade',
// 	 itemsDesktop: [1199,1],
// 	 itemsDesktopSmall: [979,1],
// 	 itemsTablet: [768,0],
// 	 itemsMobile: [479,0]
//  });
//  owl.on("mousewheel", ".owl-wrapper", function (e) {
// 	 if (e.deltaY > 0) {
// 		 owl.trigger("owl.prev");
// 	 } else {
// 		 owl.trigger("owl.next");
// 	 }
// 	 e.preventDefault();
//  });
//  $(".next_button").click(function(){
// 	 owl.trigger("owl.next");
//  });
//  $(".prev_button").click(function(){
// 	 owl.trigger("owl.prev");
//  });//карусель end
	
//  //Аякс отправка форм
//  //Документация: http://api.jquery.com/jquery.ajax/
//  $("form").submit(function() {
// 	 $.ajax({
// 		 type: "GET",
// 		 url: "mail.php",
// 		 data: $("form").serialize()
// 	 }).done(function() {
// 		 alert("Спасибо за заявку!");
// 		 setTimeout(function() {
// 			 $.fancybox.close();
// 		 }, 1000);
// 	 });
// 	 return false;
//  });//ajax формы end

// 	//AJAX вкладки (анимацию делать на keyframes)
// 	$('.link').click(function() {

// 		var info = $(this).attr('href') + ' #content';//берет href ссылки и задает тот блок, который будет обновляться с помощью ajax при переходе по ссылке
// 		$('#content').hide(0, loadContent());//скрываем содержимое блока #content той страницы, на которой находимся//задать анимацию для содержимого
// 		$('#loader').fadeIn('slow');//анимация лоадера

// 		function loadContent() {//основная функция для загрузки контента
// 			$('#content').load(info, '', function() {//блок, в который мы хотим загрузить новый контент//info подгружает именно тот контент, который нам нужен//'' - различные переменные, дата, опускаем его
// 				$('#content').show(0, hideLoader());//показываем наш блок с контентом//скрываем лоадер//задать анимацию для содержимого
// 			});
// 		}

// 		function hideLoader() {//функция для скрытия лоадера
// 			$('#loader').fadeOut('normal');
// 		}

// 		return false;//чтобы не происходило перехода по ссылке, а только происходила подгрузка контента

// 	});//ajax вкладки end

$(document).ready(function() {

	//prevent default
	function prevdef() {
		$('.prevdef').click(function(event) {
			event.preventDefault();
		});
	}// prevdef();
	prevdef();



	// Header
	let headerHamburger = document.querySelector('.header__hamburger');
	let headerMenu = document.querySelector('.header__menu');
	let headerMenuLinks = document.querySelectorAll('.header__menu-link');
	headerHamburger.onclick = function() {
		this.classList.toggle('active');
		headerMenu.classList.toggle('active');
	}
	for (let i = 0; i < headerMenuLinks.length; i++) {
		headerMenuLinks[i].onclick = function() {
			headerHamburger.classList.remove('active');
			headerMenu.classList.remove('active');
		}
	}






	// Main
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var mainSlider = $(".main__slider");
	mainSlider.owlCarousel({
		items : 1,
		autoPlay: 5000,
		pagination: true,
		transitionStyle: 'fade',
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,1],
		itemsMobile: [479,1]
	});





	// Projects
	let projectsTabs = document.querySelectorAll('.projects__tab.ajax');
	for (let i = 0; i < projectsTabs.length; i++) {
		projectsTabs[i].onclick = function() {
			for (let i = 0; i < projectsTabs.length; i++) {
				projectsTabs[i].classList.remove('active');
			}
			this.classList.add('active');
		}
	}

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var projectsSlider = $(".projects__slider");
	projectsSlider.owlCarousel({
		items : 1,
		autoPlay: 10000,
		pagination: true,
		transitionStyle: 'fade',
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,1],
		itemsMobile: [479,1]
	});


	//AJAX вкладки (анимацию делать на keyframes)
	$('.projects__tab.ajax').click(function() {

		var info = $(this).attr('href') + ' .projects__content';//берет href ссылки и задает тот блок, который будет обновляться с помощью ajax при переходе по ссылке
		$('.projects__content').hide(0, loadContent());//скрываем содержимое блока .projects__content той страницы, на которой находимся//задать анимацию для содержимого
		$('#loader').fadeIn('slow');//анимация лоадера

		function loadContent() {//основная функция для загрузки контента
			$('.projects__content').load(info, '', function() {//блок, в который мы хотим загрузить новый контент//info подгружает именно тот контент, который нам нужен//'' - различные переменные, дата, опускаем его
				$('.projects__content').fadeIn('fast', hideLoader());//показываем наш блок с контентом//скрываем лоадер//задать анимацию для содержимого

				//Каруселька
				//Документация: http://owlgraphic.com/owlcarousel/
				var projectsSlider = $(".projects__slider");
				projectsSlider.owlCarousel({
					items : 1,
					autoPlay: 10000,
					pagination: true,
					transitionStyle: 'fade',
					itemsDesktop: [1199,1],
					itemsDesktopSmall: [979,1],
					itemsTablet: [768,1],
					itemsMobile: [479,1]
				});
			});
		}

		function hideLoader() {//функция для скрытия лоадера
			$('#loader').fadeOut('normal');
		}

		return false;//чтобы не происходило перехода по ссылке, а только происходила подгрузка контента

	});//ajax вкладки end

	




	// Clients
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var clientsSlider = $(".clients__slider");
	clientsSlider.owlCarousel({
		items : 1,
		autoPlay: 5000,
		pagination: true,
		transitionStyle: 'fade',
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,1],
		itemsMobile: [479,1]
	});








	// Footer
	let footerSelectOptions = document.querySelectorAll('.footer__option');
	let footerFakeSelect = document.querySelector('.footer__fake-select');
	let footerFakeOptions = document.querySelectorAll('.footer__fake-option');
	let footerFakeOptionsContainer = document.querySelector('.footer__fake-options-container');

	footerFakeSelect.addEventListener('click', showfFOC);
	for (let i = 0; i < footerFakeOptions.length; i++) {
		footerFakeOptions[i].addEventListener('click', choosefFO);
	}

	function showfFOC() {
		footerFakeOptionsContainer.classList.toggle('active');
		this.classList.toggle('active');
	}

	function choosefFO() {
		for (let i = 0; i < footerFakeOptions.length; i++) {
			footerFakeOptions[i].classList.remove('active');
		}

		this.classList.add('active');
		footerFakeSelect.innerHTML = this.innerHTML;

		footerFakeOptionsContainer.classList.remove('active');
		footerFakeSelect.classList.remove('active');

		for (let i = 0; i < footerFakeOptions.length; i++) {
			if (footerFakeOptions[i].classList.contains('active')) {
				footerSelectOptions[i].selected = true;
			}
		}
	}





	// Плавный скролл
	$('.header__menu-link, .top').mPageScroll2id({
	  offset: 50,
	  scrollSpeed: 200
	});

	//to top button display
	window.onscroll = function() {
		var ypos = window.pageYOffset;
		var toTopLink = document.querySelector('.top');
		if (ypos > 500) {
			toTopLink.style.opacity = '1';
			toTopLink.style.zIndex = '900';
		} else {
			toTopLink.style.opacity = '';
			toTopLink.style.zIndex = '';
		}
	}

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log