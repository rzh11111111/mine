$(document).ready(function(){

 $("#zhanghao").blur(function(){
  if($("#zhanghao").val()=="")
  {
  	
   $(".cuowu").find("b").css("display","block").next().css("display","block").html("请输入帐号");
   $("#zhanghao").css("border-color","red");
   return false;
  }
  var zhang=$("#zhanghao").val();
  if(zhang.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
  {
   $(".cuowu").find("b").css("display","none").next().css({"display":"block","color":"green"}).html("邮箱格式正确");
  $("#zhanghao").css("border-color","green");
  }else if(zhang.match(/^(((13[0-9]{1})|159|153)+\d{8})$/)){
  	$(".cuowu").find("b").css("display","none").next().css({"display":"block","color":"green"}).html("手机格式正确");
  $("#zhanghao").css("border-color","green");
  }else{
  	$(".cuowu").find("b").css("display","block").next().css("display","block").html("帐号格式不正确");
  	$("#zhanghao").css("border-color","red");
  
  }
  
 })
 
 
 $("#mima").blur(function(){
  if($("#mima").val()=="")
  {
  	
   $("#mima").css("border-color","red");
   return false;
  }
  var mi=$("#mima").val();
  if(mi.length<=5||mi.length>=16){
  	$("#mima").css("border-color","red");
  }else{
  	$("#mima").css("border-color","green");
  }
 
 })
 
 $("#denglu").click(function(){
 if($("#mima").css("border-color")=='rgb(0, 128, 0)'&&$("#zhanghao").css("border-color")=='rgb(0, 128, 0)'){
 	alert("登录成功");
 	 var zhang=$("#zhanghao").val();
 	 var mi=$("#mima").val();
 	setCookie("zhang",zhang,7);
	setCookie("mi",mi,7);
 	window.location.href="index.html";
 }else{
 	alert("登录失败");
 }
 
 })
 
 
 
 
 
 
})