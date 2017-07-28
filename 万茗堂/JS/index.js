$(function(){
	var a=0,timmer;
	function auto(){
		timmer=setInterval(function(){
			a++;
			if (a>=4) {
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
	$('#left').click(function(){
		clearInterval(timmer)
		a--
		if (a<0) {
			a=3
		};
		sty()
		auto()
	})
	$('#right').click(function(){
		clearInterval(timmer)
		a++
		if (a>3) {
			a=0
		};
		sty()
		auto()
	})
/********************************************************/
	var x=0,timmer1; 
	function m(){
		timmer1=setInterval(function(){
			x++;
			if (x>3) {
				x=0
			};
			s()
		},5000)
	}
	m();
	function s(){
		$('.style_show_tit li').eq(x).css({borderBottom:"2px solid #c11629"}).siblings().css({borderBottom:"none"})
		$('.con .goods').eq(x).fadeIn(1500).siblings().hide()
	}
	$('.style_show_tit li').mouseenter(function(){
		clearInterval(timmer1)
		x=$(this).index()
		s()
	});
	$('.style_show_tit li').mouseleave(function(){
		clearInterval(timmer1)
		x=$(this).index()
		s()
		m();
	});
	/*************************************/ 
	/*************第一个*************/ 
	$('.fir').mouseenter(function(){
		var f=$(this).index()
		if (f==0) {
			return false;
		}else{
			$('.cang').eq(f).show(700,function(){
				$('.cang').eq(0).toggle();
				$('.fir h3').eq(0).toggle()
			})
			$('.fir h3').eq(f).hide(700)
		}
	});
	$('.fir').mouseleave(function(){
		var f=$(this).index();
		if(f==0){
			return false;
		}else{
			$('.cang').eq(f).hide(700,function(){
				$('.cang').eq(0).toggle();
				$('.fir h3').eq(0).toggle()
			})
			$('.fir h3').eq(f).show(600)
		}
		
	});
	/************第二个***********/ 
	$('.hot_goods').mouseenter(function(){
		var h=$(this).index()
		if (h==0) {
			return false;
		}else{
			$('.cang1').eq(h).show(700,function(){
				$('.cang1').eq(0).toggle();
				$('.hot_goods h3').eq(0).toggle()
			})
			$('.fir h3').eq(h).hide(700)
		}
	});
	$('.hot_goods').mouseleave(function(){
		var h=$(this).index()
		if(h==0){
			return false;
		}else{
			$('.cang1').eq(h).hide(700,function(){
				$('.cang1').eq(0).toggle();
				$('.hot_goods h3').eq(0).toggle()
			})
			$('.hot_goods h3').eq(h).show(600)
		}
	});
	/*****************************************/
	var two=0;
	setInterval(function(){
		two++
		if (two>1) {
			two=0
		};
		$('.clsicWrapper_left_topRight a').eq(two).fadeIn(1000).siblings().fadeOut(1000);
	},3000)

	/*回到顶部*/
	$(window).scroll(function() {
		$(window).scrollTop()> "200" ?$("#ScrollTop").show():$("#ScrollTop").hide();
	});
	$("#ScrollTop").click(function() {
		return $("html,body").animate({scrollTop:0},700)
	});
	/*************************/
	var r=0
	setInterval(function(){
		r++
		if (r>1) {
			r=0
		};
		$('.RB a').eq(r).fadeIn('1500').siblings().hide()
		$('.RightBot li').eq(r).css({background:"red",color:"#fff"}).siblings().css({background:"#fff",color:"#000"})
	},3000) 
	
})

