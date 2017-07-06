var dataMan = {
	init : function(){
		this.addEvent();
		dataMan.method.pageStyleInit();   // 页面公用部分的样式修改  对应到彩票页面  如 header 菜单 // header  菜单初始化
	},
	
	addEvent : function(){
		// 菜单点击事件
		$(".dm_container .dm_s_m_i").click(function(){
			if(!$(this).hasClass("active")){
				dataMan.method.setActive($(".dm_container .dm_s_m_i"),$(this));
			}
		});
		// 登录密码确认修改按钮
		$(".dm_container .mod_login_pwd_btn").click(function(){
			var data = dataMan.method.pwdVerIsTrue($(".mod_login_pwd .login_pwd"),$(".mod_login_pwd .new_login_pwd"),$(".mod_login_pwd .confirm_login_pwd"),$(this));
		});http://119.23.148.157:8080/home/personCenter/DataManagement.html
		
		// 修改资金密码确认修改按钮
		$(".dm_container .mod_fund_pwd_btn").click(function(){
			var data = dataMan.method.pwdVerIsTrue($(".mod_fund_pwd .login_pwd"),$(".mod_fund_pwd .new_login_pwd"),$(".mod_fund_pwd .confirm_login_pwd"),$(this));
		});
		
		// 第二个输入框获取焦点 和 失去焦点事件
		$(".mod_pwd .mod_login_pwd_i:nth-child(2) input").focus(function(){
			$(this).next(".new_pwd_mod").css("display","inline-block");
		}).blur(function(){
			$(this).next(".new_pwd_mod").css("display","none");
		});
		
	},
	
	method : {
		
		pageStyleInit : function(){
			$(".con_menu .con_menu_item").removeClass("active");
			$($(".con_menu .con_menu_item")[2]).addClass("active");
		},
		
		setActive : function($faSel,$obj){
			$faSel.removeClass("active");
			$obj.addClass("active");
			var index = $obj.index(".dm_container .dm_s_m_i");
				if(index == 0){
					$(".dm_container .mod_login_pwd").css("display","block");
					$(".dm_container .mod_fund_pwd").css("display","none");
				}else{
					$(".dm_container .mod_login_pwd").css("display","none");
					$(".dm_container .mod_fund_pwd").css("display","block");
				}
		},
		
		pwdVerIsTrue : function($inSel1,$inSel2,$inSel3,$obj){
			var pwd = $inSel1.val();
			var new_pwd = $inSel2.val();
			var confirm_pwd = $inSel3.val();
			if(pwd== "" || new_pwd == "" || confirm_pwd == ""){
				return false;
			}else if(new_pwd != confirm_pwd){
				$inSel3.next(".new_pwd_com").css("display","inline-block");
				return false
			}else{
				var data = {
					"pwd":pwd,
					"new_pwd":new_pwd,
					"confirm_pwd":confirm_pwd
				};
				return data;
			}
		},
	},
};
dataMan.init();
