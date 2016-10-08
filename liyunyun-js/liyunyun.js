/*** Created by Administrator on 2016/8/8 0008.*/
//laizidashen liyunyun

$(function(){

    //头部部分开始

    //logo-gift部分显示微信二维码
    $(".logo-gift .weixin").mouseenter(function(){
        $(".weixin-box").css("display","block")
    }).mouseleave(function(){
        $(".weixin-box").css("display","none")
    });

    //language部分显示下拉框
    $(".language").mouseenter(function(){
        $(this).children("ul").css("display","inline-block")
        $(this).addClass("languageborder");

    }).mouseleave(function(){
        $(this).removeClass("languageborder");
        $(this).children("ul").css("display","none")
    });

    //phone部分显示微信二维码
    $(".logo-phone").mouseenter(function(){
        $(".logo-phone-weixin").css("display","block");
    }).mouseleave(function(){
        $(".logo-phone-weixin").css("display","none");
    });

    //logo-tel部分鼠标进入显示下拉层
    $(".logo-tel").mouseenter(function(){
        $(".logo-tel-list").css("display","block")
    }).mouseleave(function(){
        $(".logo-tel-list").css("display","none")
    });

    //nav-left部分鼠标进入事件
    $(".nav-left>li").mouseenter(function(){
        $(this).css("background","#003679");
    }).mouseleave(function(){
        $(this).css("background","#2064C8");
    });



    //nav-right部分鼠标进入下拉菜单显示
    $(".nav-right").mouseenter(function(){
        $(".nav-login").css("display","block");
    }).mouseleave(function(){
        $(".nav-login").css("display","none");
    });

    //头部部分结束
    //banner轮播图部分开始

    //定义自动播放函数，依次播放，需要传入当前位置参数
    function slider(idex){
        $(".banner-index>i").eq(idex).css("background","red").siblings().css("background","black");
        $(".banner-pic>li").eq(idex).animate({"opacity":1},2000).siblings().animate({"opacity":0},2000);
    }
    //设置计时器，轮播图自动播放
    var index=1;
    var lis=$(".banner-pic>li")
    setInterval(function(){
        slider(index);
        index++;
        if(index>lis.length){
            index=0;
        }
    },2000)


    //当鼠标点击下标位置，图片显示
    $(".banner-index>i").click(function(){
        index=$(this).index();
        $(".banner-pic>li").stop().eq(index).css("opacity",1).siblings().css("opacity",0);
        $(".banner-index>i").eq(index).css("background","red").siblings().css("background","black");
        index++;
        //slider(index);
    })
    //banner部分结束


    //手风琴特效开始
    $(".accordion-box li").mouseenter(function(){//鼠标进入时
        //对当前li标签对应的a标签设置动画，增加宽，改变透明度------在动画执行前，先让其他动画停止
        $(this).children("a").stop().animate({"width":"398px"},200).children("i").css("opacity",1);
        //对其他li标签对应的a标签设置动画，减少宽到132px------在动画执行前，先让其他动画停止
        $(this).siblings("li").children("a").stop().animate({"width":"132px"},200)
        //当前标签下的文字不显示
        $(this).children("a").children("div").css("display","none")
    }).mouseleave(function(){//鼠标离开时
        //所有的li标签恢复原来的宽度170px------在动画执行前，先让其他动画停止
        $(".accordion-box li a").stop().animate({"width":"170px"},200).children("i").css("opacity",0.7)
        //当前标签下的文字显示恢复
        $(this).children("a").children("div").css("display","block")
    });

    //手风琴特效结束

    //footer部分特效开始
    $(".footer-about-cooper li a,.footer-about-us li a").mouseenter(function(){
        $(this).stop().animate({"padding-left":"18px"},100)
        $(this).css("color","red")
    }).mouseleave(function(){
        $(this).stop().animate({"padding-left":"13px"},100)
        $(this).css("color","#333")
    });

    $(".footer-certificate a").mouseenter(function(){
        $(this).animate({"top":"-5px"},100)
    }).mouseleave(function(){
        $(this).animate({"top":0},100)
    });

    $(".footer-bottom li").mouseenter(function(){
       $(this).css("background","#C0D2E4")
    }).mouseleave(function(){
        $(this).css("background","#7C8FA2")
    });

    //footer部分特效结束


});