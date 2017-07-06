var CountDown = {
	cdCall: function(itemArr,$obj,step) {
		var $hourSel = itemArr[0];
		var $minuteSel = itemArr[1];
		var $senondSel = itemArr[2];
		CountDown.setTime($hourSel, $minuteSel, $senondSel,$obj,step);
	},
	setTime: function($hourSel, $minuteSel, $senondSel,$obj,step) {
		CountDown.setInterval = setInterval(function() {
			var thisTimeSecond = $senondSel;
			var thisTimeMinute = $minuteSel;
			var thisTimeHour = $hourSel;
			thisTimeSecond--;
			if(thisTimeSecond < 0) { //  秒数小于0时  重置为59  此时分钟数减一
				thisTimeSecond = 59;
				thisTimeMinute--;
				if(thisTimeMinute < 0) { //  分钟数小于0时  重置为59  此时小时数减一 
					thisTimeMinute = 59;
					thisTimeHour--;
					if(thisTimeHour < 0) { //  小时数小于0时  重置为23
						thisTimeHour = "00";
						thisTimeMinute = (step-0)-1;
						if(thisTimeMinute==-1)
							thisTimeMinute = "00";
						thisTimeSecond = "59";
					} else {
						thisTimeHour = CountDown.timeCompare(thisTimeHour);
					}
				} else {
					thisTimeMinute = CountDown.timeCompare(thisTimeMinute);
				}
			} else {
				thisTimeSecond = CountDown.timeCompare(thisTimeSecond);
			}
			$senondSel = thisTimeSecond;
			$minuteSel = thisTimeMinute;
			$hourSel = thisTimeHour;
			thisTimeSecond = thisTimeSecond+"";
			thisTimeMinute = thisTimeMinute+"";
			thisTimeHour = thisTimeHour+"";
			
			thisTimeHour = CountDown.timeCompare(parseInt(thisTimeHour));
			$obj.find(".c_p_l_time").find("span:nth-child(1)").text(thisTimeHour.substring(0,thisTimeHour.length-1));
			$obj.find(".c_p_l_time").find("span:nth-child(2)").text(thisTimeHour.substring(1,thisTimeHour.length));

			thisTimeMinute = CountDown.timeCompare(parseInt(thisTimeMinute));
			$obj.find(".c_p_l_time").find("span:nth-child(3)").text(thisTimeMinute.toString().substring(0,thisTimeMinute.toString().length-1));
			$obj.find(".c_p_l_time").find("span:nth-child(4)").text(thisTimeMinute.toString().substring(1,thisTimeMinute.toString().length));

			$obj.find(".c_p_l_time").find("span:nth-child(5)").text(thisTimeSecond.substring(0,thisTimeSecond.length-1));
			$obj.find(".c_p_l_time").find("span:nth-child(6)").text(thisTimeSecond.substring(1,thisTimeSecond.length));
		}, 1000);
	},
	timeCompare: function(num) {
		if(num < 10) { //  d当数字小于0时  需要加上一个0
			var a = "0";
			num = a + num.toString();
			return num;
		}
		return num;
	}
};

