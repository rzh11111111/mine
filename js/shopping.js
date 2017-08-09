


$.ajax({
			  type:"get",
			  url:"js/shangping.json",
			  dataType:"json",
			  success:function(aaa){
			   var str = "";
			   
			   $.each(aaa.txu, function(idx,val) {
			   
			   var strCookie = getCookie("cartt");
			if(!strCookie){
				//如果无cookie,执行语句
			}else{
				var objCookie = JSON.parse(strCookie);
				if(objCookie[val.id]==undefined){
			   		
			   	}else{
			    str +="<tr class='dier'> <td class='chebox'> <input type='checkbox' /> </td> <td class='photo'> <a href='#'><img src='"+val.imgUrl+"' width='60px' height='80px'/></a> </td> <td class='name'> <a href='#'>"+val.zhongwen+"</a> </td> <td class='price'> <p>"+val.price+"</p> </td> <td class='shuliang'> <a class='down dis'>-</a> <input type='text' value='"+objCookie[val.id]+"' /> <a class='up'>+</a> </td> <td class='shanchu'> <span><a class='butG'>删除</a></span> </td> </tr>";
			   }
			   	
			   }
			   });
			    
			   str += "<tr class='disan' > <td class='yixuan' colspan='2'> 以选商品<b>1</b>件 </td> <td class='jiage' colspan='3'> 总计<span>2323</span>元 </td> <td class='jiesuan'><input type='button' value='结算' /></td> </tr>";
			   $('table').append(str);
			   $(".jiesuan input").click(function(){
			   	alert("结算失败，你没有冲钱")
			   })
			  $(".butG").click(function(){
			  	var strCookie = getCookie("cartt");
			  	var objCookie = JSON.parse(strCookie);
	$(this).parents(".dier").remove()
	setCookie("cartt","2",-1)
})
			  }
			  
			 })












//objCookie[val.id]