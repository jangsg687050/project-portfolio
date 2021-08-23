$(function() {
	let sites = [
		{
			'title': 'recogai',
			'slogan': 'Lorem ipsum dolor',
			'url': '#!',
			'image': 'images/recogai.jpg',
		}, {
			'title': 'hdj cultural center',
			'slogan': 'Lorem ipsum dolor',
			'url': '#!',
			'image': 'images/hdjcc.jpg',
		}, {
			'title': 'conshow',
			'slogan': 'Lorem ipsum dolor',
			'url': '#!',
			'image': 'images/conshow.jpg',
		}, {
			'title': 'Startup',
			'slogan': 'Lorem ipsum dolor',
			'url': '#!',
			'image': 'images/startup.jpg',
		},
	];


	const menu = document.querySelectorAll('.inner-menu')[0];
	const imageContainer = document.querySelectorAll('.image-container')[0];


	sites.forEach(site => {
	let dataId = site.title.toLowerCase().replace(/\s/g, '-').replace(/'/g, '').replace(/"/g, '').replace(/</g, '').replace(/>/g, '');
	
	const listEl = $(`<li data-id="${dataId}">
		<a href="${site.url}">${site.title}</a>
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
	$('a').on('click', function(e) {e.preventDefault()});
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

});