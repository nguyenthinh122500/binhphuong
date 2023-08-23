$(document).ready(function(){
    $(".map-contact .mc-tab").click(function(){
        if(!$(this).parents(".map-contact").hasClass("active")){
            $(this).parents(".map-contact").addClass("active");
        }
        else{
            $(this).parents(".map-contact").removeClass("active");
        }
    });
    $(".list-tab li a").click(function(){
        if($(window).innerWidth()<991){
            $(this).parents(".map-contact").removeClass("active");
            $(this).parents(".map-contact").find(".list-tab").stop().slideUp(500);
        }
    });
    $(".view_map a").click(function(){
        $("html,body").animate({
            scrollTop: $(".map-contact").offset().top - 80
        },1000);
        var target=$(this).attr("href");
        $(".map-contact .list-tab li").removeClass("active");
        $(".map-contact .list-tab li").each(function(){
            if($(this).find("a").attr("href")==target){
                $(this).find("a").addClass("active");
                var t = $(this).find("a").text();
                $(".map-contact .mc-tab").text(t);
            }
        });
        $(".map-contact .tab-content .tab-pane").removeClass("active");
        $(".map-contact .tab-content .tab-pane").each(function(){
            if(('#'+$(this).attr("id"))==target){
                $(this).addClass("in active");
            }
        });
        return false;
    });
    $(".map-contact .list-tab li").click(function(){
        $(".map-contact li a").removeClass("active");
        $(this).find("a").addClass("active");
        var t = $(this).find("a").text();
        $(".map-contact .mc-tab").text(t);
        $(".map-contact .tab-content .tab-pane").removeClass("active");
        $(".map-contact .tab-content .tab-pane").each(function(){
            if(('#'+$(this).attr("id"))==target){
                $(this).addClass("in active");
            }
        });
        get_hh();
    });
    function get_hh(){
        var t = $(".list-tab li a.active").text();
        $(".map-contact .mc-tab").text(t);
    }
    get_hh();
});