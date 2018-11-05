	//register注册框
	var oPtu1 = document.querySelector("#put1");
	var oPtu2 = document.querySelector("#put2");
	var oPtu4 = document.querySelector("#oPtu4");
	var oTs = document.querySelectorAll(".tishiBox");
	var oBtn = document.querySelector("#btn");
	var oPass = document.querySelector("#password");
	var oQrpass = document.querySelector("#qrpassword");
	var oIn = document.querySelector("#put2");	
	var oFont = document.querySelector("#put3");

	oBtn.onclick = function(){
		var regoPtu1 = /^1[3-9]\d{9}/g;
		var val = oPtu1.value;	
		if(regoPtu1.test(val)){	
			oTs[0].style.display = "block";
			oTs[0].innerHTML = "注册成功";
			fn();
		}else if (val=="") {
			oTs[0].style.display = "block";
			oTs[0].innerHTML = "用户名不能为空";
			fn();
		}else{
			oTs[0].style.display = "block";
			oTs[0].innerHTML = "用户名不正确";
			fn();

		}

		//验证码
			
			// 3，获取输入框的值
			
			if( a == "" ){
				oTs[0].style.display = "block",
				oTs[0].innerHTML = "验证码不能为空"
			}else if( a == b ){
				
			}else{
				oTs[0].style.display = "block",
				oTs[0].innerHTML = "请填写正确的验证码";
				oIn.value = ""
				
			}
			oFont.onclick = function(){
				var arr = [];
				var c=0;
				for( var i = 0; i < 4; i++){
					c = Math.ceil(Math.random()*3);
					if (c == 1) {
						arr.push(Math.ceil(Math.random()*9));
					}else if(c == 2){
						arr.push(String.fromCharCode(65+Math.ceil(Math.random()*25)));

					}else{
						arr.push(String.fromCharCode(97+Math.ceil(Math.random()*25)));

					}
				}
				oFont.value = arr.join("");
			}

			//密码
			
			var regoPass = /^[a-z0-9]{6,18}$/;
			if(regoPass.test(val1)){	
				
			}else if (val1=="") {
				oTs[0].style.display = "block";
				oTs[0].innerHTML = "密码不能为空";
				fn();
			}else{
				oTs[0].style.display = "block";
				oTs[0].innerHTML = "请填写正确的密码";
				fn();
			}

			var val1 = oPass.value;
			var val2 = oQrpass.value;
			if(val1==val2){

			}else{
				oTs[0].style.display = "block";
				oTs[0].innerHTML = "两次密码不一致哦";
				fn();
			}


	}

	//定时器
	var fn=function(){
		var count = 0;
		var timer = setInterval(function(){
		 	count++;
		 	console.log(count);
		 	if (count == 3) {
		 		clearInterval(timer);
		 		oTs[0].style.display = "none";						 
		 	}					
 		},1000);
	}
		// //接口验证
		// $.ajax({
		// 	url:`https://www.apiopen.top/createUser?
		// 	key=00d91e8e0cca2b76f515926a36db68f5&
		// 	phone=${ oPtu1 }&passwd=${ oPtu4 }`,
		// 	type:"get",
		// 	// data:"{phone:sdfdfdf,passdfdfd}",
		// 	success:function( res ){
		// 		console.log(res)
		// 		var val = res.code;
		// 		if( val ){
		// 			// console.log(val)
		// 			switch( val ){
		// 				case 200:
		// 					$(".tishiBox").html(res.msg);
		// 					window.location.href = "login.html"
		// 					break;
		// 				case 202:
		// 					$(".tishiBox").html(res.msg);
		// 					break;
		// 				default:
		// 					$(".tishiBox").html("其他情况");
		// 			}
		// 		}
		// 	},
		// 	error:function(err){

		// 	}
		// })	
		

	


