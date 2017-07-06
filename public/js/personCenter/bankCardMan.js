var bankCardMan = {
	init : function(){
		this.addEvent();
		this.method.pageStyleInit();   // 页面公用部分的样式修改  对应到彩票页面  如 header 菜单 // header  菜单初始化
	},
	
	addEvent : function(){
		// 绑定银行卡按钮点击事件
		$(".bc_btn_card").click(function(){
			bankCardMan.method.popusBgInit($(".add_bank_card"));
		});
		
		// 绑定银行卡弹窗提交按钮点击事件
		$(".bc_btn_card_submit").click(function(){
			bankCardMan.method.hiddenPopus();
			alert("绑定成功");
		});
		
		// 绑定银行卡弹窗取消按钮
		$(".bc_btn_card_cancel").click(function(){
			bankCardMan.method.hiddenPopus();
		});
		
		// 点击锁定银行卡 
		$(".bc_btn_lock").click(function(){
			bankCardMan.method.popusBgInit($(".popus_bet_confirm"));
		});
		
		//锁定银行卡确认按钮点击
		$(".popus_confirm").click(function(){
			bankCardMan.method.hiddenPopus();
			alert("已成功锁定银行卡");
		});
		
		// 锁定银行卡取消按钮
		$(".popus_cancel").click(function(){
			bankCardMan.method.hiddenPopus();
		});
	},
	
	method : {
		pageStyleInit : function(){
			$(".con_menu .con_menu_item").removeClass("active");
			$($(".con_menu .con_menu_item")[2]).addClass("active");
		},
		popusBgInit : function($this){
			var height = document.body.scrollHeight;
			$(".popus").css({height:height,display:"block"});
			$this.css("display","block");
		},
		hiddenPopus : function(){
			$(".add_bank_card").css("display","none");
			$(".popus").css("display","none");
			$(".popus_bet_confirm").css("display","none");
		},
	
		
	
	},
};
bankCardMan.init();
