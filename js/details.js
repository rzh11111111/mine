if(getCookie("zhang")){
	$("header .zhanghao").html(getCookie("zhang"));
}
							
							
$("header .head-l .te").mouseover(function(){
	$(this).css({"background":"#fff"}).find("div").show().end().find("a:first").css("color","#d50215");
		
	$(".te2 a").mouseover(function(){
			$(this).css("color","#d50215");
		$(this).mouseout(function(){
			$(this).css("color","#000");
		})
	})
	$(this).mouseout(function(){
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

		//商品列表

$(function(){
	//获取url中的参数
	function getUrlParam(name) {
	 var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
   var r = window.location.search.substr(1).match(reg); //匹配目标参数
   if (r != null) return unescape(r[2]); return null; //返回参数值
  
  }
	
	//接收url中的参数
	var id = getUrlParam('txuId');
  console.log('id:'+id);
	
	
	
	
	
	
	
	
	
	
	
 $.ajax({
  type:"get",
  url:"js/shangping.json",
  dataType:"json",
  success:function(aaa,status){
  console.log(status)
   $.each(aaa.txu, function(idx,val) {
   	if(id==val.id){
    var str ="<div class='dh'>你的位置：<span class='box'><a href='index.html'>走秀首页</a><a href='product.html'>列表</a><span id='shangping'>"+val.zhongwen+"</span></span></div><div class='pro_con'><div class='con_main'><div class='p_map'><div class='big_map'><div class='con-FangDa' id='fangdajing'> <div class='con-fangDaIMg'> <img src='"+val.imgUrl+"'><div class='magnifyingBegin'></div> <div class='magnifyingShow'><img src='"+val.imgUrl+"'></div> </div> </div> <div class='sm_map'> <dl id='smallPic'> <dd class='dc'> <a href='#'> <img src='images/g1_66_88.jpg' > </a> </dd> </dl> </div> </div> </div> <div class='jiage'> <div class='zhuyao'> <div class='title'> <span> <h1> "+val.zhongwen+"<i class='dazhe'>"+val.dazhe+"</i> </h1> </span> </div> <div class='price_div'> <div class='price'> <span class='spw cor'></span> <span class='style3'>"+val.price+"</span> </div> </div> <div class='attr_div'> <div class='modleDiv'> <div class='shuliang'> <div class='xsxm'>数&nbsp;&nbsp;量</div> <div class='cmsx'> <span class='down'></span> <input type='text' value='1' class='shu'/> <span class='up'></span>件 </div> </div> <div class='buy_it rela'> <a title='加入购物袋' class='"+val.id+"'></a> </div> </div> </div> </div> </div> </div> </div>	";
   }
   	$('section').append(str);
   	$.fn.magnifying = function(){
		var that = $(this),
		 $imgCon = that.find('.con-fangDaIMg'),//正常图片容器
		 	$Img = $imgCon.find('img'),//正常图片，还有放大图片集合
		   $Drag = that.find('.magnifyingBegin'),//拖动滑动容器
		   $show = that.find('.magnifyingShow'),//放大镜显示区域
		$showIMg = $show.find('img'),//放大镜图片
		$ImgList = that.find('.con-FangDa-ImgList > li >img'),
		multiple = $show.width()/$Drag.width();

		$imgCon.mousemove(function(e){
			$Drag.css('display','block');
			$show.css('display','block');
		    //获取坐标的两种方法
		   	// var iX = e.clientX - this.offsetLeft - $Drag.width()/2,
		   	// 	iY = e.clientY - this.offsetTop - $Drag.height()/2,	
		   	var iX = e.pageX - $(this).offset().left - $Drag.width()/2,
		   		iY = e.pageY - $(this).offset().top - $Drag.height()/2,	
		   		MaxX = $imgCon.width()-$Drag.width(),
		   		MaxY = $imgCon.height()-$Drag.height();
				
  	   	    /*这一部分可代替下面部分，判断最大最小值
		   	var DX = iX < MaxX ? iX > 0 ? iX : 0 : MaxX,
		   		DY = iY < MaxY ? iY > 0 ? iY : 0 : MaxY;
		   	$Drag.css({left:DX+'px',top:DY+'px'});	   		
		   	$showIMg.css({marginLeft:-3*DX+'px',marginTop:-3*DY+'px'});*/

		   	iX = iX > 0 ? iX : 0;
		   	iX = iX < MaxX ? iX : MaxX;
		   	iY = iY > 0 ? iY : 0;
		   	iY = iY < MaxY ? iY : MaxY;	
		   	$Drag.css({left:iX+'px',top:iY+'px'});	   		
		   	$showIMg.css({marginLeft:-multiple*iX+'px',marginTop:-multiple*iY+'px'});
		   	//return false;
		});
		$imgCon.mouseout(function(){
		   	$Drag.css('display','none');
			$show.css('display','none');
		});

		$ImgList.click(function(){
			var NowSrc = $(this).data('bigimg');
			$Img.attr('src',NowSrc);
			$(this).parent().addClass('active').siblings().removeClass('active');
		});	
	}
	
	$("#fangdajing").magnifying();
   });
   	
   	
	var str=getCookie("cartt");
	var obj=str?JSON.parse(str):{};
	
	$(".cmsx").find("input").blur(function(){
		if($(".cmsx").find("input").val().match(/^[1-9]*[1-9][0-9]*$/)){
		console.log("aaa");
	}else{
		$(".cmsx").find("input").val(1);
	}
	})
	$(".down").click(function(){
		if($(".cmsx").find("input").val()>1){
		var oldValue=parseInt($(".cmsx").find("input").val());
        oldValue--;
        $(".cmsx").find("input").val(oldValue);
       }else{
       	$(".cmsx").find("input").val(1);
       }
	})
	
	$(".up").click(function(){
		var oldValue=parseInt($(".cmsx").find("input").val());
        oldValue++;
        $(".cmsx").find("input").val(oldValue);
       
	})
	var zonghe=0
	for(var i=1;i<=id.length;i++){
		zonghe=zonghe+obj[i];
	
  	
  }
	var sum=0;
	
	$(".modleDiv a").click(function(){
		
		
		
		var id = this.getAttribute("class");
		
		obj[id]=obj[id]?obj[id]=obj[id]+parseInt($(".cmsx").find("input").val()):parseInt($(".cmsx").find("input").val());
		sum+=parseInt($(".cmsx").find("input").val());
		var objToStr = JSON.stringify(obj);
			
		$(".duoshaojian").html(zonghe)
		setCookie("cartt",objToStr,7);
		
	})
	$(".duoshaojian").html(zonghe)
	$.ajax({
			  type:"get",
			  url:"js/shangping.json",
			  dataType:"json",
			  success:function(aaa){
			   var str = "<ul>";
			   
			   $.each(aaa.txu, function(idx,val) {
			   
			   	if(obj[val.id]==undefined){
			   		
			   	}else{
			    str +="<li><a href='#'>"+val.zhongwen+""+obj[val.id]+"</a></li>";
			   }
			   });
			    
			   str += "</br><a href='shopping.html'  class='jiesuan'>结算</a></ul>";
			   $('.te p').append(str);
			  
			  }
			  
			 })
	
	}
  
  
 })
})



			



		































$("footer .foot-1 .footer2").find(".te").mouseenter(function(){
	$(this).find(".box").show();
})
$("footer .foot-1 .footer2").find(".te").mouseleave(function(){
	$(this).find(".box").hide();
})
