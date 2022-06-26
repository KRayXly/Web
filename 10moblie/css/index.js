/**
 * 
 * @authors Lin
 * @date    2022-05-07
 * @version project10
 */
$(function(){
        $(window).resize(function(){
                var winWide = $(window).width();
                        if(winWide>=980){
                                $(".m-menu").show(); 
                                $(".m-menu").css({"display":"flex","flex-direction": "row"});
                        }
                        else if(winWide<980){
                                $(".m-menu").hide(); 
                                $(".m-menu").css({"display":"none","flex-direction": "column"});
                        }
        });
        $(document).bind("click",function(e){
                var width = document.querySelector("html").offsetWidth;
                if($(e.target).closest(".m-menu").length == 0 && $(e.target).closest(".m-trg").length == 0 && width<980){
                        $(".m-menu").hide(); 
                }
                if($(e.target).closest(".m-trg").length != 0 && width<980){
                        if($(".m-menu").css("display") == "none")
                                $(".m-menu").show(); 
                        else 
                                $(".m-menu").hide();  
                }
        });
})

