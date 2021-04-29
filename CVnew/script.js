$('document').ready(function () {
    let typed = new Typed("#type-title ", {
        stringsElement: "#typed-strings",
        typeSpeed: 50,  
        backSpeed: 50,
        loop: true,
        cursorChar: ''
    });
});
function hovericon()
{
   document.getElementById("Show").style.display="block";
   document.getElementById("Show").style.color="black";
   document.getElementById("Show").style.width="100px"; 
   document.getElementById("Show").style.height="100px"; 
}
function fun_Tran()
{
    document.getElementById("item1").style.color='yellow';
    document.getElementById("transtion").style.display='block';
}
$(function(){
    $(".dot1").click(function(){
    $(".item1").css("display","block");
    $(".dot11").css("width","20px");
    $(".dot11").css("background"," #f15f79");
    $(".dot13").css("width","8px");
        $(".dot13").css("background","  #999");
        $(".dot14").css("width","8px");
        $(".dot14").css("background","  #999");
        $(".dot12").css("width","8px");
        $(".dot12").css("background","  #999");
    $(".item2, .item3, .item4").css("display","none");});
    $(".dot2").click(function(){
        $(".item2").css("display","block");
        $(".dot12").css("width","20px");
        $(".dot12").css("background"," #f15f79");
        $(".dot13").css("width","8px");
        $(".dot13").css("background","  #999");
        $(".dot14").css("width","8px");
        $(".dot14").css("background","  #999");
        $(".dot11").css("width","8px");
        $(".dot11").css("background","  #999");
        $(".item1, .item3, .item4").css("display","none");});
    $(".dot3").click(function(){
            $(".item3").css("display","block");
            $(".dot13").css("width","20px");
            $(".dot13").css("background"," #f15f79");
            $(".dot12").css("width","8px");
            $(".dot12").css("background","  #999");
            $(".dot14").css("width","8px");
            $(".dot14").css("background","  #999");
            $(".dot11").css("width","8px");
            $(".dot11").css("background","  #999");
            $(".item1, .item2, .item4").css("display","none");});
     $(".dot4").click(function(){
                $(".item4").css("display","block");
                $(".dot14").css("width","20px");
                $(".dot14").css("background"," #f15f79");
                $(".dot13").css("width","8px");
                $(".dot13").css("background","  #999");
                $(".dot12").css("width","8px");
                $(".dot12").css("background","  #999");
                $(".dot11").css("width","8px");
                $(".dot11").css("background","  #999");
                $(".item1, .item3, .item2").css("display","none");});
});
$(function(){
    let d = 0;
    $(".menu-toggle").click(function(){
        d++;
        if(d%2!=0)
        {
            $(".header").css("display","block");
            $(".content-pages").css("margin-left","80px");
            $(".fa-bars").css("color","#f15f79");
            
            $(".profile-avatar").css("opacity","0");
        }
        else
        {
            $(".header").css("display","none");
            $(".content-pages").css("margin-left","0px");
            $(".fa-bars").css("color","#999");
           // $(".profile-avatar").css("opacity","1");
        }
    })
    // $(".header").css("display","block");
});

// id="home" class="section-page section-home animated active"
// id="about-me" class="section-page animated"
// id="resume" class="section-page animated"
 //$(".home").css("overflow","hidden");
    //$(".about-me").css("display","none");
    //$(".resume").css("display","none");
    //$("body").;
$(document).on('click', '.header-main-menu li', function()
{
    $(this).addClass('active').siblings().removeClass('active');
})
$(function(){
    $(".home").click(function(){
        $("#about-me").css("display","none");
        $("#resume").css("display","none");
        $("#home").css("display","block");

    })
    $(".about-me").click(function(){
        $("#home").css("display","none");
        $("#resume").css("display","none");
        $("#about-me").css("display","block");
    })
    $(".resume").click(function(){
        $("#home").css("display","none");
        $("#resume").css("display","block");
        $("#about-me").css("display","none");
    })
   
});

$(document).ready(function() {
    let targetOffset = $(".lang-item").offset().top;
    let $w = $(window).scroll(function() {
        if ($w.scrollTop() > targetOffset) {
        $(".progres").css("display","block");
        } else {
            $(".progres").css("display","none");
        }
    });
});
