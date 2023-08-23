$(document).ready(function(){
	$("#vnt-slide-home").slick({
		fade:true,
		autoplay:true,
        dots:true,
        arrows:true,
        autoplaySpeed: 5000,
	});
    $("#slideNews").slick({
    	arrows:false,
    	dots:false,
    	autoplay: false,
        slidesToShow : 4,
        responsive: [
            {
                breakpoint:1024,
                settings: {
                    slidesToShow : 3,
                    arrows:true,
                }
            },
            {
                breakpoint:991,
                settings: {
                    slidesToShow : 2,
                    arrows:true,
                }
            },
            {
                breakpoint:480,
                settings: {
                    slidesToShow : 1,
                    arrows:true,
                }
            }
        ]
    });
    //solution

    $(".listSolution").slick({
    	arrows:true,
    	dots:false,
    	autoplay: false,
        slidesToShow : 4,
        responsive: [
            {
                breakpoint:1500,
                settings: {
                    slidesToShow : 3,
                    arrows:true,
                }
            },
            {
                breakpoint:991,
                settings: {
                    slidesToShow : 2,
                    arrows:true,
                }
            },
            {
                breakpoint:480,
                settings: {
                    slidesToShow : 2,
                    arrows:true,
                }
            }
        ]
    });
    // product Home slider
    $(".listProductHome").slick({
    	arrows:true,
    	dots:false,
    	autoplay: false,
        slidesToShow : 3,
        responsive: [
            {
                breakpoint:991,
                settings: {
                    slidesToShow : 3,
                    arrows:true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow : 2,
                    arrows:true,
                }
            }
        ]
    });
    //  
    $('.listProject').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        speed: 1000,
        slidesToShow : 3,
        responsive: [
          {
            breakpoint:991,
            settings: {
                slidesToShow : 2,
            }
          },
            {
            breakpoint:767,
            settings: {
                slidesToShow : 2,
            }
          }
        ]
    });
    // 
    $('.listpartner').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        speed: 1000,
        slidesToShow : 5,
        responsive: [
          {
            breakpoint:991,
            settings: {
                slidesToShow : 4,
            }
          },
            {
            breakpoint:767,
            settings: {
                slidesToShow : 3,
            }
          }
        ]
    });
    // 
    $('.lstInfoAbout').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        speed: 1000,
        slidesToShow : 4,
        responsive: [
          {
            breakpoint:991,
            settings: {
                slidesToShow : 3,
            }
          },
            {
            breakpoint:767,
            settings: {
                slidesToShow : 2,
            }
          }
        ]
    });
    // 
    $('.sliderNewsHome').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        speed: 1000,
        slidesToShow : 1,

    });
    // 
    $('.sliderVideo').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        speed: 1000,
        slidesToShow : 1,
    });
    // 
    $('.countNumber .count').counterUp({
        delay: 5,
        time: 1000
    })
    // 
    $('.sliderLstService').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        speed: 1000,
        slidesToShow : 3,
        responsive: [
          {
            breakpoint:991,
            settings: {
                slidesToShow : 2,
            }
          },
            {
            breakpoint:767,
            settings: {
                slidesToShow : 2,
            }
          }
        ]
    });
    // 

    // $(".LstImgHome .fancybox").fancybox();
    // PRICE
    var min_price=parseInt($("#slider-range").find("meta").attr("min-price"));
    var max_price=parseInt($("#slider-range").find("meta").attr("max-price"));
    $("#valuePriceFilter").find("#price").val(min_price);
    if(typeof $("#slider-range").offset() =='object'){
        $("#slider-range").slider({
            range: "max",
            max: max_price,
            slide: function( event, ui ) {
                $("#valuePriceFilter").find("#price").val(ui.value);
            }
        });
    }
    $("#valuePriceFilter").find("#price").on("change",function(){
        var val = $(this).val();
        $("#valuePriceFilter").slider("value", 1);
    });
    $("#price").on("blur",function(){
        if($(this).val()<min_price || $(this).val()>max_price){
            return false;
        }
        else{
            $("#slider-range").slider('values',0,$("#price").val());
        }
    });
    //
    var min_price=parseInt($("#slider-range1").find("meta").attr("min-price"));
    var max_price=parseInt($("#slider-range1").find("meta").attr("max-price"));
    $("#valuePriceFilter1").find("#price1").val(min_price);
    if(typeof $("#slider-range1").offset() =='object'){
        $("#slider-range1").slider({
            range: "max",
            max: max_price,
            slide: function( event, ui ) {
                $("#valuePriceFilter1").find("#price1").val(ui.value);
            }
        });
    }
    $("#valuePriceFilter1").find("#price1").on("change",function(){
        var val = $(this).val();
        $("#valuePriceFilter1").slider("value", 1);
    });
    $("#price1").on("blur",function(){
        if($(this).val()<min_price || $(this).val()>max_price){
            return false;
        }
        else{
            $("#slider-range").slider('values',0,$("#price1").val());
        }
    });
    //
    var min_price=parseInt($("#slider-range2").find("meta").attr("min-price"));
    var max_price=parseInt($("#slider-range2").find("meta").attr("max-price"));
    $("#valuePriceFilter2").find("#price2").val(min_price);
    if(typeof $("#slider-range2").offset() =='object'){
        $("#slider-range2").slider({
            range: "max",
            max: max_price,
            slide: function( event, ui ) {
                $("#valuePriceFilter2").find("#price2").val(ui.value);
            }
        });
    }
    $("#valuePriceFilter2").find("#price2").on("change",function(){
        var val = $(this).val();
        $("#valuePriceFilter2").slider("value", 1);
    });
    $("#price2").on("blur",function(){
        if($(this).val()<min_price || $(this).val()>max_price){
            return false;
        }
        else{
            $("#slider-range").slider('values',0,$("#price2").val());
        }
    });
    // 
    $('.subBottom .showFrm').on('click', function(){
        $(this).parents('.reportHome').addClass('show');
    })
    $('.reportHome .blackBl a').on('click', function(){
        $(this).parents('.reportHome').removeClass('show')
    })
    $('.reportHome .frmSuccess').on('click', function(e){
        $(this).parents('.reportHome').addClass('active')
    })
    // 
    var textWrapper = document.querySelector('.showDesktop');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
    .add({
        targets: '.showDesktop .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i
      }).add({
        targets: '.showDesktop',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
});