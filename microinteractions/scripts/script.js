console.log ("hello");

$(document).ready(function(){

$('#b2').mouseover(function() {
	$(this).animate({
	opacity: ".1",
	}, 'fast');

	});

$('#b4').mouseover(function(){
	$('#b4 .quarter').animate({
		backgroundColor: 'black',
	});
	$('#b4 .quarterflip').stop().animate({
		backgroundColor: '#d3d3d3',
	});
});

$('#b5').mouseover(function(){
	$('#b5 .quarter, #b5 .quarterflip').animate({
		backgroundColor:'#ffa500',
	}, 'fast');
});

$('#b6').mouseover(function(){
	$('#b6 .quarter, #b6 .quarterflip').animate({
		backgroundColor: '#ffd700',
	}, 'fast');
	$('#b6 .bar').stop().animate({
		backgroundColor: '#daa520',
	}, 'fast');
});

$('#b7').mouseover(function(){
	$('#b7 .bar').fadeOut('fast');
});

$('#b8').mouseover(function(){
	$('#b8 .quarter, #b8 .quarterflip').fadeOut('fast');
});


$( "#b15" ).mouseover(function() {
    $('#b15 .quarter').animate ({
    	left: '110px',
    	top: '195px'

    }, 'slow');

    $('#b15 .quarterflip').stop().animate({
		right: '100px',
		top: '255px'

	}, 'slow');

    });
    
$( "#b11" ).mouseover(function() {
    $('#b11 .quarter').animate ({
    	left: '130px',
    	top: '200px'

    }, 'slow');
    });

$( "#b16" ).mouseover(function() {
    $('#b16 .quarter').animate ({
    	left: '50px'
    }, 'slow');

    $('#b16 .bar').stop().hide ()
		
    });

$('.whole2').mouseover(function () {
	$('.whole2').toggleClass('whole2-rotate');

});

$('#b18').mouseover(function () {
	$('.whole3').toggleClass('whole3-rotate');
	$('#b18 .bar').stop().hide ()

});

$('#b19').mouseover(function(){
	$('#b19 .bar').fadeTo(0,1)
});

$('#b19').mouseover(function() {
	$("#b19 .bar").show();
    $("#b19 .bar").animate({width: "237px"},1000, function() {
});

$('#b20').mouseover(function() {
	$("#b20 .bar").show();
    $("#b20 .bar").animate({height: "240px"},1000, function() {
});

 $('#b22').click(function(){
	$('#b22').animate({
		backgroundColor: '#ffa500',
	});

$('#b23').click(function() {
	$('#b23').animate({
		backgroundColor: '#ffa500',
	}, 'fast');
	$('#b23 .quarter, #b23 .quarterflip, #b23 .bar').stop().hide()
});

$('#b24').click(function() {
	$('#b23').stop().animate({
		backgroundColor: 'red',
	}, 'fast');
	$('#b23 .quarter, #b23 .quarterflip, #b23 .bar').stop().hide()
});

$("#b25").click(function(){
		$('.bg').stop().animate({
			backgroundColor: '#191970',
	
}, 'fast');

		$('.quarter, .quarterflip, .bar').stop().animate({
			backgroundColor: 'white',
	
}, 'fast');

$("#b27").click(function(){
		$('.bg').stop().animate({
			backgroundColor: 'white',
	
}, 'fast');

		$('.quarter, .quarterflip, .bar').stop().animate({
			backgroundColor: 'black',
	
}, 'fast');
		

});

$( "#b26" ).mouseover(function() {
    $('#b26 .quarter').animate ({
    	top: '270px'

    }, 'slow');

    $('#b26 .quarterflip').stop().animate({
		top: '180px'

	}, 'slow');

    });

$( "#b28" ).click(function() {
    $('#b29').animate ({
    	right: '275px'

    }, 'slow');


});

$( "#b29" ).click(function() {
    $('#b29').stop().animate ({
    	left: '20px'

    }, 'slow');


});

$('#b30').mouseover(function(){
	$('#b30 .quarter, #b30 .quarterflip').fadeOut('slow');
	$('#b30 .bar').stop().animate ({
		left: '90px'
	});

$('#b31').mouseover(function(){
	$('#b31 .bar').stop().animate ({
		left: '163px'
	});





});
});
 });
});
  });
 });

});





});