
//返回顶部
var sideTop = document.querySelector(".sideTop");
	//窗体的滚动事件			
	window.onscroll = function(){
		sideTop.onclick = function(){
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
						
		}
	}

//轮播图
$(function(){
    var index = 0;
    var imgLength = $(".imgBox").length;
    var timer;
    // console.log(imgLength)
    $(".right").click(function(){
        // console.log($(".right"));
        index++;
        console.log(index)
        move();
    })

    $(".left").click(function(){
        index--;
        move();
    })

    function move(){
        //检测右边界
        if ( index >= imgLength ){
            index = 0;
        }

        //检测左边界
        if (index<=-1){            
            index = imgLength-1;
        }

        $(".imgs").stop().animate({
            "left": -index * $(".imgBox").width()
        },1000)

        //判断小圆点的边界
        if (index >= imgLength) {
            $(".all span").eq(0).addClass("aurrent").siblings().removeClass("aurrent");
        }

        // 添加圆点样式
        $(".all span").eq(index).addClass("aurrent").siblings().removeClass("aurrent");
    }
        $(".all span").click(function(){
            index=$(this).index();
            move();
        })

    $(".screen").hover(function(){
            // 鼠标悬停
            clearInterval(timer);
        },function(){
            autoPlay();
        });


    //封装图片自动播放函数
        function autoPlay(){
            timer = setInterval(function(){
                index++;
                if (index >= imgLength) {
                    index = 0;
                }
               move();
            },3000)
        }
        autoPlay();
})           