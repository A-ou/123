$(function(){
	var a=0,timmer;
	function auto(){
		timmer=setInterval(function(){
			a++;
			if (a>=3) {
				a=0
			};
			sty()
		},5000)
	}
	auto()
	function sty(){
		$('#outer a').eq(a).fadeIn(1000).siblings().fadeOut(1000);
		$('#lis li').eq(a).css({background:"red",color:"#fff"}).siblings().css({background:"#fff",color:"black"})
	}
	$('#lis li').click(function(){
			clearInterval(timmer)
			var i=$(this).index()
			$('#lis li').eq(i).css({background:"red",color:"#fff"}).siblings().css({background:"#fff",color:"black"})
			$('#outer a').eq(i).fadeIn(1000).siblings().fadeOut(1000);
			a=i
			auto()
		})
})
