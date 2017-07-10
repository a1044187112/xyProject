var Footer = {
	init: function() {
		this.addEvent();
		Header.lotClassId = $(this).text();
		
		setTimeout(function(){
			Footer.setLotLogo(getJson.lotId); // 显示彩票对应得logo
		},1000);
		
//		Footer.getLotWinAno();  //获取彩票中奖公告
	},

	addEvent: function() {
		$lotMenu = $(".7 .m_m_i_lot_i"); // 点击彩票中心下的 彩票菜单
		var lot_id = $(".lot_class_name").text();
		$("body").delegate(".m_m_i_lot .m_m_i_lot_i", "click", function() {
			Header.lotClassId = $(this).attr("data-id");
			var data_url = $(this).attr("data-url");
			if(data_url) { 
				window.open(data_url,"", "toolbar=no,menubar=no,resizable=no,location=no,top=100,left=250,scrollbars=no,width=1320,height=720'");
			} else {
				Footer.setLotLogo(Header.lotClassId);
				if($(".lot_class_name")[0]) {
					var lot_id = $(".lot_class_name").attr("data-id");
					var click_id = $(this).attr("data-id");
					var click_id_type = $(this).attr("data-type");
					$(".been_num_l li:gt(0)").remove();
					if((lot_id==4||lot_id==5||lot_id==6||lot_id==14)&&(click_id==4||click_id==5||click_id==6||click_id==14)) {
						$(".lot_class_name").attr("data-id",click_id);
						getlotTime();
						lotteryGme.methodSet.removeLotQiuActive(); // 移除所有彩票球 趣味 被选中的样式  同时修改面板的下注信息
					} else if((lot_id==1||lot_id==2||lot_id==3||lot_id==8||lot_id==9||lot_id==13||lot_id==10||lot_id==11||lot_id==12)&&(click_id==1||click_id==2||click_id==3||click_id==8||click_id==9||click_id==13||click_id==10||click_id==11||click_id==12)) {
						$(".lot_class_name").attr("data-id",click_id);
						getlotTime();
						lotteryGme.methodSet.removeLotQiuActive(); // 移除所有彩票球 趣味 被选中的样式  同时修改面板的下注信息
					} else if(lot_id==7&&click_id==7) {
						$(".lot_class_name").attr("data-id",click_id);
						getlotTime();
						lotteryGme.methodSet.removeLotQiuActive(); // 移除所有彩票球 趣味 被选中的样式  同时修改面板的下注信息
					} else {
						window.location.href = "/xyProject/home/lotteryGmae/lotteryGame.html?" + Header.lotClassId;
					}
				} else {
					window.location.href = "/xyProject/home/lotteryGmae/lotteryGame.html?" + Header.lotClassId;
				}
			}

		});
	},

	setLotLogo: function(lot_id) {
		switch(parseInt(lot_id)) {
			case 1:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_1.png");
				$(".lot_des_text").text("彩种说明：5分钟，10分钟一期，共120期");
				$(".lot_class_name").text("重庆时时彩");
				break;
			case 3:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_5.png");
				$(".lot_des_text").text("彩种说明：10分钟一期，共84期");
				$(".lot_class_name").text("天津时时彩");
				break;
			case 2:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_6.png");
				$(".lot_des_text").text("彩种说明：10分钟一期，共96期");
				$(".lot_class_name").text("新疆时时彩");
				break;
			case 4:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_4.png");
				$(".lot_des_text").text("彩种说明：10分钟一期，共87期");
				$(".lot_class_name").text("山东11选5");
				break;
			case 5:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_2.png");
				$(".lot_des_text").text("彩种说明：10分钟一期，共84期");
				$(".lot_class_name").text("广东11选5");
				break;
			case 6:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_3.png");
				$(".lot_des_text").text("彩种说明：10分钟一期，共78期");
				$(".lot_class_name").text("江西11选5");
				break;
			case 14:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_11.png");
				$(".lot_des_text").text("彩种说明：一分钟一期，共1380期");
				$(".lot_class_name").text("多乐11选5");
				break;
			case 7:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_7.png");
				$(".lot_des_text").text("彩种说明：每天一期");
				$(".lot_class_name").text("福彩3D");
				break;
			case 8:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_8.png");
				$(".lot_des_text").text("彩种说明：即时开奖，下注成功即可开奖");
				$(".lot_class_name").text("多乐秒秒彩");
				break;
			case 9:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_14.png");
				$(".lot_des_text").text("彩种说明：一分钟一期，共1380期");
				$(".lot_class_name").text("多乐一分彩");
				break;
			case 10:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_9.png");
				$(".lot_des_text").text("彩种说明：三分钟一期，共460期");
				$(".lot_class_name").text("多乐三分彩");
				break;
			case 11:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_12.png");
				$(".lot_des_text").text("彩种说明：五分钟一期，共276期");
				$(".lot_class_name").text("多乐五分彩");
				break;
			case 12:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_10.png");
				$(".lot_des_text").text("彩种说明：十分钟一期，共138期");
				$(".lot_class_name").text("多乐十分彩");
				break;
			case 13:
				$("#lot_id").attr("src", "/xyProject/public/img/lotteryGame/game_13.png");
				$(".lot_des_text").text("彩种说明：90秒一期，共920期");
				$(".lot_class_name").text("多乐1.5分彩");
				break;
		}
	},
	
	
	getLotWinAno : function(){
			var url = '/game/lottery/get-win-records?gametype=彩票';
			Footer.allAjaxSub(url,Footer.getLotWinAnoPro);
			setTimeout("Footer.getLotWinAno()",5000);
		},
		
	allAjaxSub : function(urlString,method){
			$.ajaxSetup({ cache: false }); 
			$.ajax({
				type: 'GET',
				url: urlString,
				dataType: "json",
				cache:false,
				success: function(data) { 
					method(data);
				},
				error: function(e) {
					console.log(e);
				}
			});
		},
		
	getLotWinAnoPro : function(data){  //  中奖记录
			var _html = '';
			$.each(data, function(i,item) {
				_html += '<li class="win_ano_show_i">恭喜'+item.memberid+'中奖'+item.winmoney.toFixed(0)+'元</li>';
			});
			$(".win_ano .win_ano_show_list ul").html(_html); 
		},
		
		
		
		
};
Footer.init();