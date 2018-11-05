	//login登录
	var oUser = document.querySelector("#username");
	var oPass = document.querySelector("#password");
	var oTs = document.querySelectorAll(".tishiBox");
	var oBtn = document.querySelector("#btn");
		oBtn.onclick = function(){
		var regoUser = /^1[3-9]\d{9}/g || /[a-z0-9]+@[a-z]+\.[a-z]$/g;
		var regoPass = /^[a-z0-9]{6,18}$/;
		var val = oUser.value;
		var val1 = oPass.value;

		//用户名和邮箱正则	
		if(regoUser.test(val)){
			oTs[0].style.display = "block";
			oTs[0].innerHTML = "用户名正确";
			fn();
		}else if (val=="") {
			oTs[0].style.display = "block";
			oTs[0].innerHTML = "用户名不能为空";
			fn();
		}else{
			oTs[0].style.display = "block";
			oTs[0].innerHTML = "请填写正确的用户名";
			fn();
		}

		//密码
		if(regoPass.test(val1)){	
			oTs[0].style.display = "block";
			oTs[0].innerHTML = "密码正确";
			fn();
		}else if (val1=="") {
			oTs[0].style.display = "block";
			oTs[0].innerHTML = "密码不能为空";
			fn();
		}else{
			oTs[0].style.display = "block";
			oTs[0].innerHTML = "请填写正确的密码";
			fn();
		}
	 }
	var fn=function(){
		var count = 0;
			var timer = setInterval(function(){
			 	count++;
			 	if (count == 5) {
			 		clearInterval(timer);
			 		oTs[0].style.display = "none";					 
			 	}					
	 		},1000);
	}
