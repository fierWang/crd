
	var oLeft = document.querySelector(".left");
	var oXsk = document.querySelector(".xsk");
	var oGray = document.querySelector(".gray");
	var oBig = document.querySelector(".big");
	var oImg = document.querySelectorAll(".tpxsk");
	var oSml = document.querySelector(".sml");
	oLeft.onmouseover = function(){
		oGray.style.display = "block";
		oXsk.style.display = "block";
	}
	oLeft.onmouseout = function(){
		oGray.style.display = "none";
		oXsk.style.display = "none";
	}
	// 添加鼠标移动事件
	oLeft.onmousemove = function(evt){
		var e = evt || window.event;
		// 求灰框的坐标
		var x = e.offsetX - (oGray.offsetWidth)/2;
		var y = e.offsetY - (oGray.offsetHeight)/2;
		// console.log(x,y);
		//检测左右边界
		if (x < 0) {
			x = 0;

		}else if (x > oLeft.offsetWidth - oGray.offsetWidth) {
			x = oLeft.offsetWidth - oGray.offsetWidth;

		}
		//检测上下边界
		if (y < 0) {
			y = 0;
		}else if (y > oLeft.offsetHeight - oGray.offsetHeight) {
			y = oLeft.offsetHeight - oGray.offsetHeight;

		}

		oGray.style.left = x + "px";
		oGray.style.top = y + "px";

		//计算移动比例
		var blX = -x / (oLeft.offsetWidth - oGray.offsetWidth);
		var blY = -y / (oLeft.offsetHeight - oGray.offsetHeight);
		
		
		// 求大图的坐标
		var bigX = blX * (oBig.offsetWidth - oXsk.offsetWidth);
		var bigY = blY * (oBig.offsetHeight - oXsk.offsetHeight);

		oBig.style.left = bigX + "px";
		oBig.style.top = bigY + "px";
	}
	for( let i = 0; i < oImg.length; i++){
		oImg[i].onmouseenter = function(){
			var src = this.children[0].getAttribute("data-src");
			// console.log(src);
			oSml.setAttribute("src",src);
			oBig.setAttribute("src",src);
		}
	}

//窗体的滚动事件				
	window.onscroll = function(){
		var oTop = document.querySelector(".detail_spcs");
		height = document.documentElement.scrollTop || document.body.scrolltop;
		if (height >= 1000) {
			oTop.style.position = "fixed";
			oTop.style.top = "0";
			// oTop.style.transition = "all 3s";
		}else{
			oTop.style.position = "";
			oTop.style.background = "rgba(255,255,255,0.8)"
		}
	}