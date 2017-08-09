









							//header部分
							
if(getCookie("zhang")){
	$("header .zhanghao").html(getCookie("zhang"));
}
							
							
$("header .head-l .te").mouseenter(function(){
	$(this).css({"background":"#fff"}).find("div").show().end().find("a:first").css("color","#d50215");
	$(".te2 a").mouseenter(function(){
			$(this).css("color","#d50215");
		$(this).mouseleave(function(){
			$(this).css("color","#000");
		})
	})
	$(this).mouseleave(function(){
		$(this).css({"background":"#000"}).find("div").hide().end().find("a:first").css("color","#d7d7d7");
	})
})
$(".head-r #sousuo").mouseenter(function(){
	$(this).css("background-image","url(images/sousuo2.png)");
	$(this).mouseleave(function(){
		$(this).css("background-image","url(images/sousuo.png)");
	})
})
$("header .head-b li").mouseenter(function(){
	$(this).css({"opacity":".7","border-color":"#fff"});
	$(this).mouseleave(function(){
		$(this).css({"opacity":"1","border-color":"#000"});
	})
})
					//nav部分


					
					
$("nav ul li p").mouseenter(function(){
	$(this).css({"border-color":"#d7d7d7","background":"#fff"}).next().show();
	
	$(this).closest("li").mouseleave(function(){
		$("nav ul li p").css({"border-color":"#f7f7f7","background":"#f7f7f7"}).next().hide();
	})
})





			//顶端部分
var navH = $("#nav").offset().top;
$(window).scroll(function() {
   
   var scroH = $(this).scrollTop();
					//判断，让左边的楼层显示出来
					if(scroH>=navH){
					 $("#nav").css({"position":"fixed"}) ;

					
					}else{
						$("#nav").css({"position":"relative"});
					}
})			
			
			
var flag = true; //控制 当点击楼层号时，禁止滚动条的代码执行   值为true时，可以执行滚动条代码
//  根据楼层号 控制滚走的距离  
// 1、除了top的楼梯号，为每一个楼梯号添加一个click，控制楼梯滚走的距离（距离：当前楼层的offset().top ）
$("#nav li").click(function() {
	
    flag = false;
    //当前点击的楼号红色的 其余黑色的
    $(this).addClass("on").siblings().removeClass("on");
    //获取当前楼号对应楼层的 top值
    var sTop = $(".Louti").eq($(this).index()).offset().top;

    //将页面滚走的距离设置为  sTop  
    $("body,html").animate({
        "scrollTop": sTop
    }, 1000, function() {
        flag = true;
        $("#nav li").removeClass("on");
    });
})

//3、 滚动条滚动 --  找到当前楼层的索引    控制楼层号
$(window).scroll(function() {
   var scrollTop = $(window).scrollTop();
					//判断，让左边的楼层显示出来
					if(flag){
					//滚动条滚动到相应区域时，对应楼层添加class->on
					$(".Louti").each(function(){
						
						//当内容区域显示一半时，开始添加类
						if(scrollTop > $(this).offset().top - $(this).outerHeight()/2){
							$("#nav li").eq($(this).index()).addClass("on").siblings().removeClass("on");
						}
					})
					}
})			
			
			
			
			
			
			
			
					//侧边部分























//商品列表


$(function(){
 $.ajax({
  type:"get",
  url:"js/shangping.json",
  dataType:"json",
  success:function(aaa){
   var str = "<ul>";
   $.each(aaa.txu, function(idx,val) {
    str +="<li class='big'><ol><li class='tu'><a href='details.html?txuId="+val.id+"'><img src='"+val.imgUrl+"'/></a><div class='dazhe'><p>"+val.dazhe+"</p><span></span></div><div class='size'><p>可售配置：</p><ul><li class='ma'><span>S</span></li><li class='ma'><span>M</span></li><li class='ma'><span>L</span></li><li class='ma'><span>XL</span></li></ul></div></li><li class='tit'>"+val.yingwen+"</li><li class='tit2'><a href'#'>"+val.zhongwen+"</a></li><li class='price'>"+val.price+"</li></ol></li>";
   });
   str += "</ul>";
   $('#content .content1 .center').append(str);
   $(".big").mouseenter(function(){
 	$(this).css("border","2px solid #e7e7e7").find(".dazhe").stop().animate({"bottom":"-25px"},300).end().find(".size").stop().animate({"top":"-62px"},500);
 	
 })
   $(".big").mouseleave(function(){
   	
 	$(this).css("border","2px solid #fff").find(".dazhe").stop().animate({"bottom":"0"},300).end().find(".size").stop().animate({"top":"0"},500,function(){
 		
 	});
 })
  }
  
  
 })
 $.ajax({
  type:"get",
  url:"js/shangping.json",
  dataType:"json",
  success:function(aaa){
   var str = "<ul>";
   $.each(aaa.polo, function(idx,val) {
    str +="<li class='big'><ol><li class='tu'><a href='details.html?poloId="+val.id+"'><img src='"+val.imgUrl+"'/></a><div class='dazhe'><p>"+val.dazhe+"</p><span></span></div><div class='size'><p>可售配置：</p><ul><li class='ma'><span>S</span></li><li class='ma'><span>M</span></li><li class='ma'><span>L</span></li><li class='ma'><span>XL</span></li></ul></div></li><li class='tit'>"+val.yingwen+"</li><li class='tit2'><a href'#'>"+val.zhongwen+"</a></li><li class='price'>"+val.price+"</li></ol></li>";
   });
   str += "</ul>";
   $('#content .content2 .center').append(str);
  
  }
  
 })
 $.ajax({
  type:"get",
  url:"js/shangping.json",
  dataType:"json",
  success:function(aaa){
   var str = "<ul>";
   $.each(aaa.chenshan, function(idx,val) {
    str +="<li class='big'><ol><li class='tu'><a href='details.html?chenshanId="+val.id+"'><img src='"+val.imgUrl+"'/></a><div class='dazhe'><p>"+val.dazhe+"</p><span></span></div><div class='size'><p>可售配置：</p><ul><li class='ma'><span>S</span></li><li class='ma'><span>M</span></li><li class='ma'><span>L</span></li><li class='ma'><span>XL</span></li></ul></div></li><li class='tit'>"+val.yingwen+"</li><li class='tit2'><a href'#'>"+val.zhongwen+"</a></li><li class='price'>"+val.price+"</li></ol></li>";
   });
   str += "</ul>";
   $('#content .content3 .center').append(str);
  
  }
  
 })
 
 
 
 });
 
 
 
 
 
//footer部分

$("footer .foot-1 .footer2").find(".te").mouseenter(function(){
	$(this).find(".box").show();
})
$("footer .foot-1 .footer2").find(".te").mouseleave(function(){
	$(this).find(".box").hide();
})



















