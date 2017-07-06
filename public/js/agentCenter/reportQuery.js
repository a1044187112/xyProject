var reportQuery = {
	init: function() {
		this.addEvent();
		reportQuery.ajaxSubInfo();
	},

	addEvent: function() {

		//   团队报表 分红报表菜单切换
		$(".dm_second_menu .dm_s_m_i").click(function() {
			if(!$(this).hasClass("active")) {
				$(".dm_second_menu .dm_s_m_i").removeClass("active");
				var index = $(this).addClass("active").index(".dm_second_menu .dm_s_m_i");
				console.log(index);
				switch(index) {
					case 0:
						$(".ac .team").css("display", "block");
						$(".ac .dividends").css("display", "none");
						break;
					case 1:
						$(".ac .team").css("display", "none");
						$(".ac .dividends").css("display", "block");
						break;
				}
			}
		});
		
		$(".ac_require_btn").click(function(){
			reportQuery.ajaxSubInfo();
		});
		$(document).keydown(function(e){
			 if(e.keyCode == 13){
			 	$(".ac_require_btn").trigger("click");
			 }
		});
	},

	ajaxSubInfo: function() {
		var bdate = $("#date1").val();
		var edate = $("#date2").val();
		var memberid = $("member_id").val();
		if(!memberid)
			memberid = null;
		var url = '/user/get-reports?info={"bdate":"' + bdate + '","edate":"' + edate + '","memberid":'+memberid+'}';
		reportQuery.ajaxAll(url, reportQuery.dataAjaxPro);
	},

	ajaxAll: function(urlString, method) {
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

	
	dataAjaxPro : function(data) {
		if(!data)
			return;
		//  用户余额   充值金额  提现金额  消费量  中奖金额  返点金额  活动金额   盈亏
		var userMoney = remoney = tixianmoney = netmoney = bounsmoney = repointmoney = acmoney = totalisin =  0;
		var _html = '';
		$.each(data, function(i,item) {
			userMoney = (userMoney-0) + (item.money-0);
			var isWin = (item.奖金派发-0)+(item.投注扣款)+(item.游戏返点-0)+(item.活动-0);
			totalisin = (isWin-0) + totalisin;
			remoney = (remoney-0) + (item.充值-0);
			tixianmoney = (tixianmoney-0) + (item.提现-0);
			bounsmoney = (bounsmoney-0) + (item.奖金派发-0);
			repointmoney = (repointmoney-0) + (item.游戏返点-0);
			acmoney = (acmoney-0) + (item.活动-0);
			if(item.投注扣款<0)
				var betTotal = 0-item.投注扣款;
			netmoney = (netmoney-0) + (betTotal-0);
			_html += '<tr class="table_item"><td>'+item.memberid+'</td><td>'+item.money.toFixed(4)+'</td><td>￥'+item.充值+'</td><td>￥'+item.提现+'</td><td>￥'+betTotal.toFixed(4)+'</td><td>￥'+(item.奖金派发-0).toFixed(4)+'</td>'+
					'<td>￥'+(item.游戏返点-0).toFixed(4)+'</td><td>￥'+item.活动+'</td><td>￥'+isWin.toFixed(4)+'</td></tr>';
					
		});
		$("#team_table .table_item").remove();
		$("#team_table tr:first-child").after(_html);
		
		$('#team_table tr:last-child td:nth-child(2)').text("￥"+userMoney.toFixed(4));
		$('#team_table tr:last-child td:nth-child(3)').text("￥"+remoney);
		$('#team_table tr:last-child td:nth-child(4)').text("￥"+tixianmoney);
		$('#team_table tr:last-child td:nth-child(5)').text("￥"+netmoney.toFixed(4));
		$('#team_table tr:last-child td:nth-child(6)').text("￥"+bounsmoney.toFixed(4));
		$('#team_table tr:last-child td:nth-child(7)').text("￥"+repointmoney.toFixed(4));
		$('#team_table tr:last-child td:nth-child(8)').text("￥"+acmoney);
		$('#team_table tr:last-child td:nth-child(9)').text("￥"+totalisin.toFixed(4));
		
	},
};
reportQuery.init();