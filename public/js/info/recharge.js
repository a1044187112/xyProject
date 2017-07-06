var recharge = {
	init : function(){
		this.addEvent();
	},
	
	addEvent : function(){
		$(".dm_second_menu .dm_s_m_i").click(function(){
			$(".dm_second_menu .dm_s_m_i").removeClass("active");
			$(this).addClass("active");
			var index = $(this).index(".dm_second_menu .dm_s_m_i"); 
			switch (index){
				case 0:
					$(".bank_card_online_pay").css("display","block");
					$(".bank_card_transfer").css("display","none");
					$(".bank_card_online_pay_2").css("display","none");
					break;
				case 1:
					$(".bank_card_online_pay").css("display","none");
					$(".bank_card_transfer").css("display","block");
					$(".bank_card_online_pay_2").css("display","none");
					break;
				case 2:
					$(".bank_card_online_pay").css("display","none");
					$(".bank_card_transfer").css("display","none");
					$(".bank_card_online_pay_2").css("display","block");
					break;
			}
		});
		
		// 选择充值银行
		$(".b_c_o_p_list .b_c_o_p_i").click(function(){
			$(".b_c_o_p_list .b_c_o_p_i input").prop('checked', 'false');
			$(this).find("input").prop('checked', 'true');
		});
	},
};
recharge.init();
