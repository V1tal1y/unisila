$(function() {
	$('.slider_sl').slick({
	  arrows: false,
	  slidesToShow: 5,
	  slidesToScroll: 2,
	  dots: false,
	  centerMode: true,
	  infinite: true,
	  variableWidth: true,
	  autoplay: true,
	  autoplaySpeed: 700,
	});

	$('.slider').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: false,
	  infinite: true,
		responsive: [
		    {
		      breakpoint: 1930,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 945,
		      settings: {
		        slidesToShow: 1
		      }
		    }
		  ]

	});

	function explode(){
		$('.shadow, .sf').fadeOut('slow');
	}
	function funcS(){
		$('.sf1, .sf2, .sf4').fadeOut('slow')
		$('.shadow, .sf3').fadeIn('slow');
		setTimeout(explode, 3000);
	}
	$(".shadow, .close").click(function(){
		explode()
	});
	$(".popap1").click(function(){
		$('.shadow, .sf1').fadeIn('slow');
	});
	$(".popap2").click(function(){
		$('.shadow, .sf2').fadeIn('slow');
	});
	$(".popap3").click(function(){
		$('.shadow, .sf4').fadeIn('slow');
		$(".sf4 input[name=from]").val($('.select .label').text());
	});
	$('form').submit(function(event){
		im = '';
		pf = '';
		about = '';
		im = $(this).find('input[name=name]').val();
		pf = $(this).find('input[name=phone]').val();
		about = $(this).find('input[name=about]').val();
		from = $(this).find('input[name=from]').val();
		$.ajax({
			url: "send.php",
			type: "POST",
			data: ({im:im, pf:pf, from:from, about:about}),
			dataType: "html",
			success: funcS
		});
		return false;
	});
	$("input[name=phone]").mask("+7 (999) 999-99-99");


	$(".btn_popap_sel").click(function(){
		
	});

	$(".select .list div").click(function(){
		$('.select .label div').text($(this).text());
		$(".select .list").slideUp('slow')
	});
	$(".select .label").click(function(){
		$(".select .list").slideToggle('slow')
	});
	$(document).on('click', function(e) {
	  if (!$(e.target).closest(".select, .select .list").length) {
	    $('.select .list').slideUp();
	  }
	  e.stopPropagation();
	});

});

