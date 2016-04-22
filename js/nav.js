$(document).ready(function(){
	$("#nav1").click(function(){
		$("#content-p1").css("display","block");
		$("#content-p2").css("display","none");
		$("#content-p3").css("display","none");
		$("#content-p4").css("display","none");
		$("#nav1").css("box-shadow","4px 4px #45574b");
		$("#nav2").css("box-shadow","0px 0px");
		$("#nav3").css("box-shadow","0px 0px");
		$("#nav4").css("box-shadow","0px 0px");
	});
	$("#nav2").click(function(){
		$("#content-p2").css("display","block");
		$("#content-p1").css("display","none");
		$("#content-p3").css("display","none");
		$("#content-p4").css("display","none");
		$("#nav2").css("box-shadow","4px 4px #45574b");
		$("#nav1").css("box-shadow","0px 0px");
		$("#nav3").css("box-shadow","0px 0px");
		$("#nav4").css("box-shadow","0px 0px");
	});
	$("#nav3").click(function(){
		$("#content-p3").css("display","block");
		$("#content-p1").css("display","none");
		$("#content-p2").css("display","none");
		$("#content-p4").css("display","none");
		$("#nav3").css("box-shadow","4px 4px #45574b");
		$("#nav1").css("box-shadow","0px 0px");
		$("#nav2").css("box-shadow","0px 0px");
		$("#nav4").css("box-shadow","0px 0px");
	});
	$("#nav4").click(function(){
		$("#content-p4").css("display","block");
		$("#content-p1").css("display","none");
		$("#content-p3").css("display","none");
		$("#content-p2").css("display","none");
		$("#nav4").css("box-shadow","4px 4px #45574b");
		$("#nav1").css("box-shadow","0px 0px");
		$("#nav2").css("box-shadow","0px 0px");
		$("#nav3").css("box-shadow","0px 0px");
	});
});

	


 