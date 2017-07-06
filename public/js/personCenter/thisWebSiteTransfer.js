var thisWebSiteTransfer = {
	init : function(){
		this.addEvent();
	},
	
	addEvent : function(){
		$(".mod_login_pwd_btn").click(function(){
			if(parseInt($(".new_login_pwd").val())>parseInt($(".user_money").text())){
				alert("您的金额不足！");
				return false;
			}
			if($(".new_login_pwd").val()<0||$(".new_login_pwd").val()=="")
				return false;
			var params = {
				"toid":$(".login_pwd").val(),
				"money":$(".new_login_pwd").val()-0,
				"password":$(".confirm_login_pwd").val(),
				"comment":$(".comment_textarea").val()
			};
			console.log(params);
			$.ajax({
				type: 'POST',
				url: "/user/in-site-transfer",
				dataType: "json",
				data:params,
				cache:false,
				success: function(data) { 
					console.log(data);
					if(data.code == "error")
						alert(data.data);
					else{
						alert(data.data);
					}
				},
				error: function(e) {
					console.log(e);
				}
			});
		});
	},
};
thisWebSiteTransfer.init();
