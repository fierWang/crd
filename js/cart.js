// 计算
$(function(){
	//定义一个变量存储商品件数
	var num = 1;
	$(".jia").click(function(){
		num++;
		$(this).prev().val(num);
		numChange();
	})
	$(".jian").click(function(){
		if (num>1) {
			num--;
			$(this).next().val(num);
			numChange();
		}
	})
	$(".delect").click(function(){
		$(".product2").remove();
	})

	function numChange(){
		var danjia = (($("#dianjia").text()).match(/[0-9]+/g))[0];
		var xiaoji = num * danjia;
		$("#xiaoji").html(xiaoji+"元");
		var jsfont = num * danjia;
		$(".jsfont").html(jsfont);
	} 


// 全选和反选

	$(".all").click(function(){
		var flag = $(this).prop("checked")
		$(".cart-select2").find(":checkbox").prop("checked",flag)
	})
})