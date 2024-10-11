var running = false;
var runner;
var relayIndex = 0;

// 开始轮播图
function startRelay() {
	if (running == false) {
		runner = window.setInterval(function() {
			var curIndex = ((relayIndex + 1) % 4);
			var path = 'img/nr_img_' + (curIndex + 1) + '.png';
			$('.news-right .nr-img').fadeOut('300', function() {
				// 切换图片
				$('.news-right img').attr('src', path);
				// 切换右下方选中的小圆点
				$('.news-right .nr-bottom ul li').eq(relayIndex).removeClass('nr-b-sel');
				$('.news-right .nr-bottom ul li').eq(curIndex).addClass('nr-b-sel');
				relayIndex = curIndex;
			});
			$('.news-right .nr-img').fadeIn('300');
		}, 2000);
		running = true;
	}
}

// 停止轮播图
function stopRelay() {
	if (running == true) {
		window.clearInterval(runner);
		running = false;
	}
}


$(function() {
	$(window).scroll(function() {
		var t = $(this).scrollTop();
		if (t > 80) {
			$('.nav .nav-box').addClass('nav-fixed');
		} else {
			$('.nav .nav-box').removeClass('nav-fixed');
		}
	});

	// 设置切换导航栏选中项
	$('.nav ul li a').click(function() {
		$(this).addClass('nav-sel')
			.parent('li').siblings().children('a').removeClass('nav-sel');
	});

	$('.hd-card-box').click(function() {
		$(this).addClass('hdcd-active')
			.siblings().removeClass('hdcd-active');
		var no = $(this).index() + 1;
		var path = 'img/hd_card_img_' + no + '_s.png';
		$(this).children('img').attr('src', path);
		for (var i = 0; i < 3; i++) {
			if (i + 1 != no) {
				path = 'img/hd_card_img_' + (i + 1) + '_n.png'
				$('.hd-card-box').eq(i).children('img').attr('src', path);
			}
		}
	});
	
	$('.main-title a').click(function() {
		$(this).addClass('mt-sel')
			.siblings().removeClass('mt-sel');
	});

	startRelay(); // 开始轮播图

	$('.news-right').mouseenter(function() {
		stopRelay();
	}).mouseleave(function() {
		startRelay();
	});

	// 设置鼠标点击小圆点时切换图片
	$('.news-right .nr-bottom ul li').click(function() {
		var index = $(this).index();
		relayIndex = index;
		$('.news-right .nr-bottom ul li').eq(index).addClass('nr-b-sel')
			.siblings().removeClass('nr-b-sel');

		var path = 'img/nr_img_' + (index + 1) + '.png';
		$('.news-right .nr-img').fadeOut('10', function() {
			// 切换图片
			$('.news-right img').attr('src', path);
		});
		$('.news-right .nr-img').fadeIn('10');
	})

	// 图片放大缩小的动画
	$('.bmd-box img').mouseenter(function() {
		$(this).stop(true, false).animate({
			width: '420px',
			height: '200px',
			'margin-left': '-35px'
		});
	}).mouseleave(function() {
		$(this).stop(true, false).animate({
			width: '350px',
			height: '194px',
			'margin-left': '0px'
		})
	});

	// 设置鼠标进入和离开图片时的遮罩
	$('.bdml-box').mouseenter(function() {
		$(this).children('.bdml-box-cover').css('display', 'block');
	}).mouseleave(function() {
		$(this).children('.bdml-box-cover').css('display', 'none')
	});

});
