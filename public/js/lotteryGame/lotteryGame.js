
// 获取页面数据  加载到页面上
var getJson = {
	init: function() {
		this.getUrlId(); // 获取地址栏的彩票id
	},
	getUrlId: function() {
		var url = window.location.href;
		var urlArr = url.split("?");
		getJson.lotId = decodeURI(urlArr[1]);
		
		
		$(".lot_class_name").html(getJson.lotId); // 更换当前显示的彩票名字
		this.initLotData(); // load  json 数据
		if(getJson.lotId=="福彩3D"){
			window.qiuNum = 3;
		}else{
			window.qiuNum = 5;
		}
	},
	initLotData: function() {
		$.get("lotData.json", function(data) {
			getJson.anDataLoad(data);
		});
	},

	anDataLoad: function(data) { // 解析json  数据
		var id = getJson.lotId;
		var index = getJson.lotPanelIsShow(id);
		var data = JSON.parse(data);
		getJson.proData11sel5(data, index);
	},

	proData11sel5: function(data, index) {
		var _html = ""; // 彩票星数栏
		$(".lot_h_intro").text(data.lotIntro);
		$.each(data[index].lotInfo, function(i, item) {
			var text = "";
			$.each(item.item, function(i, item) {
				if(index == 0) { // 十一选五 
					text += item.val + ",";
				}else { // 时时彩  3d
//					console.log(item);
					text += item.title + "?";
					$.each(item.info, function(i, item) {
						text += item.val + ",";
					});
					text = text.substring(0, text.length - 1);
					text += "|";
				}
			});
			var text = text.substring(0, text.length - 1);
			_html += '<li class="lot_b_i_i" data-id=' + text + '>' + item.title + '</li>';
		});
		$(".lot_ball .lot_menu1").html(_html);
		// 添加代码之后 默认促发彩票下星号的第一个的点击事件
		$(".lot_ball .lot_menu1 .lot_b_i_i:first-child").trigger("click");
	},

	lotPanelIsShow: function(id) {
		$(".lot_model").css("display", "none"); // 显示十一选五面板
		$(".lot_panel").css("display", "none");
		$(".lot_model_3d").css("display", "none");
		$(".lot_panel_3d").css("display", "none");
		if(id == "山东11选5" || id == "广东11选5" || id == "江西11选5" || id == "多乐11选5") {
			$(".lot_model").css("display", "block"); // 显示十一选五面板
			$(".lot_panel").css("display", "block");
			return 0;
		} else if(id == "福彩3D") {
			$(".lot_model_3d").css("display", "block");
			$(".lot_panel_3d").css("display", "block");
			return 1;
		} else {
			return 2;
		}
	},

};

