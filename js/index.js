$(function(){
    $("#main_center_top").mouseover(function(){
        $("#operate").css('display','block');
        window.clearInterval(ti);
        //$("#operate img")[0].css('display','block');
         // $("#operate img")[1].css('display','block');
    });
    $("#main_center_top").mouseleave(function(){
        $("#operate").css('display','none');
        ti=setInterval('getCount()',3000);
       // $("#operate img")[0].css("display","none");
      //  $("#operate img")[1].css("display","none");
        //$("#operate img")[0].className="touming1";
        // $("#operate img")[1].className="touming1";
    });


    $("#operate img").mouseover(function(){

        $("#operate img")[0].className="touming2";
         $("#operate img")[1].className="touming2";
    });
    $("#operate img").mouseleave(function(){
        $("#operate img")[0].className="touming1";
        $("#operate img")[1].className="touming1";
    });


    //左右小图片点击事件
    $("#main_center_top img")[0].onclick=function(){
        time--;
        if(time<1){
            time=5;
        }
        $("#main_center_top").css('background','url("images/ad-0'+time+'.jpg")');
        change_list();
    };
    $("#main_center_top img")[1].onclick=function(){
        time++;
        if(time==6){
            time=1;
        }
        $("#main_center_top").css('background','url("images/ad-0'+time+'.jpg")')
        change_list();
    };
    //点击小图片的动作
    $("#adv_list li img").click(function(){
        $("#adv_list li img").prop("src","images/adv_uncheck.gif");
        $(this).prop("src","images/adv_check.gif");
        var cou=$(this).parent().prevAll().length;
        $("#main_center_top").css('background','url("images/ad-0'+(cou+1)+'.jpg")');
    });
    //TAB切换事件
    $("#tab1").mouseover(function(){
        $("#tab1").html("<img src='images/left1.jpg'>");
        $("#tab2").html("<img src='images/right1.jpg'>");
        $("#end1").css("display","block");
        $("#end2").css("display","none");
    });
    $("#tab2").mouseover(function(){
        $("#tab1").html("<img src='images/left2.jpg'>");
        $("#tab2").html("<img src='images/right2.jpg'>");
        $("#end1").css("display","none");
        $("#end2").css("display","block");
    });

    //公告栏鼠标悬停离开事件
    $("#scroll").mouseover(function(){
        window.clearInterval(an);
    });
    $("#scroll").mouseleave(function(){

        an=setInterval("announceScroll()",50);
    });
    $("#scroll2").html($("#scroll1").html())


  //  alert($("#scroll").length);
    //随鼠标滚动的广告事件
    window.onscroll=function(){
        var top=$("#adv_left")[0].currentStyle.top;
        //alert(document.body.scrollTop);
       $("#adv_left,#adv_right").css("top",200+document.documentElement.scrollTop+document.body.scrollTop+"px");
    };
    //广告图片关闭事件
    $(".close").click(function(){
        $(this).parent()[0].style.display="none";
    });


})
//改变小圆点事件
function change_list(){
    $("#adv_list li img").prop("src","images/adv_uncheck.gif");
    $("#adv_list li img:eq("+(time-1)+")").prop("src","images/adv_check.gif");
}

//自动播放广告
var time=1;
function getCount(){
    time++;
    if(time==6){
        time=1;
    }
    $("#main_center_top").css('background','url("images/ad-0'+time+'.jpg")');
    change_list();
 //   $("#count").html(time);
}
  var ti=window.setInterval('getCount()',3000);

//公告栏滚动事件
//var scrtop=1;
function announceScroll(){
   // scrtop++;
  //  $("#count").html($("#scroll2")[0].offsetHeight+":"+$("#scroll")[0].scrollTop);
     var remain=$("#scroll2")[0].offsetHeight-$("#scroll")[0].scrollTop;
    if(remain<=0){
        $("#scroll")[0].scrollTop-=$("#scroll2")[0].offsetHeight;
        }

    $("#scroll")[0].scrollTop++;
    //alert("dd")
}
var an=window.setInterval("announceScroll()",50);

window.onunload
$("#scroll").isEmptyObject()