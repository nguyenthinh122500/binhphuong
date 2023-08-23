$(document).ready(function(){
    // if($(window).innerWidth()>1025){
    //     $("html").niceScroll({
    //         cursorborder        : 0,
    //         cursorborderradius  : 5,
    //         cursorcolor         : 'rgba(51, 51, 51, 0.8)',
    //         cursorwidth         : 10,
    //         horizrailenabled    : false,
    //         mousescrollstep     : 40,
    //         scrollspeed         : 88,
    //         background          : 'rgba(222, 222, 222, .75)',
    //         zindex              : 11111,
    //     });
    // }
    vnTRUST.goTopStart();
      // FIXED HEADER
    if( ($(window).innerWidth() > 991)){
        var offsetheader = $('#vnt-header ').innerHeight();
        var offsetheader1 = $('#vnt-header .submenuDesk').innerHeight()
        var offsetheader2 = $('#vnt-header .submenuDesk').offset().top
        $(window).on("scroll",function(){
            if($(window).scrollTop()>offsetheader){
                $("#vnt-header:not(.notfix)").addClass("fixed");
                $('#vnt-header').css({
                    paddingBottom: offsetheader1
                })
            }
            if($(window).scrollTop() <= offsetheader2 + 6){
                $("#vnt-header").removeClass("fixed");
                $('#vnt-header').css({
                    paddingBottom: 0
                })
            }
        });
    }
    if( ($(window).innerWidth() < 991)){
        var offsetheader = $('.mainHead').innerHeight();
        $(window).on("scroll",function(){
            if($(window).scrollTop()>offsetheader){
                $("#vnt-header:not(.notfix)").addClass("fixed");
                $('#vnt-header').css({
                    paddingBottom: offsetheader
                })
            }
            if($(window).scrollTop() <= 0){
                $("#vnt-header").removeClass("fixed");
                $('#vnt-header').css({
                    paddingBottom: 0
                })
            }
        });
    }
    // SELECT J
    $(".select-j .title").click(function(){
        if(!$(this).parents(".select-j").hasClass("active")){
            $(this).parents(".select-j").addClass("active");
            $(this).parents(".select-j").find(".content").stop().slideDown();
        }
        else{
            $(this).parents(".select-j").removeClass("active");
            $(this).parents(".select-j").find(".content").stop().slideUp();
        }
    });
    // DATE CLOCK
    $(".datepicker").datepicker();
    // SEARCH TOP
    $(".languageTop .icon").click(function(){
        if(!$(this).parents(".languageTop").hasClass("active")){
            $(this).parents(".languageTop").addClass("active");
            // $("html").addClass("openmenu");
        }
        else{
            $(this).parents(".languageTop").removeClass("active");
            // $("html").removeClass("openmenu");
        }
    });
    $(".searchTop .icon").click(function(){
        if(!$(this).parents(".searchTop").hasClass("active")){
            $(this).parents(".searchTop").addClass("active");
            // $("html").addClass("openmenu");
        }
        else{
            $(this).parents(".searchTop").removeClass("active");
            // $("html").removeClass("openmenu");
        }
    });
    // MENU TAB
    $(".menuTab .mc-menu").click(function(){
        if(!$(this).parents(".menuTab").hasClass("active")){
            $(this).parents(".menuTab").addClass("active");
        }
        else{
            $(this).parents(".menuTab").removeClass("active");
        }
    });
    // 
    $(".boxSearchLang .formSearchP").click(function(){
        if(!$(this).parents(".boxSearchLang").hasClass("active")){
            $(this).parents(".boxSearchLang").addClass("active");
        }
    });
    $(".boxSearchLang .showSearch .closeSearch").click(function(){
        $(this).parents(".boxSearchLang").removeClass("active");
    });
    $(".list_item_bl .list_pr").slick({
		slidesToShow : 3,
		autoplay:true,
		responsive: [
            {
                breakpoint:767,
                settings: {
                    slidesToShow : 1,
                    arrows:true,
                }
            }
        ]
    });
    $("#scroll_comment").click(function() {			
		$('html, body').animate({				
			scrollTop: $("#comments").offset().top-65	}, 1000);		
    });
    $("#contentComment").focus(function(){
        $(this).parents(".w_content").find(".content-info").stop().slideDown(700);
    });
    $("#btn-close").click(function(){
        $(this).parents(".w_content").find(".content-info").stop().slideUp(700);
    });
    $('.show_popup').on('click', function(){
        $('.login_pass').addClass('show')
        $('.divmm').removeClass('show')
        $('html').removeClass('openmenus')
    })
    $('[data-hide]').on('click', function(){
        $('.login_pass').removeClass('show')
    })
    //hotline
    $(".support-hotline").click(function () {
        $(this).find(".support-content").toggleClass("show");
    });
    
    var textWrapper = document.querySelector('.captionLogo');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
    .add({
        targets: '.captionLogo .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
    }).add({
        targets: '.captionLogo',
        opacity: 1,
        duration: 5000,
        easing: "easeOutExpo",
        delay: 1000
    });
});
