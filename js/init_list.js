$(function() {
	// 鼠标悬停
	$('.item-box .ib-left p').mouseenter(function() {
		$(this).css('color', '#82b5e1');
	}).mouseleave(function() {
		$(this).css('color', 'black');
	});

	// 鼠标点击
	$('.item-box .ib-left p').click(function() {
		// window.open('detail.html');
		window.location.href = 'detail.html';
	});

	// 图片放大缩小的动画
	$('.item-box img').mouseenter(function() {
		$(this).stop(true, false).animate({
			width: '500px',
			height: '260px',
			'margin-left': '-50px',
			'margin-top': '-20px'
		});
	}).mouseleave(function() {
		$(this).stop(true, false).animate({
			width: '400px',
			height: '220px',
			'margin-left': '0px',
			'margin-top': '00px'
		})
	});

	$('.list-down img').click(function() {
		window.location.reload();
	});
});
