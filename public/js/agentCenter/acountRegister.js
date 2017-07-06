var acountRegister = {
	init : function(){
		this.addEvent();
		setTimeout(function(){
			acountRegister.rePointDomInit();  //彩种返点初始化
		},1000);
	},
	addEvent : function(){
		//  菜单点击事件
		$(".ac .dm_s_m_i").click(function(){
			if(!$(this).hasClass("active")){
				acountRegister.method.changeClass($(".ac .dm_s_m_i"),$(this));
				var index = $(this).index(".ac .dm_s_m_i");
				acountRegister.method.divIsShow(index);
			}
		});
		
		// 点击复制按钮 
		$(".link .link_ctrl_c").click(function(){
			var url = $(this).prev(".link_deltai").select();
			document.execCommand("copy",false,null);
		});
		
		// 点击生成账户按钮 
		$(".acc_rigis_btn").click(function(){
			var isTrue = acountRegister.method.setVerification();  // 验证输入是否正确
			if(isTrue){
				console.log(isTrue);
				console.log(JSON.stringify(isTrue));
				var urlString = "/register";
				agentCenter.allAjaxSub(isTrue,urlString,acountRegister.method.regsterReDataPro);
			}
		});
	},
	
	method : {
		
		changeClass : function($faSel,$obj){
			$faSel.removeClass("active");
			$obj.addClass("active");
		},
		
		divIsShow : function(index){
			$(".ac .acc_regis").css("display","none");
			$(".ac .link_regis").css("display","none");
			$(".ac .link_info").css("display","none");
			if(index == 0){
				$(".ac .acc_regis").css("display","block");
			}else if(index == 1){
				$(".ac .link_regis").css("display","block");
			}else{
				$(".ac .link_info").css("display","block");
			}
		},
		
		setVerification : function(){
			$(".new_pwd_mod").css("display","none");
			$(".new_pwd_com").css("display","none");
			var userId = $(".login_pwd").val();  
			var new_pws = $(".new_login_pwd").val();
			var con_pws = $(".confirm_login_pwd").val();
			if(userId == '' ){
				$(".login_pwd").next(".new_pwd_mod").css("display","inline-block").text("账户名不能为空");
				return false;
			}else if(userId.length<4){
				$(".login_pwd").next(".new_pwd_mod").css("display","inline-block").text("账户最多不少于4个字符");
				return false;
			}else if(new_pws == ""){
				$(".new_login_pwd").next(".new_pwd_com").css("display","inline-block").text("请输入密码");
				return false;
			}else if(new_pws.length<6){
				console.log($(".new_login_pwd").next()[0]);
				$(".new_login_pwd").next(".new_pwd_com").css("display","inline-block").text("密码最多不少于6个字符");
				return false;
			}else if(con_pws == ""){
				$(".confirm_login_pwd").next(".new_pwd_com").css("display","inline-block").text("请输入确认密码");
				return false;
			}else if(new_pws != con_pws){
				$(".confirm_login_pwd").next(".new_pwd_com").css("display","inline-block").text("两次输入的密码不一致 请从新输入");
				return false;
			}else{
				var data = {
						"id":userId,
						"password":new_pws,
						"level":$("#acount_type").find("option:selected").attr("data-type"),
						"rebate":{
							"时时彩":$("#sscai").find("option:selected").attr("data-val")-0,
							"十一选五":$("#elsel5").find("option:selected").attr("data-val")-0,
							"低频彩":$("#fc3d").find("option:selected").attr("data-val")-0
						}
				};
				data = JSON.stringify(data);
				var	params = {
					info:data
				};
				return params;
			}
		},
	
		regsterReDataPro : function(data){
			if(data.code == "error"){
				$(".popus_bg").css("display","block");
				$(".register_fail").css("display","block");
				$(".register_fail .register_fail_remind").text(data.data);
			}else{
				$(".popus_bg").css("display","block");
				$(".register_success").css("display","block");
			}
			agentCenter.popusInit();
		},
	},
	 
	rePointDomInit : function(){
		Header.rebate = JSON.parse(Header.rebate);
		var sscPoint = 1800+(Header.rebate.时时彩*100-0)*20;
		var else15 = 1811+(Header.rebate.十一选五*100-0)*19.8;
		var fc3dPoint = 1800+(Header.rebate.低频彩*100-0)*20;
		var ssc_html = '';
		var else15_html = '';
		var fc3d_html = '';
		for(var i = 0;i <= (sscPoint-1800)/2 ; i++){
			ssc_html += '<option data-val="'+(0.001*i).toFixed(3)+'">'+(i*0.1).toFixed(1)+"("+(1800+i*2)+")"+'</option>';
		}
		$("#sscai").html(ssc_html);
		$("#sscai_link").html(ssc_html);
		for(var i = 0;i <= (fc3dPoint-1800)/2 ; i++){
			fc3d_html += '<option data-val="'+(0.001*i).toFixed(3)+'">'+(i*0.1).toFixed(1)+"("+(1800+i*2)+")"+'</option>';
		}
		$("#fc3d").html(fc3d_html);
		$("#fc3d_link").html(fc3d_html);
		for(var i = 0;i <= (else15-1811)/2+1 ; i++){
			else15_html += '<option data-val="'+(0.001*i).toFixed(3)+'">'+(i*0.1).toFixed(1)+"("+(1811+i*1.98).toFixed(2)+")"+'</option>';
		}
		$("#elsel5_link").html(else15_html);
		$("#elsel5").html(else15_html);
	},
};
acountRegister.init();
