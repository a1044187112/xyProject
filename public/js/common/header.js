var Header = {
	init: function() {
		Header.ajaxUrl = 'http://192.168.0.120:8083'; // 数据请求的链接 

		this.addEvent();

//		this.loadUserInfo(); // 加载用户信息


		Header.allAjax.ajaxInit();
		
		Header.timeout.init();
	},
	
	timeout : {
		init : function(){
			Header.timeout.clickMonitor();
			Header.myTime = setTimeout("Header.timeout.Timeout()", 1800000);    
		},
		resetTime : function() {  
		    clearTimeout(Header.myTime);     
		    Header.myTime = setTimeout('Header.timeout.Timeout()', 1800000);     
		},
		Timeout : function() {     
		    document.location.href='/xyProject/login.html';     
		},
		clickMonitor : function(){
			$("body").click(function(){
				Header.timeout.resetTime();
			});
		},
	},
	
	loadUserInfo: function(data) {
		Header.rebate11X5 = data.AgentPercent11X5;  //用户返点信息
		Header.rebateDPC = data.AgentPercentDPC;
		Header.rebateSSC = data.AgentPercentSSC;
		Header.moneyBalance = data.AccountBalance;
		if(data.AccountName){
			$(".user_name").text(data.AccountName);
			$(".user_money").text("余额：￥" + data.AccountBalance.toFixed(2));
		}else{
			window.location.href="/xyProject/login.html";
		}
		if(data.LoginCount==1){
			// 第一次登录 提示用户修改资金密码
			Home.resetMoneyPwd();
		}
	},

	addEvent: function() {
		//顶部菜单
		var $topMenuSel = $(".con_menu .con_menu_item");
		$topMenuSel.click(function() {
			var index = $(this).index(".con_menu .con_menu_item");
			if(index==2||index==3){
				var w = window.screen.width;
				$(".remind_bg").css("display","block");
				$(".click_remind").css("display","block").css("left",(w-500)/2+"px");
				
			}
			
			if(index!=1){
				$topMenuSel.removeClass("active");
				$(this).addClass("active");
				Header.toolMethod.SetTopMenuShow($topMenuSel, $(this));
			}
		});
		
		$(".click_remind .remind_con").click(function(){
			$(".remind_bg").css("display","none");
				$(".click_remind").css("display","none");
		});
		
		// 当点击退出按钮时  清空cookie
		$(".header_item.logout").click(function(){
			document.cookie = '';
		});

		// 当点击页面不是在菜单内部时  隐藏菜单
		$("body").bind("click", function(e) {
			if($(e.target).parent(".con_menu").length == 0) {
				$(".menu_more.active").removeClass("active");
			}
			if($(e.target).parentsUntil(".quick").parent(".quick").length == 0) {
				$(".feedback").css("display", "none");
				$(".win_ano").css("display", "none");
				$(".quick .quick_item:nth-child(1)").removeClass("active");
				$(".quick .quick_item:nth-child(3)").removeClass("active");
			}
		});

		// 点击快捷栏时 
		$(".quick .quick_item").click(function() {
			var index = $(this).index(".quick .quick_item");
			Header.toolMethod.quickClickInfo(index, $(this));
		});


		// 点击意见反馈框
		$(".quick .feedback").click(function(e) {
			e.stopPropagation();
		});
		// 点击意见反馈框提交按钮
		$(".quick .fb_submit").click(function() {
			alert("提交成功");
			$(".feedback").css("display", "none");
			$(".quick .quick_item:nth-child(3)").removeClass("active");
		});

//		$lotMenu = $(".m_m_i_lot .m_m_i_lot_i"); // 点击彩票中心下的 彩票菜单
//		var lot_id = $(".lot_class_name").text();
//		console.log(lot_id);
//		console.log(lot_id.indexOf("11选5")); 
//		$("body").delegate(".m_m_i_lot .m_m_i_lot_i", "click", function() {
//			Header.lotClassId = $(this).text();
//			if($(".lot_class_name")[0]){
//				var lot_id = $(".lot_class_name").text();
//				var click_id = $(this).text();
//				if(lot_id.index()){}
//			}else{  
//				window.location.href = "/home/lotteryGmae/lotteryGame.html?" + Header.lotClassId;
//			}
//		}); 
		
		
		// 游戏记录弹窗关闭按钮
		$("body").delegate(".game_record_popus .g_r_p_btn span","click",function(){
			$(".popus_bg").css("display","none");
			$(".game_record_popus").css("display","none");
		});
		
		// 游戏记录列表查看按钮   彩票页面
		$("body").delegate(".bet_rec .table table tr:gt(0)","click",function(){
			var height = document.body.scrollHeight;
			$(".popus_bg").css("height", height).css("display", "block");
			$(".game_record_popus").css("display", "block");
		});
		
		// 点击金额刷新图标
		$(".shuaxin_money").click(function(){
			Header.allAjax.userInfoAjax();
		});
		
	},

	toolMethod: {
		SetTopMenuShow: function($topMenuSel, $this) {
			$topMenuSel.find(".menu_more").removeClass("active");
			$this.find(".menu_more").addClass("active");
		},

		// 快捷导航栏点击效果
		quickClickInfo: function(index, $this) {
			switch(index) {
				case 0:
					if($this.hasClass("active")) {
						$this.removeClass('active');
						$this.find(".win_ano").css("display", "none");
					} else {
						$this.addClass('active');
						$this.find(".win_ano").css("display", "block");
					}
					break;
				case 1:
					if($this.hasClass("active"))
						$this.removeClass('active');
					else
						$this.addClass('active');
					break;
				case 2:
					if($this.hasClass("active")) {
						$this.removeClass('active');
						$this.find(".feedback").css("display", "none");
					} else {
						$this.addClass('active');
						$this.find(".feedback").css("display", "block");
					}
					break;
				case 3:
					window.open('http://chat.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=802102&configID=49810&jid=2083976162');
					break;
				case 4:
					$('body,html').animate({
						'scrollTop': 0
					}, 300);
					break;
			}
		},

	},

	allAjax: {
		ajaxInit: function() {
			Header.allAjax.userInfoAjax();
			setInterval(function(){
				Header.allAjax.userInfoAjax();
			},3000);
		},

		userInfoAjax: function() { // 用户信息更新
			$.ajax({
				type: 'POST',
				url: Header.ajaxUrl+"/WebService.asmx/Json_GetAccountInfo",
				dataType: "xml",
				success: function(data) {
					data = JSON.parse($(data).find("string").text());
					Header.allAjax.personInfoPro(data);
				},
				error: function(e) {

				}
			});
		},
		
		personInfoPro : function(data){
			if(data.code == "error"){
				window.location.href = "/login.html";
			}else{
				Header.loadUserInfo(data);
			}
		},
	},
};
Header.init();