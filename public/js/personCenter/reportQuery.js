var reportQuery = {
	init : function(){
		this.addEvent();
		reportQuery.dataAjax();
	},
	addEvent : function(){
		$(".dm_second_menu .dm_s_m_i").click(function(){
			if(!$(this).hasClass("active")){
				$(".dm_second_menu .dm_s_m_i").removeClass("active");
				$(this).addClass("active");
				var index = $(this).index(".dm_second_menu .dm_s_m_i");
				$(".team_list").css("display","none");
				if(index == 0){
					$(".team_total_list").css("display","block");
				}else if(index == 1){
					$(".team_lot_list").css("display","block");
				}else{
					$(".team_game_list").css("display","block");
				}
			}
		});
		
		$(".data_require").click(function(){
			reportQuery.dataAjax();
		});
		
		$(document).keydown(function(e){
			 if(e.keyCode == 13){
			 	$(".data_require").trigger("click");
			 }
		});
		
	},
	
	dataAjax : function(){
		var type = $(".dm_second_menu .active").text();
		if(type=="总览")
			type = "null";
		else if(type=="彩票类")
			type = '"%bet%"';
		else
			type = ""; 
		var bdate = $("#date1").val();
		var edate = $("#date2").val();
		var url = '/user/get-report?info={"type":'+type+',"bdate":"'+bdate+'","edate":"'+edate+'"}';
		console.log(url);
		reportQuery.ajaxAll(url,reportQuery.dataAjaxPro);
	},
	
	ajaxAll: function(urlString,method) {
		$.ajax({
			type: 'GET',
			url: urlString,
			dataType: "json",
			success: function(data) {
				method(data);
			},
			error: function(e) {
				console.log(e);
			}
		});
	},
	
	dataAjaxPro : function(data){
		if(!data)
			return ;
		var isWin = (data.投注扣款-0)+(data.奖金派发-0)+(data.游戏返点-0)+(data.活动-0);
		if(data.投注扣款<0)
			data.投注扣款 = -data.投注扣款;
		var _html = '<li class="team_total_item"><span>用户名</span><span class="t_t_i_val">'+data.memberid+'</span></li>'+0.
				'<li class="team_total_item"><span>用户余额</span><span class="t_t_i_val">￥0</span></li>'+
				'<li class="team_total_item"><span>充值金额：</span><span class="t_t_i_val">￥'+data.充值+'</span></li>'+
				'<li class="team_total_item"><span>提现金额：</span><span class="t_t_i_val">￥'+data.提现+'</span></li>'+
				'<li class="team_total_item"><span>消费量：</span><span class="t_t_i_val">￥'+data.投注扣款+'</span></li>'+
				'<li class="team_total_item"><span>中奖：</span><span class="t_t_i_val">￥'+data.奖金派发+'</span></li>'+
				'<li class="team_total_item"><span>返点：</span><span class="t_t_i_val">￥'+data.游戏返点+'</span></li>'+
				'<li class="team_total_item"><span>活动：</span><span class="t_t_i_val">￥'+data.活动+'</span></li>'+
				'<li class="team_total_item"><span>盈亏：</span><span class="t_t_i_val">￥'+isWin.toFixed(4)+'</span><span>盈亏=中奖+返点+活动-投注</span></li>';
		$(".team_list").each(function(){
			if($(this).css("display"),"block")
				$(this).html(_html);
		});
	},
};
reportQuery.init();
