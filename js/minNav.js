$(document).ready(function(){
	$("#nav1").click(function(){
		$("#content-p1").css("display","block");
		$("#content-p2").css("display","none");
		$("#content-p3").css("display","none");
		$("#content-p4").css("display","none");
		$(".content-p2-nav").css("visibility","hidden");
		$("#nav1").css("box-shadow","4px 4px #45574b");
		$("#nav2").css("box-shadow","0px 0px");
	});
	$("#nav2").click(function(){
		$("#content-p2").css("display","block");
		$("#content-p1").css("display","none");
		$("#content-p3").css("display","none");
		$("#content-p4").css("display","none");
		$(".content-p2-nav").css("visibility","visible");
		$("#nav2").css("box-shadow","4px 4px #45574b");
		$("#nav1").css("box-shadow","0px 0px");
	});
	
/*minNav
 ***************************/
	$("#content2-nav1").click(function(){
		$(".content-p2-wrap1").css("display","block");
		$(".content-p2-wrap2").css("display","none");
		$(".content-p2-wrap3").css("display","none");
		$("#content2-nav1").css("box-shadow","2px -2px 3px #5f5f5f");
		$("#content2-nav2").css("box-shadow","0px 0px");
		$("#content2-nav3").css("box-shadow","0px 0px");
	});	
	$("#content2-nav2").click(function(){
		$(".content-p2-wrap2").css("display","block");
		$(".content-p2-wrap1").css("display","none");
		$(".content-p2-wrap3").css("display","none");
		$("#content2-nav2").css("box-shadow","2px -2px 3px #5f5f5f");
		$("#content2-nav1").css("box-shadow","0px 0px");
		$("#content2-nav3").css("box-shadow","0px 0px");
	});	
	$("#content2-nav3").click(function(){
		$(".content-p2-wrap3").css("display","block");
		$(".content-p2-wrap2").css("display","none");
		$(".content-p2-wrap1").css("display","none");
		$("#content2-nav3").css("box-shadow","2px -2px 3px #5f5f5f");
		$("#content2-nav2").css("box-shadow","0px 0px");
		$("#content2-nav1").css("box-shadow","0px 0px");
	});	
});



 