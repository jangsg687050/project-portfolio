$(function() {
	let sites = [
		{
			'title': 'recogai',
			'slogan': 'Lorem ipsum dolor',
			'url': 'portfolio/recogai/index.html',
			'image': 'images/recogai.jpg',
		}, {
			'title': 'hdj cultural center',
			'slogan': 'Lorem ipsum dolor',
			'url': 'portfolio/hdjcc/index.html',
			'image': 'images/hdjcc.jpg',
		}, {
			'title': 'conshow',
			'slogan': 'Lorem ipsum dolor',
			'url': 'portfolio/conshow/publish/index.html',
			'image': 'images/conshow.jpg',
		}, {
			'title': 'Startup',
			'slogan': 'Lorem ipsum dolor',
			'url': 'portfolio/startup/index.html',
			'image': 'images/startup.jpg',
		},
	];


	const menu = document.querySelectorAll('.inner-menu')[0];
	const imageContainer = document.querySelectorAll('.image-container')[0];


	sites.forEach(site => {
	let dataId = site.title.toLowerCase().replace(/\s/g, '-').replace(/'/g, '').replace(/"/g, '').replace(/</g, '').replace(/>/g, '');
	
	const listEl = $(`<li data-id="${dataId}">
		<a href="${site.url}" target="_blank">${site.title}</a>
		<span class="slogan">${site.slogan}</span>
	</li>`);
	
	const imgEl = $(`<div class="image" data-id="${dataId}">
			<img src="${site.image}" alt="${site.title} image">
	 </div>`);

	$(menu).append(listEl);
	$(imageContainer).append(imgEl);

	//console.log($(listEl));
	
	
	$(listEl).on('mouseover', function() {
		$('.image-container .image').removeClass('visible');
		$(this).addClass('hovered');
		$(imgEl).addClass('visible');
		
	}).on('mousemove', function(e) {
		let imgWidth = $(imgEl).outerWidth();
		let imgHeight = $(imgEl).outerHeight();
		console.log(imgHeight);
		TweenMax.to(imageContainer, .5, {
			left: e.clientX - (imgWidth / 2),
			top: e.clientY - (imgHeight / 2)
		});
		
	}).on('mouseleave', function() {
		$(this).removeClass('hovered');
	});

	$(menu).on('mouseover', function() {
		$(imageContainer).addClass('visible');
	}).on('mouseleave', function() {
		$(imageContainer).removeClass('visible');
	});
	$('.inner-menu li:nth-child(1)').addClass('active');
	//$('a').on('click', function(e) {e.preventDefault()});
	});
	//풀페이지
	var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  //메인슬라이드
	var swiper1 = new Swiper('.section1 .swiper-container', {
		slidesPerView: 1,
		observer:true,
		observeParents:true,
		parallax: true,
		loop: true,
		autoplay: true,
		speed: 500,
		effect: 'fade',
		fadeEffect: {
		crossFade: true
		},
		pagination: {
        el: '.swiper-pagination',
        clickable: true,
		type: 'fraction',
		},
	  navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	  },
		on: {
		init: function () {
		$(".swiper-progress-bar-wrap").removeClass("animate");
		$(".swiper-progress-bar-wrap").removeClass("active");
		$(".swiper-progress-bar-wrap").eq(0).addClass("animate");
		$(".swiper-progress-bar-wrap").eq(0).addClass("active");
		},
		slideChangeTransitionStart: function () {
		$(".swiper-progress-bar-wrap").removeClass("animate");
		$(".swiper-progress-bar-wrap").removeClass("active");
		$(".swiper-progress-bar-wrap").eq(0).addClass("active");
		},
		slideChangeTransitionEnd: function () {
		$(".swiper-progress-bar-wrap").eq(0).addClass("animate");
		}
		}
	});

});