var Home = {
	init: function() {
		
		Home.banner.init();// banner  滚动效果
		
		scrollTimer = setInterval(function() {
			$(".con_i_item").each(function() {
				Home.scrollLeaderboard($(this));
			});
		}, 2500);
		
		this.addEvent();
		
		Home.aLLPopusInit();
		
		Home.gameImg.init();
		
		Home.lotClassIdAjax();  // 获取彩种id
		
		
//		Home.getLotIssue();// 获取期号
		
	},
	resetMoneyPwd : function(){ //// 第一次登录 提示用户修改资金密码
		$(".popus_bg").css("display","block");
		$(".user_remind").css("display","block");
	},
	// 思路  滚动的时候先将ul的marginTop  设置成负值  刚好等于li的高度  当动画执行完以后   marginTop 设置为0  将隐藏的li  添加到ul  的尾部
	scrollLeaderboard: function(obj) {
		var $ul = obj.find(".c_i_i_l");
		var lineHeight = $ul.find("li:first").height();
		$ul.animate({
			"marginTop": -lineHeight + "px"
		}, 1000, function() {
			$ul.css({
				marginTop: 0
			}).find("li:first").appendTo($ul);
		});
	},
	
	banner : {
		init : function(){  // 图片滚动
			Home.banner.idArr = new Array("#banner_1","#banner_2","#banner_3","#banner_4");
			Home.banner.count = 0;
			Home.banner.bannerImgScroll();  // 图片滚动事件
			Home.banner.mouseClick();
			Home.banner.radiusFocus();
			
		},
		bannerImgScroll : function(idArr){
			$("#container .banner_img").css("display","none");
			$("#container "+Home.banner.idArr[Home.banner.count]).css("display","block");
			$(".banner_list .banner_item span").removeClass("active");
			$(".banner_list .banner_item:nth-child("+(Home.banner.count+1)+") span").addClass("active");
			Home.banner.count++;
			Home.banner.count = Home.banner.count%4;
			Home.banner.t =  setTimeout("Home.banner.bannerImgScroll()",4000);
		},
		
		mouseClick : function(){
			$("#container .banner_item").click(function(){
				var index = $(this).index("#container .banner_item");
				$(".banner_list .banner_item span").removeClass("active");
				$(".banner_list .banner_item:nth-child("+(index+1)+") span").addClass("active");
				$("#container .banner_img").css("display","none");
				$("#container "+Home.banner.idArr[index]).css("display","block");
			});
		},
		
		radiusFocus: function(){
			$("#container .banner_list .banner_item").mouseover(function(){
				clearTimeout(Home.banner.t);
				Home.banner.t =  setTimeout("Home.banner.bannerImgScroll()",4000);
			});
		},
	},
	
	addEvent : function(){
		$(window).resize(function(){
			Home.aLLPopusInit();
//	        animateSlideUp();
//			$('.quake-slider').quake({ effects: ['randomFade', 'diagonalFade', 'explode', 'explodeFancy'], 
//	            thumbnails: true,
//	            captionOpacity: '0.3'
//          });
        });
        
        $(".anno_popus .anno_popus_close").click(function(){
        	$(".anno_popus").css("display","none");
        });
        
        $(".u_r_b").click(function(){
        	$(".popus_bg").css("display","none");
			$(".user_remind").css("display","none");
        });
	},
	
	aLLPopusInit: function() {
		var width = parseInt($("body").css("width"));
		$(".anno_popus").css("left", (width - parseInt($(".anno_popus").css("width"))) / 2 + "px");
	},
	
	gameImg : {
		init : function(){
			Home.gameImg.setFatherDivWidth();
			Home.gameImg.addEvent();
		},
		
		setFatherDivWidth : function(){
			$(".con .m_l").each(function(){
				var li_len = $(this).find(".m_i").length;
				var li_margin = (li_len-parseInt(li_len/4))*13;
				$(this).css("width",li_len*290+li_margin+"px");
			});
		},
		
		addEvent : function(){
			$(".more .more_left").click(function(){
				var ul_width = parseInt($(this).next(".m_l").css("width"));
				var ul_margin_left = parseInt($(this).next(".m_l").css("margin-left"));
				if(ul_margin_left<0){
					$(this).next(".m_l").animate({
						marginLeft:(ul_margin_left+1200)+"px"
					},600);
				}
			});
			
			$(".more .more_right").click(function(){
				var ul_width = parseInt($(this).prev(".m_l").css("width"));
				var ul_margin_left = parseInt($(this).prev(".m_l").css("margin-left"));
				if((ul_width-ul_margin_left)>1200){
					$(this).prev(".m_l").animate({
						marginLeft:"-="+(ul_margin_left+1200)+"px"
					},600);
				}
			});
		},
	},
	lotTimeAjax : function(){  // 获取倒计时时间
		var strID = "";
		$(".c_p_l_l .c_p_l_i").each(function(){
			strID += $(this).attr("data-id") + ",";
		});
		console.log(strID.substring(0,strID.length-1));
		$.ajax({  // 获取倒计时时间
				type: 'POST',
				url: Header.ajaxUrl+"/WebService.asmx/Json_GetLotteryNextInfo",
				dataType: "xml",
				data: { LotteryId: strID.substring(0,strID.length-1) },
				success: function(data) {  
					console.log(data);
					data = JSON.parse($(data).find("string").text());
					console.log(data);
					$.each(data, function(i,item) {
						$($(".c_p_l_l .c_p_l_i")[i]).find(".c_p_l_info span").text(item.Expect);;// 期号
						
						var startTime = new Date(); //定义当前时间
			        
				        var endTime = new Date(item.OpenTime);//定义结束时间
				        
				        //算出中间差并且已毫秒数返回; 除以1000将毫秒数转化成秒数方便运算；
	        			var countDown = (endTime.getTime() - startTime.getTime())/1000;  
	        			var itemArr = new Array();
				        itemArr.push(parseInt(countDown/(60*60)%24));//获取小时数 
				        
				        itemArr.push(parseInt(countDown/60%60)); //获取分钟数
				        
				        itemArr.push( parseInt(countDown%60));//获取秒数
				        
//				        var step = 0;
//				        if(data.config){
//					        $.each(data.config,function(i,item){
//					        	if(startTime.getHours()>=item.btime&&startTime.getHours()<=item.etime)
//					        		step = item.step;
//					        });
//				        }
				        CountDown.cdCall(itemArr,$($(".c_p_l_l .c_p_l_i")[i]),10);
					});
			        
				},
				error: function(e) {
					console.log(e);
				}
			});
	},
	
	getLotIssue : function(){
		$(".c_p_l_l .c_p_l_i").each(function(){
			var $obj = $(this);
			var itemArr = new Array();
			$.ajax({  // 获取倒计时时间
				type: 'GET',
				url: "/game/lottery/get-state?gametype="+"彩票/"+$obj.attr("data-id"),
				dataType: "json",
				cache:false,
				success: function(data) {  
					if(data.data)
						$obj.find(".c_p_l_info span").text(data.data.expect);
				},
				error: function(e) {
					console.log(e);
				}
			});
		});
	},
	
	
	lotClassIdAjax : function(){
		$.ajax({  // 获取倒计时时间
				type: 'POST',
				url: Header.ajaxUrl+"/WebService.asmx/Json_GetLotteryList",
				dataType: "xml",
				success: function(data) {  
					data = JSON.parse($(data).find("string").text());
			        $.each(data, function(i,item) {
			        	$($(".c_p_l_l .c_p_l_i")[i]).attr("data-id",item.Id)
			        });
			        Home.lotTimeAjax(); // 获取倒计时时间
				},
				error: function(e) {
					console.log(e);
				}
			});
	},
};
Home.init();