









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

					//侧边部分


	var flag = true; //控制 当点击楼层号时，禁止滚动条的代码执行   值为true时，可以执行滚动条代码
//  根据楼层号 控制滚走的距离  
// 1、除了top的楼梯号，为每一个楼梯号添加一个click，控制楼梯滚走的距离（距离：当前楼层的offset().top ）
$("#cebian li:not(:last)").click(function() {
    flag = false;
    //当前点击的楼号红色的 其余黑色的
    $(this).addClass("hover").siblings().removeClass("hover");
    //获取当前楼号对应楼层的 top值
    var sTop = $(".Louti").eq($(this).index()).offset().top;

    //将页面滚走的距离设置为  sTop  
    $("body,html").animate({
        "scrollTop": sTop
    }, 1000, function() {
        flag = true;
        $("#cebian li:not(:last)").removeClass("hover");
    });
})
//2、点击top   回到顶部
$("#cebian li:last").click(function() {
    $("body,html").animate({
        "scrollTop": 0
    }, 1000);
    $("#cebian li").removeClass("hover");
})

//3、 滚动条滚动 --  找到当前楼层的索引    控制楼层号
$(window).scroll(function() {
   var scrollTop = $(window).scrollTop();
					//判断，让左边的楼层显示出来
					if(flag){
					scrollTop > 500 ? $("#cebian").fadeIn(300) : $("#cebian").fadeOut(300);
					//滚动条滚动到相应区域时，对应楼层添加class->hover
					$(".Louti").each(function(){
					
					})
					}
})













				//banner部分
$(function(){
	var cli=$(".swiper li:first").clone(true);
	$(".swiper").append(cli);
	var perWidth=$(".swiper li").eq(0).outerWidth();
	var zlen= $(".swiper li").length;
	$(".swiper").css({"width":zlen*perWidth})
	var timer;
	var count=0;
	timer=setInterval(function(){
		move();
		smallmove();
	},1500)
			   
	function move(){
		count++;
		if(count==zlen){
			$(".swiper").css({"left":0});
			count=1;
		}
		$(".swiper").stop().animate({"left":-count*perWidth},500,function(){
			clearInterval(timer);
			timer=setInterval(function(){
				move();
				smallmove();
			},1000)
		});
	}
			   //小的图标的移动
	function smallmove(){
		if(count==zlen-1){
			count=0;
			$(".dot li").eq(0).addClass("cur").siblings().removeClass("cur");
			count=zlen-1;
		}else{
			$(".dot li").eq(count).addClass("cur").siblings().removeClass("cur");
		}
		}
			
			//小鼠标移入显示相应的图片
	$(".dot li").mouseover(function(){
		clearInterval(timer);
		count=$(this).index()-1;
		move();
		smallmove();
	})
			   
})

$(function(){
 $.ajax({
  type:"get",
  url:"js/find.json",
  dataType:"json",
  success:function(res){
   var str = "<h3><img src='images/goods_t.jpg'/></h3><ul>";
   $.each(res.good, function(idx,val) {
    str +="<li><a href='product.html?txuId="+val.id+"'><img src='"+val.imgUrl+"'/></a></li>";
   });
   str += "</ul>";
   $('#good .margin').append(str);
   $("#good ul li").mouseenter(function(){
	
	$(this).animate({"opacity":'.8'},200)
})
$("#good ul li").mouseleave(function(){
	$(this).animate({"opacity":'1'},100)
})
  }
  
 });
 
 
})

$("#banner2 a").mouseenter(function(){
	$(this).animate({left: '-5px'}, 150)
})
$("#banner2 a").mouseleave(function(){
	$(this).animate({left: '5px'}, 80)
})





$(function(){
 $.ajax({
  type:"get",
  url:"js/find.json",
  dataType:"json",
  success:function(res){
   var str = "<h3><img src='images/topic_t.jpg'/></h3><ul>";
   $.each(res.best, function(idx,val) {
    str +="<li><a href='product.html?txuId="+val.id+"'><img src='"+val.imgUrl+"'/></a><p><img src='"+val.img+"'/></p></li>";
   });
   str += "</ul><h3><a href='#'><img src='images/topic_m.jpg'></a></h3>";
   $('#best .margin').append(str);
  }
 });
})










$(function(){
 $.ajax({
  type:"get",
  url:"js/find.json",
  dataType:"json",
  success:function(res){
  	console.log(res);
   var str = "<h3><img src='images/found_t.jpg'/></h3><ul id='infind'>";
   $.each(res.find, function(idx,val) {
    str +="<li><a href='product.html?txuId="+val.id+"'><img src='"+val.imgUrl+"'/><p></p></a></li>";
   });
   str += "</ul><h3><a href='#'><img src='images/fonud_m.jpg'></a></h3>";
   $('#find .margin').append(str);
   $("#find ul li").mouseenter(function(){
	$(this).find("p").fadeToggle(30,function(){
		$(this).css("border-color","#666666").fadeToggle(100)
	})
})
$("#find ul li").mouseleave(function(){
	$(this).find("p").fadeToggle(100,function(){
		$(this).css("border-color","#EFEFEF").fadeToggle(100)
	})
})
  }
 });
})





//footer部分

$("footer .foot-1 .footer2").find(".te").mouseenter(function(){
	$(this).find(".box").show();
})
$("footer .foot-1 .footer2").find(".te").mouseleave(function(){
	$(this).find(".box").hide();
})



