//   页面点击事件和部分处理方法
var lotteryGme = {
	init: function() {
		lotteryGme.thisLotClass = ""; // 当前页面显示的彩种

		getJson.init(); // 加载json  文件 

//		CountDown.cdCall(); // 倒计时

		this.addEvent();


		lotteryGme.methodSet.pageStyleInit(); // 页面公用部分的样式修改  对应到彩票页面  如 header 菜单

		lotteryGme.methodSet.aLLPopusInit(); // 初始化所有弹窗  默认居中

	
		lotteryGme.allAjax.initAjax();
		
		lotteryGme.bonusModelJisuan();  // 奖金模式计算
		lotteryGme.isRenPointer = false;//当前模式是否需要返点
		
		$(".con_menu .con_menu_item").removeClass("active");
		$($(".con_menu .con_menu_item")[1]).addClass("active");
		
	},
	bonusModelJisuan : function(){  
		var text0 = 	$(".lot_b_i_intro .single_note_bonus").attr("data-id");
		var bounsModel = $(".lot_b_i_s_i .lot_bonus").text()-0;  // 当前奖金模式
		if(Header.rebate){
			var rebeatData = JSON.parse(Header.rebate);
			var lotClass = $(".lot_class_name").text();
				if(lotClass == "福彩3D"){
					lotteryGme.bounsModel = 1800+(rebeatData.时时彩*100-0)*20;
					var retPointer = lotteryGme.returnPointer(lotteryGme.bounsModel,20,1800);
					if(((1800+retPointer*20)*text0/1800))
						$(".lot_b_i_intro .single_note_bonus").text(((1800+retPointer*20)*text0/1800).toFixed(2));
					else
						$(".lot_b_i_intro .single_note_bonus").text("");
					$(".lot_b_i_s_i .lot_bonus").text(((1800+retPointer*20)*1800/1800).toFixed(0));
						console.log(text0); 
				}else if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5"){
					lotteryGme.bounsModel = 1811+(rebeatData.十一选五*100-0)*19.8;
					var retPointer = lotteryGme.returnPointer(lotteryGme.bounsModel,19.8,1811);
					if(((1811+retPointer*19.8)*text0/1811)) 
						$(".lot_b_i_intro .single_note_bonus").text(((1811+retPointer*19.8)*text0/1811).toFixed(2));
					else
						$(".lot_b_i_intro .single_note_bonus").text("");
					$(".lot_b_i_s_i .lot_bonus").text(((1811+retPointer*19.8)*1811/1811).toFixed(0));
				}else{
					lotteryGme.bounsModel = 1800+(rebeatData.低频彩*100-0)*20;
					var retPointer = lotteryGme.returnPointer(lotteryGme.bounsModel,20,1800);
					if(((1800+retPointer*20)*text0/1800))
						$(".lot_b_i_intro .single_note_bonus").text(((1800+retPointer*20)*text0/1800).toFixed(2));
					else
						$(".lot_b_i_intro .single_note_bonus").text("");
					$(".lot_b_i_s_i .lot_bonus").text(((1800+retPointer*20)*1800/1800).toFixed(0));
				}
		}
	},
	
	returnPointer : function(text0,text1,text2){  // 计算返点
		if(lotteryGme.isRenPointer){
			var rePoText  = (lotteryGme.bounsModel - text2)/(text1);
			$(".lot_b_i_s_range span.lot_b_i_s_i:first-child span").text(rePoText.toFixed(1)+'%');
			return 0;
		}else{
			$(".lot_b_i_s_range sp:first-child span").text('0.0%');
			return (lotteryGme.bounsModel - text2)/text1;
		}
	},

	addEvent: function() {
		
		$(document).keydown(function(e){
			if(e.keyCode == 116){
				e.preventDefault(); //组织默认刷新
				window.location.href = "/home/lotteryGmae/lotteryGame.html?" + Header.lotClassId;
			}
		});

		$("body").delegate(".lot_menu1 .lot_b_i_i", "click", function() {  //   彩票星数选择菜单
				lotteryGme.methodSet.methodItem1($(".lot_menu1 .lot_b_i_i"), $(this));
				lotteryGme.methodSet.getModelClass($(this).attr("data-id")); // 改变彩票选号类型的值
				var lotClass = $(".lot_class_name").text();
				if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5") {
					changeLotteryPanel.panelShow($(".lot_model .active"));
				} else if(lotClass == "福彩3D") {
					changeLotteryPanel.panelShow($(".lot_model_3d .active"));
				} else {
					changeLotteryPanel.panelShow($(".lot_model_3d .active"));
					$(".lot_ball_play_f").css("display", "block");
				}
			lotteryGme.methodSet.removeLotQiuActive(); // 移除所有彩票球 趣味 被选中的样式  同时修改面板的下注信息
		});
		// 时时彩 一级菜单  任选玩法
		$("body").delegate(".lot_menu1_ssc .lot_b_i_i", "click", function() {
//			if(!$(this).hasClass("active")) { // 如果点击的对象有avtive  不做处理
				lotteryGme.methodSet.methodItem1($(".lot_menu1_ssc .lot_b_i_i"), $(this));
				lotteryGme.methodSet.getModelClass($(this).attr("data-id")); // 改变彩票选号类型的值
				var lotClass = $(".lot_class_name").text();
				if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5") {
					changeLotteryPanel.panelShow($(".lot_model .active"));
				} else if(lotClass == "福彩3D") {
					changeLotteryPanel.panelShow($(".lot_model_3d .active"));
				} else {
					changeLotteryPanel.panelShow($(".lot_model_3d .active"));
					$(".lot_ball_play_f").css("display", "block");
				}
//			}
			lotteryGme.methodSet.removeLotQiuActive(); // 移除所有彩票球 趣味 被选中的样式  同时修改面板的下注信息
		});

		$modelClassSel = $(".lot_model .lot_b_i_i"); // 彩票选号类型点击  五星下面的类型  十一选五 模式
		$("body").delegate(".lot_model .lot_b_i_i", "click", function() {
			if(!$(this).hasClass("active")) { // 如果点击的对象有avtive  不做处理
				lotteryGme.methodSet.methodItem1($(".lot_model .lot_b_i_i"), $(this));
				changeLotteryPanel.panelShow($(this));
			}
			lotteryGme.methodSet.removeLotQiuActive(); // 移除所有彩票球 趣味 被选中的样式
		});

		$modelClassSel = $(".lot_model_3d .lot_model_i_2"); // 彩票选号类型点击  五星下面的类型  福彩3d  时时彩模式
		$("body").delegate(".lot_model_3d .lot_model_i_2", "click", function() {
			if(!$(this).hasClass("active")) { // 如果点击的对象有avtive  不做处理
				lotteryGme.methodSet.methodItem1($(".lot_model_3d .lot_model_i_2"), $(this));
				changeLotteryPanel.panelShow($(this));
			}
			lotteryGme.methodSet.removeLotQiuActive(); // 移除所有彩票球 趣味 被选中的样式
		});

		$(".lot_ball_play_change").click(function() { // 任选玩法和普选玩法
			if(!$(this).hasClass("active")) {
				lotteryGme.methodSet.methodItem1($(".lot_ball_play_change"), $(this));
				if($(this).text() == "普选") { // 普选
					$(".lot_ball .lot_menu1").css("display", "block");
					$(".lot_ball .lot_menu1_ssc").css("display", "none");
					$(".lot_menu1 .lot_b_i_i:first-child").trigger("click");
				} else { // 任选
					$(".lot_ball .lot_menu1_ssc").css("display", "block");
					$(".lot_ball .lot_menu1").css("display", "none");
					$(".lot_menu1_ssc .lot_b_i_i:first-child").trigger("click");
				}
			}
		});

		// 彩票球点击事件
		$("body").delegate(".lot_b_i_i_num", "click", function() {
			lotteryGme.methodSet.lotQiu($(this));
			lotteryNoteCal.init(); // 彩票球注单计算
		});
		// 十一选五 趣味——定单双下按钮点击事件
		$("body").delegate(".qu_wei_item", "click", function() {
			lotteryGme.methodSet.lotQiu($(this));
			lotteryNoteCal.init();
		});

		// 彩票球后 全 大 小 奇 偶 清
		$("body").delegate(".lot_b_i_i_sel", "click", function() {
			lotteryGme.methodSet.lotTextClick($(this));
			lotteryNoteCal.init(); // 彩票球注单计算
		});

		// 元 角  分  厘  模式选择
		$(".lot_bet_info .money_model").click(function() {
			if(!$(this).hasClass("active")) {
				lotteryGme.methodSet.methodItem1($(".lot_bet_info .money_model"), $(this));
				lotteryGme.methodSet.changelotInfo();
			}
		});

		// 倍数下拉图标点击事件
		$(".lot_b_i_s_xiala .xiala_icon").click(function() {
			if($(this).hasClass("active")) {
				$(this).removeClass("active");
				$(".xiala_list").css("display", "none");
			} else {
				$(this).addClass("active");
				$(".xiala_list").css("display", "block");
			}
		})

		// 倍数下拉框 li点击事件
		$(".xiala_list .xiala_item").click(function() {
			var text = $(this).text();
			$(".lot_b_i_s_xiala .mu_val").val(text);
			$(".xiala_list").css("display", "none");
			$(".lot_b_i_s_xiala .xiala_icon").removeClass("active");

			lotteryGme.methodSet.changelotInfo();
		});
		// 倍数输入框值改变事件  修改显示面板 注单数 投注金额
		$(".lot_b_i_s_xiala .mu_val").change(function() {
			lotteryGme.methodSet.changelotInfo();
		});

		// 当点击页面不是在下拉框内部时  隐藏菜单
		$("body").bind("click", function(e) {
			if($(e.target).parent(".lot_b_i_s_xiala").length == 0) {
				$(".xiala_list").css("display", "none");
				$(".lot_b_i_s_xiala .xiala_icon").removeClass("active");
			}

		});
		// 倍数input type=number 失去焦点事件
		$(".lot_b_i_s_xiala .mu_val").blur(function() {
			var num = $(this).val();
			if(num > 99999) $(this).val(99999);
		});

		//点击返点减少按钮
		$(".lot_b_i_s_range .swich_sub").click(function() {
			if($(".lot_b_i_s_range .swich").hasClass("active")) {
					lotteryGme.isRenPointer = true;
					$(".swich .swich_slider").animate({
						left: "-5px" 
					}, 150, function() {
						$(this).parent(".swich").removeClass("active");
					});
				//设置返点
				$(".lot_b_i_s_range span.lot_b_i_s_i:first-child span").attr("data-type","true");
				lotteryGme.bonusModelJisuan($(".lot_b_i_intro .single_note_bonus").text());    //  计算单注奖金
			}
			var rePoint  = ($(".this_return_pointer").text().substring(0,$(".this_return_pointer").text().length-1) - 0)/100;  // 计算返点总金额
			var reTotalMoney = rePoint * ($(".total_money").text() - 0);
			$(".return_point_info").text(reTotalMoney.toFixed(4));
		});
		// 点击返点增加按钮	
		$(".lot_b_i_s_range .swich_add").click(function() {
			if(!$(".lot_b_i_s_range .swich").hasClass("active")) {
				lotteryGme.isRenPointer = false;
				$(".swich .swich_slider").animate({
					left: "+=50px"
				}, 150, function() {
					$(this).parent(".swich").addClass("active")
				});
				$(".lot_b_i_s_range span.lot_b_i_s_i:first-child span").text('0.00%').attr("data-type","false");
				lotteryGme.bonusModelJisuan($(".lot_b_i_intro .single_note_bonus").text());    //  计算单注奖金
			}
			var rePoint  = ($(".this_return_pointer").text().substring(0,$(".this_return_pointer").text().length-1) - 0)/100;  // 计算返点总金额
			var reTotalMoney = rePoint * ($(".total_money").text() - 0);
			$(".return_point_info").text(reTotalMoney.toFixed(4));
		});
		// 返点滑块上点击事件
		$(".swich_slider").click(function() {
			if($(this).parent(".swich").hasClass("active")) {
				lotteryGme.isRenPointer = true;
					$(".swich .swich_slider").animate({
						left: "-5px" 
					}, 150, function() {
						$(this).parent(".swich").removeClass("active");
					});
				$(".lot_b_i_s_range span.lot_b_i_s_i:first-child span").attr("data-type","true").text();
				lotteryGme.bonusModelJisuan($(".lot_b_i_intro .single_note_bonus").text());    //  计算单注奖金
			} else {
				lotteryGme.isRenPointer = false;
				$(this).animate({
					left: "+=50px"
				}, 150, function() {
					$(this).parent(".swich").addClass("active");
					$(".lot_b_i_s_range span.lot_b_i_s_i:first-child span").text('0.00%').attr("data-type","false");
					lotteryGme.bonusModelJisuan($(".lot_b_i_intro .single_note_bonus").text());    //  计算单注奖金
				});
			}
			var rePoint  = ($(".this_return_pointer").text().substring(0,$(".this_return_pointer").text().length-1) - 0)/100;  // 计算返点总金额
			var reTotalMoney = rePoint * ($(".total_money").text() - 0);
			$(".return_point_info").text(reTotalMoney.toFixed(4));
		});

		// 立即投注按钮点击事件
		$("body").delegate(".immediate_betting.disable", "click", function() {
			var rebate = JSON.parse(Header.rebate);
			
			if(rebate.低频彩>=0.075 || rebate.十一选五>=0.075 || rebate.时时彩>=0.075){
				lotteryGme.methodSet.popusBgInit($(".total_agent"));
			}else{
				if($(".total_money").text()>0.5||$(".lot_num_input").css("display")=="block"){
					lotteryGme.submitBet.liJiTouZhu();
				}else{
					lotteryGme.methodSet.popusBgInit($(".bet_money_set"));
				}
			}
		});
		// 直属总代弹窗关闭按钮
		$(".total_agent .popus_close").click(function(){
			$(".total_agent").css("display","none");
				$(".popus_bg").css("display","none");
		});
		// 添加号码
		$("body").delegate(".add_bet_num.disable", "click", function() {
			var rePoint  = ($(".this_return_pointer").text().substring(0,$(".this_return_pointer").text().length-1) - 0)/100;  // 计算返点总金额
			var reTotalMoney = rePoint * ($(".total_money").text() - 0);
			$(".been_num_i_2_val").text(reTotalMoney+($(".been_num_i_2_val").text()-0));
			
			if($(".lot_num_input").css("display") == "block") { // 单式输入添加号码
//				var selNum = lotteryGme.lotteryBetting.inputAddNumBetting();
				var selNum = inputBetCal.init();
				if(!selNum){
					$(".popus_input_num .popus_import_file_remind").text(lotteryGme.errorNum);
					$(".popus_input_num .popus_con span:first-child").text("选号错误 ！");
					lotteryGme.methodSet.popusBgInit($(".popus_input_num"));				
					return false;
				}
				lotteryGme.lotteryBetting.inputNumAdd(selNum);  // 添加注单
				var selnumArr = selNum.split("|");
				var rePoint  = ($(".this_return_pointer").text().substring(0,$(".this_return_pointer").text().length-1) - 0)/100;  // 计算返点总金额
				var reTotalMoney = rePoint * selnumArr.length*2;
				$(".been_num_i_2_val").text(reTotalMoney+($(".been_num_i_2_val").text()-0));
				
			} else if($(".lot_panel_3d").css("display") == "block") { //  3d 和时时彩
				lotteryGme.lotteryBetting.addNumBetting();
			} else if($(".lot_panel").css("display") == "block") { // 十一选五
				lotteryGme.lotteryBetting.addNumBetting();
			} else { // 十一选五趣味  时时彩百家   时时彩三星特殊号  时时彩大小单双
				lotteryGme.lotteryBetting.lot11sel5();
			}
		});
		// 号码栏内删除按钮
		$("body").delegate(".been_num_l_i .delete", "click", function() {
			if($(this).parent(".been_num_l_i").parent(".been_num_l").find(".been_num_l_i").length == 2) {
				$(".been_num .been_num_none").css("display", "block");
				$(".been_num_i_1_btn.chase_bet_num").removeClass("disable");
				$(".been_num_i_1_confirm.disable").removeClass("disable");
			}
			$(this).parent(".been_num_l_i").remove();
			lotteryGme.lotteryBetting.totalChange(); // 添加之后 改变返点总金额 投注总金额的值  并返回所有注单单倍金额总和
		});
		// 清空号码
		$(".been_num_i_1_btn.bet_num_clear").click(function() {
			$(".been_num .been_num_none").css("display", "block");
			$(".been_num .been_num_l .been_num_l_i:first-child").nextAll().removeClass();
			$(".been_num_i_1_btn.chase_bet_num").removeClass("disable");
			$(".been_num_i_1_confirm.disable").removeClass("disable");
			$("#been_num_i_2_val").text("0.0000");// 设置返点总金额
			lotteryGme.lotteryBetting.totalChange(); // 添加之后 改变返点总金额 投注总金额的值
		});
		//  追号投注
		$("body").delegate(".chase_bet_num.disable", "click", function() {
			$(".popus_bg").css("display", "block");
			lotteryGme.methodSet.popusBgInit($(".chase"));
			var itemFirstSel = $(".been_num .been_num_l .been_num_l_i:gt(0)");
			// 如果选号篮中玩法有不同模式  有趣味型选号时  不显示利润率追号
			if(itemFirstSel.text().indexOf("趣味") > 0) {
				$(".chase .chase_t_i:nth-child(2)").css("display", "none");
			} else if(itemFirstSel.length > 1) {
				itemFirstSel.each(function() {
					for(var i = 0; i < itemFirstSel.length; i++) {
						if($(this).find("span:first-child").text() != $(itemFirstSel[i]).find("span:first-child").text()) {
							console.log($(this).find("span:first-child").text() + "------" + $(itemFirstSel[i]).find("span:first-child").text());
							$(".chase .chase_t_i:nth-child(2)").css("display", "none");
						}
					}
				});
			} else {
				$(".chase .chase_t_i:nth-child(2)").css("display", "inline-block");
			}
		});
		// 确认投注
		$("body").delegate(".been_num_i_1_confirm.disable", "click", function() {
			var rebate = JSON.parse(Header.rebate);
			if(rebate.低频彩>=0.075 || rebate.十一选五>=0.075 || rebate.时时彩>=0.075){
				lotteryGme.methodSet.popusBgInit($(".total_agent"));
				return ;
			}
			if($(".bet_total_money_val").text()<0.5&&$(".lot_num_input").css("display")=="none"){
				lotteryGme.methodSet.popusBgInit($(".bet_money_set"));
				return false;
			}
			lotteryGme.methodSet.popusBgInit($(".popus_bet_confirm"));
			$(".popus_bet_confirm .popus_con_item:first-child").text("彩种："+$(".lot_class_name").text());
			$(".popus_bet_confirm .popus_con_item:nth-child(2)").text("付款总金额：￥"+$(".bet_total_money_val").text());
		});
		//订单确认投注
		$(".popus_bet_confirm .popus_confirm").click(function(){
			lotteryGme.submitBet.getInfo();
			$(".popus_bet_confirm").css("display","none");
			$(".popus_bg").css("display","none");
		});
		// 订单取消投注
		$(".popus_bet_confirm .popus_cancel").click(function(){
			$(".popus_bet_confirm").css("display","none");
			$(".popus_bg").css("display","none");
		}); 

		//  追号弹窗title  栏  
		$(".chase .chase_t_i").click(function() {
			lotteryGme.methodSet.chasePopus($(".chase .chase_t_i"), $(this));
		});
		// 点击生成追号计划ann
		$(".chase .chase_info_btn").click(function() {
			lotteryGme.methodSet.generateTable($(this));
		});
		// 点击追号生成的代码子项选中和不选中事件
		$("body").delegate(".chase_num_item .check_box", "click", function() {
			if($(this).hasClass("active")) {
				$(this).removeClass("active")
			} else {
				$(this).addClass("active")
			}
			lotteryGme.methodSet.chasePanelShowInfob(); // 计算追号的投注金额  追号期数  共多少注
		});
		// 点击追号投注按钮 
		$(".chase_btn.chase_confirm").click(function() {
			lotteryGme.methodSet.chaseConfirm();
		});
		// 点击追号取消按钮
		$(".chase_btn.chase_cancel").click(function() {
			lotteryGme.methodSet.chaseCancel();
			$(".chase .chase_num_l .chase_num_item").remove(); // 移除生成的代码
			$(".chase_result .chase_result_1").text("0"); // 将注数 金额 追号期数 改为0
		});
		// 窗口重置时  重新设置弹窗位置
		$(window).resize(function() {
			lotteryGme.methodSet.aLLPopusInit(); // 初始化所有弹窗  默认居中
		});

		// 下单成功关闭按钮
		$(".popus_bet_success .popus_close").click(function() {
			$('.popus_bet_success').css("display", "none");
			$('.popus_bg').css("display", "none");
		});
		// 下单失败弹窗关闭按钮
		$(".popus_money_l .popus_close").click(function() {
			$('.popus_money_l').css("display", "none");
			$('.popus_bg').css("display", "none");
		});

		//导入注单按钮点击
		$(".lot_num_input .lot_num_input_1").click(function() {
			lotteryGme.methodSet.popusBgInit($(".popus_import_file"));
		});
		// 清楚错误和重复项点击
		$(".lot_num_input_btn_dis").click(function() {
			lotteryGme.methodSet.fileRepeatInfo();
		});
		// 清除文本框
		$(".lot_num_input_btn_clear").click(function() {
			$(".lot_num_input textarea").val("");
		});
		// 点击导入注单弹窗取消按钮
		$(".popus_import_file .popus_cancel").click(function() {
			$(".popus_bg").css("display", "none");
			$(".popus_import_file").css("display", "none");
		});
		// 点击导入注单确认按钮
		$(".popus_import_file .popus_confirm").click(function() {
			var fileName = $(".popus_import_file .popus_file").val();
			var fileNameArr = fileName.split(".");
			if(fileNameArr[fileNameArr.length - 1] == "txt" || fileNameArr[fileNameArr.length - 1] == "csv") {
				lotteryGme.methodSet.getFileInfo();
			} else {
				$(".popus_import_file .popus_import_file_remind").css("display", "block");
				setTimeout(function() {
					$(".popus_import_file .popus_import_file_remind").css("display", "none");
				}, 4000);
			}
		});
		// 点击注单错误确认按钮
		$(".popus_input_num .popus_confirm").click(function() {
			$(".popus_input_num").css("display","none");
			$(".popus_bg").css("display", "none");
		});
		
		// 点击遗漏分析按钮
		$(".lottery_missing_btn").click(function() {
			window.open('/home/lotteryGmae/lotteryMissing.html');
		});
		
		// 点击个人投注记录栏
		$("body").delegate("#show_bet_record li","click",function(){
			var id = $(this).attr("data-id");
			var url = '/game/lottery/betting-record?id='+id;
			lotteryGme.allAjax.allAjaxSub(url,lotteryGme.allAjax.betRecordInfo);
		});
		
		// 任选模式下  选号面板上的多选框点击事件
		$(".radio_sel input").click(function(){
			inputBetCal.init();
			var selLen = $(".radio_sel input:checked").length;
			$(".radio_sel_i2_1").text(selLen);
			var selClass = $(".lot_menu1_ssc .lot_b_i_i.active").text();
			var selModel = $(".lot_model_3d .lot_model_i_2.active").text();
			switch (selClass){
				case "任选二":
					$(".radio_sel_i2_2").text((selLen*(selLen-1))/2);break;
				case "任选三":
					switch (selLen){
						case 5:$(".radio_sel_i2_2").text(10);break;
						case 4:$(".radio_sel_i2_2").text(4);break;
						case 3:$(".radio_sel_i2_2").text(1);break;
						case 2:$(".radio_sel_i2_2").text(0);break;
						case 1:$(".radio_sel_i2_2").text(0);break;
					}
					break;
				case "任选四":
					switch (selLen){
						case 5:$(".radio_sel_i2_2").text(5);break;
						case 4:$(".radio_sel_i2_2").text(1);break;
						case 3:$(".radio_sel_i2_2").text(0);break;
						case 2:$(".radio_sel_i2_2").text(0);break;
						case 1:$(".radio_sel_i2_2").text(0);break;
					}
					break;
			}
		});
		
		// 当前期结束提示弹窗 确认按钮
		$(".this_bet_been .popus_confirm").click(function(){
			var lotClassName = $(".lot_class_name").text();
			var url = window.location.href.split("?")[0];
			window.location.href = url+"?"+lotClassName;
		});
		// 当前期结束提示弹窗 取消按钮
		$(".this_bet_been .popus_cancel").click(function(){
			$(".this_bet_been").css("display","none");
			$(".popus_bg").css("display","none");
		});
		
		// 下注金额不能低于0.5元
		$(".bet_money_set .popus_close").click(function(){
			$(".bet_money_set").css("display","none");
			$(".popus_bg").css("display","none");
		});
		
		// 单式输入框值改变事件
		$(document).on("input propertychange",".lot_num_input textarea",function(){
			inputBetCal.init();
		});
	},

	methodSet: {

		methodItem1: function($thisSel, $obj) {
			$thisSel.removeClass("active");
			$obj.addClass("active");
		},

		changelotInfo: function() {
			var len = parseInt($(".lot_b_i_s_2 .lot_b_i_s_info").text());
			var money = $(".lot_bet_info .money_model.active").attr("data-id"); // 获取元 角 分 厘 模式
			var mu = $(".lot_b_i_s_xiala .mu_val").val();
			if(mu > 99999)
				mu = 99999;
			$(".lot_b_i_s_2 .total_money").text(len * mu * (money * 2 - 0));

		},

		getModelClass: function(data) {
			if(!data == "") {
				if(data.indexOf("?") > 0) { // 福彩3d和时时彩
					var dataArr = data.split("|");
					var _html = "";
					$.each(dataArr, function(i, item) {
						var item_html = '<li class="lot_model_i">';
						var itemArr = item.split("?");
						item_html += '<span class="lot_model_i_1">' + itemArr[0] + '</span>';
						var itemSonArr = itemArr[1].split(",");
						$.each(itemSonArr, function(i, item) {
							item_html += '<span class="lot_model_i_2">' + item + '</span>';
						});
						_html += item_html;
						_html += "</li>";
						$(".lot_model_3d").html(_html);
						$(".lot_model_3d .lot_model_i:first-child span:nth-child(2)").addClass("active");
						$(".lot_model_3d").css("display", "block");
						if($(".lot_model_3d .lot_model_i:first-child span").length == 2) {
							$(".lot_model_3d").css("display", "none");
						}
					})
				} else { //  11 选五  
					var dataArr = data.split(",");
					var _html = "";
					$.each(dataArr, function(i, item) {
						if(i == 0)
							_html += '<li class="lot_b_i_i active">' + item + '</li>';
						else
							_html += '<li class="lot_b_i_i">' + item + '</li>';
					});
					$(".lot_ball .lot_model").html(_html);
					$(".lot_ball .lot_model").css("display", "block");
					if($(".lot_model").find("li").length == 1) { // 当星数下面对应的选号类型只有一个时  不显示
						$(".lot_ball .lot_model").css("display", "none");
					}
				}
			} else {
				$(".lot_ball .lot_model").html("");
				$(".lot_ball .lot_model").css("display", "none");
			}
		},

		lotQiu: function($obj) {
			var specialT = $(".lot_model .lot_b_i_i.active").text();
			if($(".lot_model_3d").css("display") == "block")
				specialT = $(".lot_model_3d .lot_model_i_2.active").text();
			if(specialT == "前三组选胆拖" || specialT == "前二组选胆拖" || specialT == "任选二中二" || specialT == "任选三中三" || specialT == "任选四中四" || specialT == "任选五中五" || specialT == "任选六中五" || specialT == "任选七中五" || specialT == "前三组选胆拖" || specialT == "任选八中五") {
				lotteryGme.selQiuSpecial(specialT, $obj);
			}else if(specialT == "组选包胆"){
				$(".lot_b_i_i_num").removeClass("active");
				$obj.addClass("active");
			}else {
				if($obj.hasClass("active")) {
					$obj.removeClass("active");
				} else {
					$obj.addClass("active");
				}
			}
			// 当点击彩票球时   如果有边的全 大小。。 有被选中的样式 则移除该样式
			$obj.parent(".lot_b_i_i_1").next(".lot_b_i_i_1").find(".lot_b_i_i_sel").each(function() {
				$(this).removeClass("active");
			});
		},

		removeLotQiuActive: function() { // 移除彩票球所有样式
			$(".qu_wei_item").removeClass("active");
			$(".lot_b_i_i_num").removeClass("active");
			$(".lot_b_i_i_sel").removeClass("active");
			$(".lot_b_i_s_2 .lot_b_i_s_info").text("0");
			$(".lot_b_i_s_2 .return_point_info").text("0");
			$(".lot_b_i_s_2 .total_money").text("0");
			if($(".lot_num_input").css("display") == "none") { // 单式输入面板显示的时候  立即投注和添加号码按钮可点击
				$(".lot_b_i_s.immediate_betting").removeClass("disable");
				$(".lot_b_i_s.add_bet_num").removeClass("disable");
			} else {
				$(".lot_b_i_s.immediate_betting").addClass("disable");
				$(".lot_b_i_s.add_bet_num").addClass("disable");
			}
			
		},

		lotTextClick: function($obj) {
			// 如果点击的 清  按钮  则不添加样式
			$obj.parent(".lot_b_i_i_1").find(".lot_b_i_i_sel").removeClass("active");
			var id = $obj.text();
			var numObj = $obj.parent(".lot_b_i_i_1").prev();
			numObj.find(".lot_b_i_i_num").removeClass("active");
			var specialT = $(".lot_model .lot_b_i_i.active").text();
			var lot_class_name = $(".lot_class_name").text();
			switch(id) {
				case "全":
					numObj.find(".lot_b_i_i_num").addClass("active");
					lotteryGme.methodSet.lotTextSpeacil(specialT, numObj);
					$obj.addClass("active");
					break;
				case "大":
					numObj.find(".lot_b_i_i_num:gt(4)").addClass("active");
					lotteryGme.methodSet.lotTextSpeacil(specialT, numObj);
					$obj.addClass("active");
					break;
				case "小":
					numObj.find(".lot_b_i_i_num:lt(5)").addClass("active");
					lotteryGme.methodSet.lotTextSpeacil(specialT, numObj);
					$obj.addClass("active");
					break;
				case "奇":
					if(lot_class_name=="山东11选5"||lot_class_name=="广东11选5"||lot_class_name=="江西11选5"||lot_class_name=="多乐11选5"){
						numObj.find(".lot_b_i_i_num:nth-child(2n-1)").addClass("active");
					}else{
						numObj.find(".lot_b_i_i_num:nth-child(2n)").addClass("active"); 
					}
					lotteryGme.methodSet.lotTextSpeacil(specialT, numObj);
					$obj.addClass("active");
					break;
				case "偶":
					if(lot_class_name=="山东11选5"||lot_class_name=="广东11选5"||lot_class_name=="江西11选5"||lot_class_name=="多乐11选5"){
						numObj.find(".lot_b_i_i_num:nth-child(2n)").addClass("active");
					}else{
						numObj.find(".lot_b_i_i_num:nth-child(2n-1)").addClass("active");
					}
					lotteryGme.methodSet.lotTextSpeacil(specialT, numObj);
					$obj.addClass("active");
					break;
				case "清":
					break;
			}
		},
		lotTextSpeacil: function(specialT, numObj) {
			if(specialT == "前三组选胆拖" || specialT == "前二组选胆拖" || specialT == "任选二中二" || specialT == "任选三中三" || specialT == "任选四中四" || specialT == "任选五中五" || specialT == "任选六中五" || specialT == "任选七中五" || specialT == "前三组选胆拖" || specialT == "任选八中五") {
				numObj.find(".lot_b_i_i_num.active").each(function() {
					var $obj = $(this);
					numObj.parent(".lot_b_i_i").prev(".lot_b_i_i").find(".lot_b_i_i_num.active").each(function() {
						if($obj.text() == $(this).text()) {
							$(this).removeClass("active");
						}
					});
				});
			}
		},

		pageStyleInit: function() {
			$(".con_menu .con_menu_item").removeClass("active");
			$($(".con_menu .con_menu_item")[1]).addClass("active");
		},

		popusBgInit: function($this) {
			var height = document.body.scrollHeight;
			$(".popus_bg").css("height", height).css("display", "block");
			$this.css("display", "block");
		},

		chasePopus: function($faThis, $this) {
			if(!$(this).hasClass("active")) {
				$faThis.removeClass("active");
				$this.addClass("active");
				$(".chase .chase_info").css("display", "none");
				var index = $this.index(".chase .chase_t_i");
				$(".chase .chase_info_" + index).css("display", "block");

				$(".chase .chase_num_l .chase_num_item").remove(); // 移除生成的代码
				$(".chase_result .chase_result_1").text("0"); // 将注数 金额 追号期数 改为0
			}
		},
		generateTable: function($this) {
			var singleMoney = lotteryGme.lotteryBetting.totalChange();
			var n = $this.prev(".chase_the_num").val(); // 获取追号期数
			var _html = "";
			var titleText = $(".chase_title .chase_t_i.active").text();
			if(titleText == "同倍追号") {
				var mu_start = $(".chase_info_0 .start_mu_val").val(); // 获取起始倍数
				for(var i = 1; i <= n; i++) {
					_html += '<li class="chase_num_item"><span>' + i + '</span><span><span class="check_box active"></span></span><span>201705050120</span>' +
						'<span><input type="number" value="' + mu_start + '" min="0" max="99999" />倍</span><span class="chase_item_bet_ammount">￥' + (singleMoney * mu_start).toFixed(4) + '</span><span>2017-03-20 14:29:11</span></li>';
				}
				$(".chase .chase_num_l li:gt(0)").remove();
				$(".chase .chase_num_l li:first-child").after(_html);
			} else if(titleText == "翻倍追号") {
				var mu_start = $(".chase_info_2 .start_mu_val").val(); // 获取起始倍数
				var jgNum = $(".chase_jian_ge_num").val(); // 间隔多少期加倍
				var muNum = $(".chase_num_mu_val").val(); // 追号倍投的间隔倍数
				for(var i = 1; i <= n; i++) {
					_html += '<li class="chase_num_item"><span>' + i + '</span><span><span class="check_box active"></span></span><span>201705050120</span>' +
						'<span><input type="number" value="' + mu_start + '" min="0" max="99999" />倍</span>' +
						'<span class="chase_item_bet_ammount">￥' + (singleMoney * mu_start).toFixed(4) + '</span><span>2017-03-20 14:29:11</span></li>';
					if(i % jgNum == 0) // 当== 0时  表示以jgNum的长度改变值倍数值 没一次改变都是在之前的倍数基础上乘以jgNum
						mu_start = mu_start * muNum;
				}
				$(".chase .chase_num_l li:gt(0)").remove();
				$(".chase .chase_num_l li:first-child").after(_html);
			} else { // 利润率追号
				$(".chase .chase_num_l li:gt(0)").remove();
				var mu_start = $(".chase_info_1 .start_mu_val").val(); // 获取起始倍数
				var getVal = $(".chase_info_1 .chse_get_val").val(); // 最低收益率
				var _html = lotteryGme.methodSet.chaseProfit(n,mu_start,getVal);

			}

			lotteryGme.methodSet.chasePanelShowInfob(); // 计算追号的投注金额  追号期数  共多少注
		},

		// 计算收益率  获取单注奖金 获取投注总金额  第一次不中 第二次计算值需要将第一次的投注金额加载成本上 再计算
		chaseProfit: function(n, mu_start, getVal) {
			var totalBet = lotteryGme.lotteryBetting.totalChange() - 0; // 获取单倍下注总金额
			var singleBouns = $(".lot_b_i_intro .single_note_bonus").text(); // 获取当前模式单注奖金
			var _html = "";
			var changeTotalBet = 0;
			lotteryGme.totalBetNum = mu_start;
			for(var i = 0; i < n; i++) { // 收益率公式   利润除以金额 等于收益率
				if((singleBouns - totalBet) / totalBet * 100 > getVal) {
					if(i==0){
						_html = '<li class="chase_num_item"><span>' + i + '</span><span><span class="check_box active"></span></span><span>201705050120</span>' +
						'<span><input type="number" value="' + mu_start + '" min="0" max="99999" />倍</span>' +
						'<span class="chase_item_bet_ammount">￥' + (totalBet * mu_start).toFixed(4) + '</span><span>2017-03-20 14:29:11</span></li>';
						$(".chase .chase_num_l").append(_html);
						lotteryGme.methodSet.chasePanelShowInfob(); // 计算追号的投注金额  追号期数  共多少注
					}else{
						changeTotalBet = changeTotalBet+((totalBet * lotteryGme.totalBetNum).toFixed(4)-0);  // 获取所需要计算倍数的上一次的下注总金额
						var j = 1;
						lotteryGme.methodSet.CalculationProfit(singleBouns, getVal, j, changeTotalBet,mu_start,totalBet); // 使用递归计算倍数
					}
				} else {
					alert("利润率错误");
					return;
				}
			}
		},

		CalculationProfit: function(singleBouns, getVal, i, changeTotalBet,mu_start,totalBet) {
			if(i<mu_start)
				i = mu_start;
			if((i*singleBouns-(changeTotalBet+i*totalBet))/(changeTotalBet+i*totalBet)>(getVal/100)) {
				lotteryGme.totalBetNum = (lotteryGme.totalBetNum-0) + i;
				console.log(i+"-----"+(i*singleBouns-(changeTotalBet+i*totalBet))/(changeTotalBet+i*totalBet)+"====================");
				var a = mu_start;
				var sortNum = parseInt($(".chase .chase_num_l .chase_num_item:last-child span:first-child").text())+1;
				if(a<i)
					a = i;
					_html = '<li class="chase_num_item"><span>' +sortNum + '</span><span><span class="check_box active"></span></span><span>201705050120</span>' +
						'<span><input type="number" value="' + a + '" min="0" max="99999" />倍</span>' +
						'<span class="chase_item_bet_ammount">￥' + (totalBet * a).toFixed(4) + '</span><span>2017-03-20 14:29:11</span></li>';
					$(".chase .chase_num_l").append(_html);
				lotteryGme.methodSet.chasePanelShowInfob(); // 计算追号的投注金额  追号期数  共多少注
				return true;
			} else {
				i++;
				lotteryGme.methodSet.CalculationProfit(singleBouns, getVal, i, changeTotalBet,mu_start,totalBet); // 计算追号的投注金额  追号期数  共多少注
			}
		},

		chasePanelShowInfob: function() { // 计算追号的投注金额  追号期数  共多少注
			var num0 = $(".chase_num_l .chase_num_item .check_box.active").length; // 追号期数
			var num1 = num0 * $('.been_num_i_3 .been_num_i_3_val:first-child').text(); // 追号注数;
			var num2 = 0; // 投注总金额
			$(".chase_num_l .chase_num_item .check_box.active").each(function() {
				var text = $(this).parent("span").nextAll(".chase_item_bet_ammount").text();
				num2 = num2 + (text.substring(1, text.length) - 0);
			});
			$(".chase_result .chase_result_1:nth-child(1)").text(num0);
			$(".chase_result .chase_result_1:nth-child(2)").text(num1);
			$(".chase_result .chase_result_1:nth-child(3)").text(num2.toFixed(4));
		},

		chaseConfirm: function() {
			lotteryGme.methodSet.popusBgInit(); // 彩票页面弹窗的背景初始化
			$(".popus_bet_success").css("display", "block");
		},
		chaseCancel: function() {
			$(".chase").css("display", "none");
			$(".popus_bg").css("display", "none");
		},

		aLLPopusInit: function() {
			var width = parseInt($("body").css("width"));
			$(".popus").css("left", (width - parseInt($(".popus").css("width"))) / 2 + "px");
			$(".chase").css("left", (width - parseInt($(".chase").css("width"))) / 2 + "px");
			$(".game_record_popus").css("left", (width - parseInt($(".game_record_popus").css("width"))) / 2 + "px");
		},

		getFileInfo: function() {
			var files = $(".popus_import_file .popus_file").prop('files');
			if(!files.length == 0) {
				console.log(files.length + "----" + files[0]);
				var reader = new FileReader(); // 读取流
				console.log(files[0].toString());
				reader.readAsText(files[0], "UTF-8");
				reader.onload = function(evt) { //读取完文件之后会回来这里
					var fileString = evt.target.result;
					var fileString = fileString.match(/\d+/g);
					$(".lot_num_input textarea").val(fileString);
					$(".popus_bg").css("display", "none");
					$(".popus_import_file").css("display", "none");
				}
			}
		},

		fileRepeatInfo: function() {
			var fileString = $(".lot_num_input textarea").val();
			if(fileString == ""){
				return false;
			}
			var fileString = fileString.match(/\d+/g); //将字符串过滤  得到的是一个数组
			var newFileString = new Array();
			for(var i = 0; i < fileString.length; i++) { // 遍历数组 
				var item = fileString[i];
				if($.inArray(item, newFileString) == -1) { // 判断新数组中是否有该元素 如果有   不做处理  如果没有  将该元素添加到新数组中
					newFileString.push(item);
				}
			}
			$(".lot_num_input textarea").val(newFileString);
		},
	},

	lotteryBetting: {
		addNumBetting: function() {
			var text0 = $(".lot_class_name").text();
			var text1 = $(".lot_model .lot_b_i_i.active").text();
			var text2 = $(".lot_menu1 .lot_b_i_i.active").text();
			if($(".lot_menu1_ssc").css("display")=="block")
				text2 = $(".lot_menu1_ssc .lot_b_i_i.active").text();
				var rePointType = "";
				if(text0 == "福彩3D") {
					rePointType = "低频彩";
					text1 = $(".lot_model_3d .lot_model_i_2.active").text();
				} else if(text0 == "山东11选5" || text0 == "广东11选5" || text0 == "江西11选5" || text0 == "多乐11选5") {
					rePointType = "十一选五";
				} else {
					rePointType = "时时彩";
					text1 = $(".lot_model_3d .lot_model_i_2.active").text();
				}
			var betNum = lotteryGme.lotteryBetting.getSelNum();
			if((text2 == "五星"&&text1=="直选复式")||(text2 == "五星"&&text1=="直选单式")||(text2 == "五星"&&text1=="五星组合")){
					if($(".lot_b_i_s_xiala .mu_val").val()>2){
						alert(text1+"最大倍投数不能大于两倍");
						return ;
					}
				}
			var wei_arr = new Array();  // 任选模式下 提交订单需要传递位数
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});
			var _html = '<li class="been_num_l_i" data-type="'+$(".this_return_pointer").attr("data-type")+'">' +
				'<span class="been_num_l_item" data-arr="'+wei_arr.toString()+'" data-id="彩票/'+rePointType+'/' + text0 + '/' + text2 + '/' + text1 + '">' + text0 + '，' + text1 + '</span>' +
				'<span class="been_num_l_item">' + betNum + '</span><span class="been_num_l_item" data-type="' + $(".money_model.active").attr("data-id") + '">' + $(".lot_bet_info .money_model.active").text() + '</span>' +
				'<span class="been_num_l_item">' + $(".lot_b_i_s_2 .lot_b_i_s_info").text() + '注</span>' +
				'<span class="been_num_l_item">' + $(".lot_b_i_s_xiala .mu_val").val() + '倍</span>' +
				'<span class="been_num_l_item">￥' + $(".lot_b_i_s_2 .total_money").text() + '</span><span class="been_num_l_item">返点' + $(".lot_b_i_s_2 .return_point_info").text() + '</span>' +
				'<span class="been_num_l_item delete"></span></li>';
			$(".been_num .been_num_l").append(_html);
			$(".been_num .been_num_none").css("display", "none");
			$(".been_num_i_1_btn.chase_bet_num").addClass("disable");
			$(".been_num_i_1_confirm").addClass("disable");
			lotteryGme.methodSet.removeLotQiuActive(); // 移除所有彩票球 趣味 被选中的样式

			lotteryGme.lotteryBetting.totalChange(); // 添加之后 改变返点总金额 投注总金额的值
		},
		
		// 十一选五趣味型
		lot11sel5 : function(){
			var a = new Array();
			var b = new Array();
			if($(".lot_panel_3d_size").css("display") == "block"){
				$(".lot_panel_3d_size .lot_b_i_i").each(function(){
					if($(this).css("display") == "block"){
						a.push($(this).find(".lot_b_i_i_num.active").text());
						b.push($(this).find(".lot_b_i_i_num.active").text());
					}
				});
			}else{
				$(".qu_wei .qu_wei_item").each(function(){
					if($(this).hasClass("active")){
						a.push($(this).text());
						b.push(parseInt($(this).attr("data-id")));
					}
				});
			}
			var rePointType =  lotteryGme.submitBet.getThisLotGameName();
			var text0 = $(".lot_class_name").text();
			var text1 = $(".lot_model .lot_b_i_i.active").text();
			if($(".lot_model_3d").css("display") == "block"){
				text1 = $(".lot_model_3d .lot_model_i_2.active").text();
			}
			var text2 = $(".lot_menu1 .lot_b_i_i.active").text();
			var _html = '<li class="been_num_l_i">' +
				'<span class="been_num_l_item" data-id="彩票/'+rePointType+'/'+ text0 + '/' + text2 + '/' + text1 + '">' + text0 + '，' + text1 + '</span>' +
				'<span class="been_num_l_item" data-id="'+b+'">' + a + '</span><span class="been_num_l_item" data-type="' + $(".money_model.active").attr("data-id") + '">' + $(".lot_bet_info .money_model.active").text() + '</span>' +
				'<span class="been_num_l_item">' + $(".lot_b_i_s_2 .lot_b_i_s_info").text() + '注</span>' +
				'<span class="been_num_l_item">' + $(".lot_b_i_s_xiala .mu_val").val() + '倍</span>' +
				'<span class="been_num_l_item">￥' + $(".lot_b_i_s_2 .total_money").text() + '</span><span class="been_num_l_item">返点' + $(".lot_b_i_s_2 .return_point_info").text() + '</span>' +
				'<span class="been_num_l_item delete"></span></li>';
			$(".been_num .been_num_l").append(_html);
			$(".been_num .been_num_none").css("display", "none");
			$(".been_num_i_1_btn.chase_bet_num").addClass("disable");
			$(".been_num_i_1_confirm").addClass("disable");
			lotteryGme.methodSet.removeLotQiuActive(); // 移除所有彩票球 趣味 被选中的样式

			lotteryGme.lotteryBetting.totalChange(); // 添加之后 改变返点总金额 投注总金额的值
		},
		
		inputAddNumBetting: function() { //单式输入后添加号码
			var numText = $(".lot_num_input textarea").val();
//			numText = numText.replace(/\s+/g, ""); // 去除字符串中的所有空格
			numText = numText.replace(/[a-zA-Z]/g, ""); // 去除字符串中的所有字母 
			numText = numText.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\:|\"|\'|\<|\.|\>|\/|\?]/g, ""); // 去除字符串中的特殊符号
			if(numText != '') {
				var lotClass = $(".lot_class_name").text();
				if(lotClass == "福彩3D") {
					
				} else if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5") {
					var text = $(".lot_model .lot_b_i_i.active").text();
					switch(text) {
						case "前三直选单式":
							 return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 6);
							break;
						case "前三组选单式":
							return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 6);
							break;
						case "前二直选单式":
							return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 4);
							break;
						case "前二组选单式":
							return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 4);
							break;
						case "任选一中一":
							return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 2);
							break;
						case "任选二中二":
							return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 4);
							break;
						case "任选三中三":
							return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 6);
							break;
						case "任选四中四":
							return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 8);
							break;
						case "任选五中五":
							return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 10);
							break;
						case "任选六中五":
							return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 12);
							break;
						case "任选七中五":
							return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 14);
							break;
						case "任选八中五":
							return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 16);
							break;
					}
				} else {
					var lotModel = $(".lot_model_3d .lot_model_i_2.active").text();
					if ($(".lot_menu1_ssc").css("display") == "none") {  // 普选模式
						var selType =  $(".lot_menu1 .lot_b_i_i.active").text();
						switch(lotModel){
							case "直选单式": switch (selType){
								case "五星":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 5);break;
								case "四星":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 4);break;
								case "后三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 3);break;
								case "中三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 3);break;
								case "前三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 3);break;
								case "后二":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 2);break;
								case "前二":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 2);break;
							} break;
							case "组三单式": switch (selType){
								case "后三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 3);break;
								case "中三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 3);break;
								case "前三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 3);break;
							} break;
							case "组六单式": switch (selType){
								case "后三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 3);break;
								case "中三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 3);break;
								case "前三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 3);break;
							} break;
							case "混合组选": switch (selType){
								case "后三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 3);break;
								case "中三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 3);break;
								case "前三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 3);break;
							} break;
							case "组选单式": switch (selType){
								case "后二":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 2);break;
								case "前二":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, 2);break;
							} break;
						}
					} else{  // 任选模式
						var selType =  $(".lot_menu1_ssc .lot_b_i_i.active").text();
						var selLen = $(".radio_sel input:checked").length;
						switch(lotModel){
							case "直选单式": switch (selType){
								case "任选二":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, selLen);break;
								case "任选三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, selLen);break;
								case "任选四":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, selLen);break;
							} break;
							case "组三单式": switch (selType){
								case "任选三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, selLen);break;
							} break;
							case "组六单式": switch (selType){
								case "任选三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, selLen);break;
							} break;
							case "混合组选": switch (selType){
								case "任选三":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, selLen);break;
							} break;
							case "组选单式": switch (selType){
								case "任选二":return lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, selLen);break;
							} break;
						}
					}
				}
			}
		},

		inputAddNumBetting11sel5: function(numText, len) {
			var selNum = ""; // 所有号码
			lotteryGme.errorNum = '';
			 // 多层判断  首先判断是否有“，”  然后是 “；”  最后是“\n”  每一次判断后 如果为true 将字符串分隔成数组  判断是否重复  有重复的 需要去掉该组选号  
			if(numText.indexOf(",") >= 0) {
				var ntArr = numText.split(",");
				$.each(ntArr, function(i, item) {
					if(item.indexOf("；")>=0) {
						ntArr = numText.split("；");
						$.each(ntArr, function(i, item) {
							if(item.indexOf("\n") >= 0) {
								ntArr1 = numText.split("\n");
								$.each(ntArr1, function(i, item) {
									selNum += lotteryGme.lotteryBetting.stringStitching(item,len);
								});
							} else {
								selNum += lotteryGme.lotteryBetting.stringStitching(item,len);
							}
						});
					} else if(item.indexOf("\n")>=0) {
						ntArr1 = numText.split("\n");
						$.each(ntArr1, function(i, item) {
							selNum += lotteryGme.lotteryBetting.stringStitching(item,len);
						});
					} else {
						selNum += lotteryGme.lotteryBetting.stringStitching(item,len);
					}
				});
			} else if(numText.indexOf("；") >= 0) {
				ntArr = numText.split("；");
				$.each(ntArr, function(i, item) {
					if(item.indexOf("\n") >= 0) {
						ntArr1 = numText.split("\n");
						$.each(ntArr1, function(i, item) {
							selNum += lotteryGme.lotteryBetting.stringStitching(item,len);
						});
					} else {
						selNum += lotteryGme.lotteryBetting.stringStitching(item,len);
					}
				});
			} else if(numText.indexOf("\n") >= 0) {
				ntArr = numText.split("\n");
				$.each(ntArr, function(i, item) {
					selNum += lotteryGme.lotteryBetting.stringStitching(item,len);
				});
			} else { // 只输入单注的情况下
				selNum += lotteryGme.lotteryBetting.stringStitching(numText,len);
			}
			
			if(lotteryGme.errorNum == ''||lotteryGme.errorNum == ' '){
				if(selNum != ""){  // 添加注单
					selNum = selNum.substring(0,selNum.length-1);
				}else{  // 弹窗提示 选号错误
					$(".popus_input_num .popus_import_file_remind").text(lotteryGme.errorNum);
					$(".popus_input_num .popus_con span:first-child").text("已过滤错误选号 ！");
					lotteryGme.methodSet.popusBgInit($(".popus_input_num"));
					selNum = selNum.substring(0,selNum.length-1);
				}
			}else{  // 弹窗提示 选号错误
				$(".popus_input_num .popus_import_file_remind").text(lotteryGme.errorNum);
				$(".popus_input_num .popus_con span:first-child").text("选号错误 ！");
				lotteryGme.methodSet.popusBgInit($(".popus_input_num"));
				lotteryGme.methodSet.aLLPopusInit(); 
				return false;
			}
			
			return selNum;
		},

		stringStitching: function(item, len) {
			var selNum = '';
			if(lotteryGme.lotteryBetting.numberTest(item, len)) {
				selNum += lotteryGme.lotteryBetting.numberTest(item, len);
				selNum += "|";
			}
			return selNum;
		},

		numberTest: function(numText, len) {
			if(numText.length != len) { // 号码错误
				lotteryGme.errorNum += numText+" ";
			} else {
				if(lotteryGme.lotteryBetting.qudiaoRepeat(numText, 2)) { // 正确   添加到选号栏中
					return numText;
				} else { // 错误
					lotteryGme.errorNum += numText+" ";
				}
			}
		},

		qudiaoRepeat: function(text, len) { //  判断字符中是否有重复的数字
			for(var i = 0; i < text.length / len - 1; i++) {
				com = text.substring(0 + (i * len), i * len + len);
				for(var j = i + 1; j < text.length / len; j++) {
					com1 = text.substring(0 + (j * len), j * len + len);
					if(com == com1) {
						console.log(com + "==" + com1);
						return false;
					}
				}
			}
			return true;
		},

		inputNumAdd: function(numText) { // 将单式选号添加到面板中
			if(numText)
				var numTextArr = numText.split("|");
			var text0 = $(".lot_class_name ").text();
			var text1 = $(".lot_model .lot_b_i_i.active").text();
			if($(".lot_model_3d").css("display") == "block"){
				text1 = $(".lot_model_3d .lot_model_i_2.active").text();
			}
			var wei_arr = new Array();  // 任选模式下 提交订单需要传递位数
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});
			var text2 = $(".lot_menu1 .lot_b_i_i.active").text();
			var rePointType =  lotteryGme.submitBet.getThisLotGameName();
			var _html = '<li class="been_num_l_i">' +
				'<span class="been_num_l_item" data_arr="'+wei_arr.toString()+'" data-type="单式" data-id="彩票/'+rePointType+'/' + text0 + '/' + text2 + '/' + text1 + '">' + text0 + '，' + text1 + '</span>' +
				'<span class="been_num_l_item">' + numText + '</span><span class="been_num_l_item" data-type="' + $(".money_model.active").attr("data-id") + '">' + $(".lot_bet_info .money_model.active").text() + '</span>' +
				'<span class="been_num_l_item">' + numTextArr.length+ '注</span>' +
				'<span class="been_num_l_item">' + $(".lot_b_i_s_xiala .mu_val").val() + '倍</span>' +
				'<span class="been_num_l_item">￥' +numTextArr.length*2*($(".lot_bet_info .money_model.active").attr("data-id")-0)*$(".lot_b_i_s_xiala .mu_val").val() + '</span><span class="been_num_l_item">返点' + $(".lot_b_i_s_2 .return_point_info").text() + '</span>' +
				'<span class="been_num_l_item delete"></span></li>';
			$(".been_num .been_num_l").append(_html);
			$(".lot_num_input textarea").val(""); // 移除输入框中的号码
			$(".been_num .been_num_none").css("display", "none");
			$(".been_num_i_1_btn.chase_bet_num").addClass("disable");
			$(".been_num_i_1_confirm").addClass("disable");
		},
		// 获取彩票面板信息
		getSelNum: function() {
			var lotBetNum = "";
			var lotClassText = $(".lot_class_name ").text();
			if(lotClassText == "福彩3D") {

			} else if(lotClassText == "广东11选5" || lotClassText == "山东11选5" || lotClassText == "江西11选5" || lotClassText == "多乐11选5") {
				$(".lot_panel .lot_b_i_i").each(function() {
					if($(this).css("display") == "block") {
						$(this).find(".lot_b_i_i_num").each(function() {
							if($(this).hasClass("active")) {
								lotBetNum += $(this).text();
							}
						});
						lotBetNum += "|";
					}
				});
			} else { // 时时彩
				$(".lot_panel_3d .lot_b_i_i").each(function() {
					if($(this).css("display") == "block") {
						$(this).find(".lot_b_i_i_num").each(function() {
							if($(this).hasClass("active")) {
								lotBetNum += $(this).text();
							}
						});
						lotBetNum += "|";
					}
				});
			}
			lotBetNum = lotBetNum.substring(0, lotBetNum.length - 1)
			return lotBetNum;
		},

		totalChange: function() { // 添加之后 改变返点总金额 投注总金额的值  并返回所有注单单倍金额总和
			var repointToal = 0,
				betTotal = 0,
				numTotal = 0;
			var singleMoney = 0; // 获取单倍追号金额
			$(".been_num .been_num_l_i:gt(0)").each(function() {
				var text0 = $(this).find(".been_num_l_item:nth-child(6)").text();
				betTotal = betTotal + (text0.substring(1, text0.length) - 0);
				var text = $(this).find(".been_num_l_item:nth-child(7)").text();
				repointToal = repointToal + (text.substring(2, text.length) - 0);
				var text1 = $(this).find(".been_num_l_item:nth-child(4)").text();
				numTotal = numTotal + (text1.substring(0, text1.length - 1) - 0);
				var text2 = $(this).find(".been_num_l_item:nth-child(5)").text();
				singleMoney = singleMoney + ((text0.substring(1, text0.length) - 0) / (text2.substring(0, text2.length - 1) - 0))
			});
			$(".been_num_i_2 .been_num_i_2_val").text(repointToal.toFixed(4));
			$(".been_num_i_3 .been_num_i_3_val:nth-child(1)").text(numTotal);
			$(".been_num_i_3 .been_num_i_3_val:nth-child(2)").text(betTotal.toFixed(4));
			return singleMoney.toFixed(4);
		},
	},


	// 当选择胆拖时彩票球特殊处理
	selQiuSpecial: function(specialT, $obj) {
		if($obj.hasClass("active")) {
			$obj.removeClass("active");
		} else { // 胆码中只能有两个可以被选中  
			var len = lotteryGme.getShowLen(specialT);
			$obj.addClass("active");
			if($obj.parent(".lot_b_i_i_1").find(".active").length > len&&$obj.parent(".lot_b_i_i_1").prev(".lot_b_i_i_1").text()=="胆码") {
				if($obj.prevAll(".active").length > 0) {
					$($obj.prevAll(".active")[0]).removeClass("active");
				} else {
					$($obj.nextAll(".active")[0]).removeClass("active");
				}
			}
			//点击的时候 判断拖码  如果拖码中有被选中的  移除选中的
			$obj.parentsUntil(".lot_b_i_i").parent().next(".lot_b_i_i").find(".lot_b_i_i_num.active").each(function() {
				if($(this).text() == $obj.text())
					$(this).removeClass("active");
			});
			$obj.parentsUntil(".lot_b_i_i").parent().prev(".lot_b_i_i").find(".lot_b_i_i_num.active").each(function() {
				if($(this).text() == $obj.text())
					$(this).removeClass("active");
			});
		}
	},

	getShowLen: function(specialT) {
		var len = 0;
		switch(specialT) {
			case "任选二中二":
				len = 1;
				break;
			case "前二组选胆拖":
				len = 1;
				break;
			case "任选三中三":
				len = 2;
				break;
			case "任选四中四":
				len = 3;
				break;
			case "任选五中五":
				len = 4;
				break;
			case "任选六中五":
				len = 5;
				break;
			case "任选七中五":
				len = 6;
				break;
			case "任选八中五":
				len = 7;
				break;
			default:
				len = 2;
				break;
		}
		return len;
	},

	submitBet: {
		getInfo: function() { // 获取信息    确认投注
			//   type : "彩票/山东11选5/三码/前三直选复式",   传递参数的数据格式
			//	 data : "[[],[],[],]",
			$(".been_num .been_num_l .been_num_l_i:gt(0)").each(function() {
				var betNumArr = lotteryGme.submitBet.getBetNumInfo($(this));
				var isrebate = '';
				if($(this).attr("data-type")=="true")
					isrebate = true;
				var typeData = {
					"multiple": parseInt($(this).find("span:nth-child(5)").text()),
					"unit": $(this).find("span:nth-child(3)").attr("data-type") - 0,
					"isrebate":isrebate
				};
				var text0 = $(this).find("span:first-child").attr("data-id").split("/")[2];
				var text2 = $(this).find("span:first-child").attr("data-id").split("/")[3];
				var text1 = $(this).find("span:first-child").attr("data-id").split("/")[4];
				
				var betNumArr = lotteryGme.submitBet.lijitouzhuArrayConversion(text0,text1,text2,betNumArr,true,$(this)); 	//  获取的数组是二维数组  有些部分只需要传递一维数组  点击确认投注按钮
				
				if(text2=="任选二"||text2=="任选三"||text2=="任选四"){
					if(text1!="直选复式"){
						var wei_arr = $(this).find("span:first-child").attr("data-arr").split(",");
						var temp_arr = new Array();
						temp_arr.push(wei_arr);
						temp_arr.push(betNumArr);
						betNumArr = temp_arr;
					}
				}
				
				var params = {
					gametype: $(this).find("span:first-child").attr("data-id"),
					data: JSON.stringify(betNumArr),
					type: JSON.stringify(typeData)
				};
				lotteryGme.submitBet.betNumAjax(params);
			});
		},
		
		liJiTouZhu: function() { // 立即投注  
			var text0 = $(".lot_class_name").text(); // 彩票类名
			var text1 = $(".lot_model .lot_b_i_i.active").text();  // 选号类型
			if(text0 == "山东11选5" || text0 == "广东11选5" || text0 == "江西11选5" || text0 == "多乐11选5") {
			} else {
				text1 = $(".lot_model_3d .lot_model_i_2.active").text();  // 选号类型
			}		
			var text2 = $(".lot_menu1_ssc .lot_b_i_i.active").text();  //  选号才菜单 五星 四星
			if($(".lot_menu1").css("display") == "block")
				var text2 = $(".lot_menu1 .lot_b_i_i.active").text();  //  选号才菜单 五星 四星
			var isrebate = '';
			if($(".this_return_pointer").attr("data-type")=="true")
				isrebate = true;
			var typeData = {
				"multiple": parseInt($(".lot_b_i_s_xiala .mu_val").val()),
				"unit": $(".lot_bet_info .money_model.active").attr("data-id") - 0,
				"isrebate":isrebate
			};
			var rePointType =  lotteryGme.submitBet.getThisLotGameName();
			if($(".lot_num_input").css("display")=="block"){  //如果是单式投注
				lotteryGme.submitBet.lijitouzhuDanShi(text0,text1,text2,typeData);
				return ;
			}else{
				var lotBetNum = lotteryGme.submitBet.lijitouzhuGetbetNum(rePointType); //  立即投注获取面板上选中的下注号码
				
				var numCount = 0;
				if($(".lot_model .lot_b_i_i.active").text().indexOf("组选")>0&&$(".lot_model .lot_b_i_i.active").text().indexOf("胆拖")<0){
					lotBetNum = lotBetNum[0];
				}
				if((text2 == "五星"&&text1=="直选复式")||(text2 == "五星"&&text1=="直选单式")||(text2 == "五星"&&text1=="五星组合")){
					if($(".lot_b_i_s_xiala .mu_val").val()>2){
						alert(text1+"最大倍投数不能大于两倍");
						return ;
					}
				}
				var lotBetNum = lotteryGme.submitBet.lijitouzhuArrayConversion(text0,text1,text2,lotBetNum,false); 	//  获取的数组是二维数组  有些部分只需要传递一维数组  //点击立即投注按钮
				if((text2=="任选二"||text2=="任选三"||text2=="任选四")&&text1!="直选复式"){
					var wei_arr = new Array();
					var temp_arr = new Array();
					$(".radio_sel input").each(function(){
						if($(this).prop("checked")){
							var index = $(this).index(".radio_sel input");
							wei_arr.push(index);
						}
					});
					temp_arr.push(wei_arr);
					temp_arr.push(lotBetNum);
					lotBetNum = temp_arr;
				}
				var params = {
					gametype: "彩票/"+rePointType+"/" + text0 + "/" + text2 + "/" + text1,
					data: JSON.stringify(lotBetNum),
					type: JSON.stringify(typeData)
				};
				lotteryGme.submitBet.betNumAjax(params);
			}
			
		},
		lijitouzhuGetbetNum : function(rePointType){  //  立即投注获取面板上选中的下注号码
			var lotBetNum = new Array();  // 获取要下注的号码
			var betPanelSel = '';
			if(rePointType == "低频彩") {
				betPanelSel = $(".lot_panel_3d .lot_b_i_i");
			} else if(rePointType == "时时彩") {
				betPanelSel = $(".lot_panel_3d .lot_b_i_i");
			} else {
				betPanelSel = $(".lot_panel .lot_b_i_i");
			}
				betPanelSel.each(function() {
					if($(this).css("display") == "block") {
						var text = new Array();
						$(this).find(".lot_b_i_i_num").each(function() {
							if($(this).hasClass("active")) {
								text.push(parseInt($(this).text()));
							}
						});
						lotBetNum.push(text);
					}
				});
			return lotBetNum;
		},
		
		getThisLotGameName : function(){  //获取当前彩票名称
			var lotClass = $(".lot_class_name").text();
			var rePointType = "";
			if(lotClass == "福彩3D") {
				rePointType = "低频彩";
			} else if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5") {
				rePointType = "十一选五";
			} else {
				rePointType = "时时彩";
			}
			return rePointType;
		},
		
	  	lijitouzhuDanShi : function(text0,text1,text2,typeData){  // 立即投注下  单式投注
	  		var selNum = inputBetCal.init();
//	  		var selNum = lotteryGme.lotteryBetting.inputAddNumBetting();
			if(!selNum){
				$(".popus_input_num .popus_import_file_remind").text(lotteryGme.errorNum);
				$(".popus_input_num .popus_con span:first-child").text("选号错误 ！");
				lotteryGme.methodSet.popusBgInit($(".popus_input_num"));				
				return false;
			}
				var selNumArr =  selNum.split("|");
				var lotNumArr = new Array();
				var lotClassText = $(".lot_class_name ").text();
				if(lotClassText == "广东11选5" || lotClassText == "山东11选5" || lotClassText == "江西11选5" || lotClassText == "多乐11选5"){
					$.each(selNumArr, function(i,item) {
						var itemArr = new Array();
						for(var j = 0;j<selNumArr[i].length/2;j++){
							itemArr.push(selNumArr[i].substring( 2*j,2+2*j)-0);
						}
						lotNumArr.push(itemArr);
					});
				}else{
					$.each(selNumArr, function(i,item) {
						var itemArr = new Array();
						for(var j = 0;j<selNumArr[i].length/1;j++){
							itemArr.push(selNumArr[i].substring( j,1+j)-0);
						}
						lotNumArr.push(itemArr);
					});
				}
				var rePointType =  lotteryGme.submitBet.getThisLotGameName();
				if(text2=="任选二"||text2=="任选三"||text2=="任选四"){
					var wei_arr = new Array();
					var temp_arr = new Array();
					$(".radio_sel input").each(function(){
						if($(this).prop("checked")){
							var index = $(this).index(".radio_sel input");
							wei_arr.push(index);
						}
					});
					temp_arr.push(wei_arr);
					temp_arr.push(lotNumArr);
					lotNumArr = temp_arr;
				}
				var params = {
					gametype: "彩票/"+rePointType+"/" + text0 + "/" + text2 + "/" + text1,
					data: JSON.stringify(lotNumArr),
					type: JSON.stringify(typeData)
				}; 
				lotteryGme.submitBet.betNumAjax(params);
	  	},  
		lijitouzhuArrayConversion : function(text0,text1,text2,lotBetNum,boolean,$obj){  //  立即投注下    获取的数组是二维数组  有些部分只需要传递一维数组
			if(text0.indexOf("11选5")>0 && text2=="不定位") 
					lotBetNum = lotBetNum[0];
				else if(text0.indexOf("11选5")>0 && text2=="趣味型" && text1 == "趣味_定单双"){
					var a = new Array();
					if(boolean){
						var b = $obj.find(".been_num_l_item:nth-child(2)").attr("data-id").split(",");  // 确认投注情况下 
						$.each(b,function(i,item){
							a.push(item);
						});
					}else{
						$(".qu_wei .qu_wei_item").each(function(){ // 立即投注情况下 
							if($(this).hasClass("active"))
								a.push(parseInt($(this).attr("data-id")));
						});
					} 
					lotBetNum = a;
				}else if(text0.indexOf("11选5")>0 && text2=="趣味型" && text1 == "趣味_猜中位"){
					lotBetNum = lotBetNum[0];
				}else if(text0.indexOf("11选5")>0 && text2=="任选复式"){
					lotBetNum = lotBetNum[0];
				}else if(text1 == "一帆风顺" || text1 == "好事成双" || text1 == "三星报喜" || text1 == "四季发财"){
					lotBetNum = lotBetNum[0];
				}
			return lotBetNum;
		},
		

		getBetNumInfo: function($obj) {
			var betNum = $obj.find("span:nth-child(2)").text();
			var betNumArr = new Array();
			var betNumArrC = new Array();
			if(betNum.indexOf("|")>0)
				betNumArrC = betNum.split("|");
			else 
				betNumArrC = betNum.split(",");
			var lotClassText = $(".lot_class_name ").text();
			if(lotClassText == "广东11选5" || lotClassText == "山东11选5" || lotClassText == "江西11选5" || lotClassText == "多乐11选5"){
				$.each(betNumArrC, function(i, item) {
					var numArr = new Array();
					for(var j = 1; j <= item.length; j++) {
						if(j % 2 == 0) {
							numArr.push(parseInt(item.substring(j - 2, j)));
						}
					}
					betNumArr.push(numArr);
				});
			}else{
				if(betNum.indexOf("|")>0){
					$.each(betNumArrC, function(i, item) {
						var numArr = new Array();
						for(var j = 1; j <= item.length; j++) {
							numArr.push(parseInt(item.substring(j - 1, j)));
						}
						betNumArr.push(numArr);
					});
				}else{
					$.each(betNumArrC, function(i, item) {
						betNumArr.push(item);
					});
				}
			}
			var numCount = 0;
			var typeText = $obj.find("span:nth-child(1)").text();
			if($obj.find("span:nth-child(1)").text().indexOf("组选")>0&&typeText.indexOf("胆拖")<0&&typeText.indexOf("前三组选单式")<0&&typeText.indexOf("前二组选单式")<0){  // 如果下单是复式 需要多传递一个参数
				betNumArr = betNumArr[0];
			}
			return betNumArr;
		},

		betNumAjax: function(params) {
			console.log(params);
			$.ajax({
				type: 'POST',
				url: "/game/lottery/betting",
				dataType: "json",
				data: params,
				success: function(data) {
					console.log(data);
					if(data.code=="error"){
						$(".popus_money_l .poput_text").text("下注失败！");
						lotteryGme.methodSet.popusBgInit($(".popus_money_l"));
						return false;
					}
					
					lotteryGme.methodSet.removeLotQiuActive(); // 移除所有彩票球 趣味 被选中的样式  同时修改面板的下注信息
					$(".been_num .been_num_l .been_num_l_i:gt(0)").remove(); // 清空号码篮的号码
					lotteryGme.methodSet.popusBgInit($(".popus_bet_success"));
					$(".been_num_i_1_confirm").removeClass("disable"); 
					$(".chase_bet_num").removeClass("disable"); 
					$("#been_num_i_2_val").text("0.0000");// 设置返点总金额
					$(".been_num_i_3 span.been_num_i_3_val:first-child").text("0");
					$(".bet_total_money_val").text("0.0000");
				},
				error: function(e) {
					console.log(e);
				} 
			});
		},
	},
	
	allAjax : {
		initAjax : function(){
			
			lotteryGme.allAjax.personBetRecordAjax();  // 游戏个人记录

			lotteryGme.allAjax.gamelotteryRecordAjax();  // 游戏历史记录
			
			
			
			lotteryGme.allAjax.getFirstLotteryNum(); // 刚开始进入网站时  先获取当前期的开奖号码
			
			lotteryGme.allAjax.getLotteryNum(); // 获取开奖期号
			
			lotteryGme.allAjax.getLotteryThisNum();  // 获取开奖信息
			
			
		},
		
		personBetRecordAjax : function(){   //  个人投注记录
			var lotClass = $(".lot_class_name").text();
				var rePointType = "";
				if(lotClass == "福彩3D") {
					rePointType = "低频彩";
				} else if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5") {
					rePointType = "十一选五";
				} else {
					rePointType = "时时彩";
				}
			var data = {info:'{"gametype":"彩票"}'};
			$.ajaxSetup({ cache: false }); 
			$.ajax({
				type: 'GET',
				url: "/game/lottery/betting-records?date="+(new Date()).getTime(),
				data:data,
				dataType: "json",
				cache:false,
				success: function(data) { 
					lotteryGme.allAjax.personBetRecordPro(data);
				},
				error: function(e) {
					console.log(e);
				}
			});
			setTimeout("lotteryGme.allAjax.personBetRecordAjax()",5000);
		},
		
		// 游戏开奖记录 
		gamelotteryRecordAjax : function(){
			var lotClass = $(".lot_class_name").text();
				var rePointType = "";
				if(lotClass == "福彩3D") {
					rePointType = "低频彩";
				} else if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5") {
					rePointType = "十一选五";
				} else {
					rePointType = "时时彩";
				}
			var url = Header.ajaxUrl+"/WebService.asmx/Json_GetLotteryHistroyInfo";
			var data = {Count:"24",LotteryId:"1"};
			lotteryGme.allAjax.allAjaxSub(url,data,lotteryGme.allAjax.gamelotteryRecordPro);
			setTimeout("lotteryGme.allAjax.gamelotteryRecordAjax()",5000);
		},
		
		
		getFirstLotteryNum : function(){
			var lotClass = $(".lot_class_name").text();
				var rePointType = "";
				if(lotClass == "福彩3D") {
					rePointType = "低频彩";
				} else if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5") {
					rePointType = "十一选五";
				} else {
					rePointType = "时时彩";
				}	
			var url = '/game/lottery/game-last-opened-result?gametype=彩票/'+rePointType+"/"+$(".lot_class_name").text();
			lotteryGme.allAjax.allAjaxSub(url,lotteryGme.allAjax.getFirstLotteryNumPro);
		},
		
		getLotteryNum : function(){
			var lotClass = $(".lot_class_name").text();
				var rePointType = "";
				if(lotClass == "福彩3D") {
					rePointType = "低频彩";
				} else if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5") {
					rePointType = "十一选五";
				} else {
					rePointType = "时时彩";
				}	
			var url = '/game/lottery/game-last-unopen-result?gametype=彩票/'+rePointType+"/"+$(".lot_class_name").text();
			lotteryGme.allAjax.allAjaxSub(url,lotteryGme.allAjax.getLotteryPro);
		},
		
		getLotteryThisNum : function(){
			var lotClass = $(".lot_class_name").text();
				var rePointType = "";
				if(lotClass == "福彩3D") {
					rePointType = "低频彩";
				} else if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5") {
					rePointType = "十一选五";
				} else {
					rePointType = "时时彩";
				}	
			var url = '/game/lottery/game-last-opened-result?gametype=彩票/'+rePointType+"/"+$(".lot_class_name").text();
			lotteryGme.allAjax.allAjaxSub(url,lotteryGme.allAjax.getLotteryThisNumPro);
		},
		
		
		allAjaxSub : function(urlString,data,method){
			$.ajaxSetup({ cache: false }); 
			$.ajax({
				type: 'POST',
				url: urlString,
				dataType: "xml",
				data:data,
				success: function(data) { 
					method(data);
				},
				error: function(e) {
					console.log(e);
				}
			});
		},
		
		
		gamelotteryRecordPro : function(data){
			data = JSON.parse($(data).find("string").text());
			console.log(data);
			var _html = '';
			var new_lot_num = new Array();
			$.each(data, function(i,item) {
				var lotNum = item.OpenCode;
				var lotNumArr = lotNum.split(",");
				var numLot  = "";
				var lotClass = $(".lot_class_name").text(); // 如果是十一选五时  号码做处理
				if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5"){
					$.each(lotNumArr, function(i,item){
						if(item.length == 1)
							numLot += "0" + item+",";
						else
							numLot += item + ",";
					});
				}else{
					$.each(lotNumArr, function(i,item){
							numLot += item + " ";
					});
				}
				_html += '<li class="lot_rec_item"><span>'+item.Expect+'</span><span>'+numLot.substring(0,numLot.length-1)+'</span></li>';
			});
			$(".lot_rec_list").html(_html);
			
			new_lot_num = data[0].OpenCode.split(",");
			$(".ui-input").val(new_lot_num[0]+" "+new_lot_num[1]+" "+new_lot_num[2]+" "+new_lot_num[3]+" "+new_lot_num[4]).trigger("click");
		},
		
		personBetRecordPro : function(data){   //  个人投注记录
			var _html = '';
			$.each(data, function(i,item) {
				var lotArr = item.gametype.split("/");
				var lotNum = '';
				var new_lot_num = "";
				if(item.result){
					lotNum = item.result.substring(1,item.result.length-1).split(",");
					$.each(lotNum, function(i,item) {
					if(item.length == 1)
						item = "0" + item;
					new_lot_num += item+","; 
				});
				}else{
					new_lot_num = "------";
				}
				var deltaileNum = deltaileNum =  item.detail.replace(/\[/g, '').replace(/\]/g, '');
				if(item.gametype.indexOf("趣味_定单双")>0){
					deltaileNum = lotteryGme.allAjax.teshuBetNum(deltaileNum,"趣味_定单双");
				}
				_html += '<li class="bet_table_item" data-id="'+item.id+'"><span>' + lotArr[2] + '</span><span>' + item.issuenumber + '</span><span>' + lotArr[3] + '</span><span>1880</span><span>' + deltaileNum + '</span>' +
					'<span>￥'+item.betmoney+'</span><span>'+new_lot_num.substring(0,new_lot_num.length-1)+'</span><span>' + item.state + '</span><span>￥'+item.winmoney.toFixed(4)+'</span><span>查看</span></li>';
			});
			$(".bet_rec .table #show_bet_record").html(_html);
		},
		
		
		
		betRecordInfo : function(data){
			console.log(data);
			var gameTArr = data.gametype.split("/");
			var issNumber = data.issuenumber.replace(/\-/g,"");
			var tstr = (new Date( data.time));  // 时区转换  依赖js   Date.prototype.format    /   main.js
			var time = tstr.format("yyyy-MM-dd hh:mm:ss");
			var bettype = JSON.parse(data.type);
			var betdetail = data.detail.replace(/\[/g,"").replace(/\],/g,"|").replace(/\]/g,"");
			var lot_num = ""; // 开奖号码
			if(data.result)
				lot_num = data.result.replace(/\[/g,"").replace(/\]/g,"");
			if(data.gametype.indexOf("趣味_定单双")>0){
					betdetail = lotteryGme.allAjax.teshuBetNum(betdetail,"趣味_定单双");
				}
			var _html = '<li class="g_r_p_i"><span class="g_r_p_key">会员名 :</span><span class="g_r_p_val">'+data.memberid+'</span></li>'+
			'<li class="g_r_p_i"><span class="g_r_p_key">游戏名称 :</span><span class="g_r_p_val">'+gameTArr[2]+'</span></li>'+
			'<li class="g_r_p_i"><span class="g_r_p_key">游戏模式 :</span><span class="g_r_p_val">'+gameTArr[3]+"/"+gameTArr[4]+'</span></li>'+
			'<li class="g_r_p_i"><span class="g_r_p_key">下注期号 :</span><span class="g_r_p_val">'+issNumber+'</span></li>'+
			'<li class="g_r_p_i"><span class="g_r_p_key">下单时间 :</span><span class="g_r_p_val">'+time+'</span></li>'+
			'<li class="g_r_p_i"><span class="g_r_p_key">下单注数 :</span><span class="g_r_p_val">'+data.betcount+'</span></li>'+
			'<li class="g_r_p_i"><span class="g_r_p_key">下单倍数 :</span><span class="g_r_p_val">'+bettype.multiple+'</span></li>'+
			'<li class="g_r_p_i"><span class="g_r_p_key">下单金额 :</span><span class="g_r_p_val">￥'+data.betmoney+'</span></li>'+
			'<li class="g_r_p_i"><span class="g_r_p_key">状态 :</span><span class="g_r_p_val">'+data.state+'</span></li>'+
			'<li class="g_r_p_i"><span class="g_r_p_key">开奖号码 :</span><span class="g_r_p_val">'+lot_num+'</span></li>'+
			'<li class="g_r_p_i"><span class="g_r_p_key">中奖金额 :</span><span class="g_r_p_val">'+data.winmoney+'</span></li>'+
			'<li class="g_r_p_i"><span class="g_r_p_key">中奖注数 :</span><span class="g_r_p_val">'+data.wincount+'</span></li>'+
			'<li class="g_r_p_i" style="width:100%;"><span class="g_r_p_key" style="width:15%;">下注号码 :</span><span class="g_r_p_val">'+betdetail+'</span></li>';
			$(".game_record_popus .g_r_p_l").html(_html);
			lotteryGme.methodSet.popusBgInit($(".game_record_popus"));
		},
	
		getLotteryPro : function(data){
			if(data){
				lotteryGme.lotteryTime = data.date;
				lotteryGme.lotNum = data.issue;
			}
		},
		
		getFirstLotteryNumPro : function(data){  // 如果是刚进入网站 直接获取开奖号码  不做处理显示在页面上  
			if(!data)
				return;
			var lot_num = data.detail.replace(/\[/g,"").replace(/\]/g,"").split(",");
			var new_lot_num = new Array();
			var lotClass = $(".lot_class_name").text(); // 如果是十一选五时  号码做处理
			if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5"){
				$.each(lot_num, function(i,item) {
					if(item.length == 1)
						item = "0" + item;
					new_lot_num.push(item);  
				});
			}else{
				$.each(lot_num, function(i,item) {
					new_lot_num.push(item); 
				});
			}
			if(lotClass == "福彩3D"){
				window.numbers = new_lot_num[0]+" "+new_lot_num[1]+" "+new_lot_num[2];
			 	S.init();
			}else{
				window.numbers = new_lot_num[0]+" "+new_lot_num[1]+" "+new_lot_num[2]+" "+new_lot_num[3]+" "+new_lot_num[4];
			 	S.init();
			 }
		},
		
		getLotteryThisNumPro : function(data){
			if(!data)
				return;
			var lot_num = data.detail.replace(/\[/g,"").replace(/\]/g,"").split(",");
			var new_lot_num = new Array();
			var lotClass = $(".lot_class_name").text(); // 如果是十一选五时  号码做处理
			if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5"){
				$.each(lot_num, function(i,item) {
					if(item.length == 1)
						item = "0" + item;
					new_lot_num.push(item); 
				});
			}else{
				$.each(lot_num, function(i,item) {
					new_lot_num.push(item); 
				});
			}
			if(data.date == lotteryGme.lotteryTime&&data.issue == lotteryGme.lotNum){
				document.getElementById("audio_lot").play();
				if(lotClass == "福彩3D"){
					$(".ui-input").val(new_lot_num[0]+" "+new_lot_num[1]+" "+new_lot_num[2]).trigger("click");
				}else{
					$(".ui-input").val(new_lot_num[0]+" "+new_lot_num[1]+" "+new_lot_num[2]+" "+new_lot_num[3]+" "+new_lot_num[4]).trigger("click");
			 	}
				setTimeout(function(){  
					lotteryGme.allAjax.getLotteryNum(); // 获取开奖期号
					lotteryGme.allAjax.getLotteryThisNum();  // 获取开奖信息
				},5000);
				// 当前期已过提示弹窗
				$(".this_bet_been .popus_con_item:first-child").text(data.issue+"期结束，是否要清空号码篮内容？");
				lotteryGme.methodSet.popusBgInit($(".this_bet_been"));
				
			}else{
				setTimeout(function(){
					lotteryGme.allAjax.getLotteryThisNum();  // 获取开奖信息
				},5000);
			}
		},
		
		
		//  趣味型 特殊号码的时候 显示时做处理  如：  十一选五 趣味 返回的是数字 显示时换成文字
		teshuBetNum : function(t1,t2){
			if(t2=="趣味_定单双"){
				var t1_arr = t1.split(",");
				var text = "";
				$.each(t1_arr, function(i,item) {
					var val = parseInt(item);
					switch (val){
						case 5: text += "5单0双|";
							break;
						case 4: text += "4单1双|";
							break;
						case 3: text += "3单2双|";
							break;
						case 2: text += "2单3双|";
							break;
						case 1: text += "1单4双|";
							break;
						case 0: text += "0单5双|";
							break;
					}
				});
				return text.substring(0,text.length-1);
			}
			
		},
		
	}
};
lotteryGme.init();

Date.prototype.format = function(format) {
	var date = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S+": this.getMilliseconds()
	};
	if(/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for(var k in date) {
		if(new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
				date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
}