/*** Created by Administrator on 2016/8/8 0008.*/
//laizidashen liyunyun

$(function(){

    //ͷ�����ֿ�ʼ

    //logo-gift������ʾ΢�Ŷ�ά��
    $(".logo-gift .weixin").mouseenter(function(){
        $(".weixin-box").css("display","block")
    }).mouseleave(function(){
        $(".weixin-box").css("display","none")
    });

    //language������ʾ������
    $(".language").mouseenter(function(){
        $(this).children("ul").css("display","inline-block")
        $(this).addClass("languageborder");

    }).mouseleave(function(){
        $(this).removeClass("languageborder");
        $(this).children("ul").css("display","none")
    });

    //phone������ʾ΢�Ŷ�ά��
    $(".logo-phone").mouseenter(function(){
        $(".logo-phone-weixin").css("display","block");
    }).mouseleave(function(){
        $(".logo-phone-weixin").css("display","none");
    });

    //logo-tel������������ʾ������
    $(".logo-tel").mouseenter(function(){
        $(".logo-tel-list").css("display","block")
    }).mouseleave(function(){
        $(".logo-tel-list").css("display","none")
    });

    //nav-left�����������¼�
    $(".nav-left>li").mouseenter(function(){
        $(this).css("background","#003679");
    }).mouseleave(function(){
        $(this).css("background","#2064C8");
    });



    //nav-right���������������˵���ʾ
    $(".nav-right").mouseenter(function(){
        $(".nav-login").css("display","block");
    }).mouseleave(function(){
        $(".nav-login").css("display","none");
    });

    //ͷ�����ֽ���
    //banner�ֲ�ͼ���ֿ�ʼ

    //�����Զ����ź��������β��ţ���Ҫ���뵱ǰλ�ò���
    function slider(idex){
        $(".banner-index>i").eq(idex).css("background","red").siblings().css("background","black");
        $(".banner-pic>li").eq(idex).animate({"opacity":1},2000).siblings().animate({"opacity":0},2000);
    }
    //���ü�ʱ�����ֲ�ͼ�Զ�����
    var index=1;
    var lis=$(".banner-pic>li")
    setInterval(function(){
        slider(index);
        index++;
        if(index>lis.length){
            index=0;
        }
    },2000)


    //��������±�λ�ã�ͼƬ��ʾ
    $(".banner-index>i").click(function(){
        index=$(this).index();
        $(".banner-pic>li").stop().eq(index).css("opacity",1).siblings().css("opacity",0);
        $(".banner-index>i").eq(index).css("background","red").siblings().css("background","black");
        index++;
        //slider(index);
    })
    //banner���ֽ���


    //�ַ�����Ч��ʼ
    $(".accordion-box li").mouseenter(function(){//������ʱ
        //�Ե�ǰli��ǩ��Ӧ��a��ǩ���ö��������ӿ��ı�͸����------�ڶ���ִ��ǰ��������������ֹͣ
        $(this).children("a").stop().animate({"width":"398px"},200).children("i").css("opacity",1);
        //������li��ǩ��Ӧ��a��ǩ���ö��������ٿ�132px------�ڶ���ִ��ǰ��������������ֹͣ
        $(this).siblings("li").children("a").stop().animate({"width":"132px"},200)
        //��ǰ��ǩ�µ����ֲ���ʾ
        $(this).children("a").children("div").css("display","none")
    }).mouseleave(function(){//����뿪ʱ
        //���е�li��ǩ�ָ�ԭ���Ŀ��170px------�ڶ���ִ��ǰ��������������ֹͣ
        $(".accordion-box li a").stop().animate({"width":"170px"},200).children("i").css("opacity",0.7)
        //��ǰ��ǩ�µ�������ʾ�ָ�
        $(this).children("a").children("div").css("display","block")
    });

    //�ַ�����Ч����

    //footer������Ч��ʼ
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

    //footer������Ч����


});