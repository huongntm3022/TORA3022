$(document).ready(function(){
	$(".btn-menu").click(function(){
		$(".menu").slideToggle()
	})
})// JavaScript Document
$('#banner').owlCarousel({
    loop:true,
    margin:20,
    /*nav:true,*/
	smartSpeed:500,
	autoplay:true,
	autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#banner1').owlCarousel({
    loop:true,
    margin:30,
    /*nav:true,*/
	smartSpeed:1000,
	autoplay:true,
	autoplayTimeout:8000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#tap-moi').owlCarousel({
    loop:true,
    margin:15,
    /*nav:true,*/
	smartSpeed:700,
	autoplay:true,
	autoplayTimeout:4000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:6
        },
        1000:{
            items:8
        }
    }
})

function updatesmmenu() {
  if (document.getElementById('responsive-smmenu').checked == true) {
    document.getElementById('smmenu').style.borderBottomRightRadius = '0';
    document.getElementById('smmenu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('smmenu').style.borderRadius = '10px';
  }
}






