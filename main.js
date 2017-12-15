$(document).ready(function(){
		  $('#section1').show(500);
	$('#courses').click(function(){
		$('.section1').hide(5, function(){
		$('.section2').show(500);
	});
		$('#home').click(function(){
			$('.section2').hide(5,function(){
			$('.section1').show(500);	
			})
		})
		$('#about').click(function(){
			$('.section1').hide(5,function(){
			$('.section3').show(500);	
					
		})	
		})
	})	

})  