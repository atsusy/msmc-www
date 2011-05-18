$(function(){
	var sliderWidth = $('#slider').width();
	var sliderCount = $('#slider>ul.items>li').size();
	var sliderIndex = 0;

	$('#slider>ul.items').css('width', sliderWidth * sliderCount);
	$('#slider>ul.items>li').css('width', sliderWidth);

	for(var i = 0; i < sliderCount; i++){
		$('#slider>ul.indexes').append('<li></li>');
	}
	$('#slider>ul.indexes>li:first-child').addClass('active');

	$("#slider>ul.indexes>li").click(function() { 
		var clickedIndex = $(this).index();
		$('#slider>ul.items').animate({ left: clickedIndex * -sliderWidth }, 400, 'swing');

		$('.active').removeClass('active');
		$(this).addClass('active');
	});
	
	$("#slider>.next").click(function(){ 
		sliderIndex++;
		if(sliderIndex >= sliderCount){
			sliderIndex = sliderCount - 1;
			return;
		}
		$('#slider>ul.items').animate({ left: '-=' + $('#slider').width() }, 400, 'swing');
		$('.active').removeClass('active').next().addClass('active');
	});	
	
	$("#slider>.prev").click(function() { 
		sliderIndex--;
		if(sliderIndex < 0){
			sliderIndex = 0;
			return;
		}
		$('#slider>ul.items').animate({ left: '+=' + $('#slider').width() }, 400, 'swing');
		$('.active').removeClass('active').prev().addClass('active');
	});
});