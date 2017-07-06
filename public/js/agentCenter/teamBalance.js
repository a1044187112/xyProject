var teamBalance = {
	ajaxInfo : function(){
		var url = "/user/team-balance";
		teamBalance.ajaxAll(url, teamBalance.ajaxInfopro);
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
	
	ajaxInfopro : function(data){
		console.log(data);
//		var data = JSON.parse(data); 
		$(".ac_tb_list .ac_tb_item:nth-child(1)").text("会员登录名："+data[0].id);
		$(".ac_tb_list .ac_tb_item:nth-child(2)").text("昵称："+data[0].nickname);
		$(".ac_tb_list .ac_tb_item:nth-child(3)").text("当前团余额："+data[0].totalmoney.toFixed(4)+"  RMB");
	},
};
teamBalance.ajaxInfo();
