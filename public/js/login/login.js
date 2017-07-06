 function redirect(url) {
  $(window.location).attr('href', url);
}

var Index = {
	init: function() {
		Index.ajaxUrl = 'http://192.168.0.120:8083';
		
		Index.genYanzm();// 生成验证码
		
		this.setLoginInput(); // 是输入块竖直居中

		this.addEvent();

//		Index.starAnim.initStar(); // 星星动画

		Index.meteorAnim.initMe();
		
	},
	
	genYanzm : function(){
		var  randomNum = parseInt(Math.random()*8888+1000);
		$(".yan_z_m_val").text(randomNum);
	},
	
	// 登录验证
	loginVer: function() {
		// 验证码验证
		if($(".yan_zh_ma").val()!=$(".yan_z_m_val").text()){
			$(".con_login .modity_text").css("visibility","visible").text("提示:验证码输入错误!");
			Index.genYanzm();// 生成验证码
			return false;
		}
		
		var id = $(".con_login .name").val();
		var pass = $(".con_login .pwd").val();
		$.ajax({
			type: 'POST',
			url: Index.ajaxUrl+"/WebService.asmx/Json_LoginOn",
			dataType: "xml",
			data: {
				name: id,
				pwd: pass
			},
			success: function(data) {
				console.log(data);
				if(!$(data).find("string").text()){
					$(".con_login .modity_text").css("visibility","visible").text("提示: 账户与密码输入有误!");
				}else{
//					var id = $(data).find("Account AccountName").text();
					window.location.href = "home.html";
				}
				
				if(data.redirect)
					window.islogin = true;
					userInfo = JSON.stringify(data.user);
					document.cookie = userInfo;
					redirect(data.redirect);
			},
			error: function(e) {
				console.log(e);
//				alert("登入失败, " + e);
			}
		});
	},

	setLoginInput: function() {
		var bodyH = $("body").css("height"); // 获取body 的高度

		var loginH = $(".con_login").css("height"); // 获取输入块的高度

		var marginTop = (parseInt(bodyH) - parseInt(loginH)) / 2-120; // 距离顶部的距离

		$(".con_login").css("margin-top", marginTop + "px");
	},

	addEvent: function() {
		// 当window 窗口大小重置的 设置输入框距离顶部的高度
		$(window).resize(function() {
			Index.setLoginInput();
			demo();
		});
		
		// 点击登录按钮
		$(".con_login .submit").click(function(){
				Index.loginVer();
		});
		
		// 点击键盘回车键 
		$(document).keydown(function(e){
			 if(e.keyCode == 13){
			 		Index.loginVer();
			 }
		});
	},

	starAnim: {

		initStar: function() {
			Index.imgSrc = new Array("/xyProject/public/img/login/xx--.png", "/xyProject/public/img/login/xx-.png", "/xyProject/public/img/login/xx-.png");
			// 在页面先生成一颗星星
			for(var i = 0; i < 12; i++) {
				var _html = "<img class='star add_star" + i + "' src='/xyProject/public/img/login/xx--.png'/>";
				$("body").append(_html);

				Index.starAnim.setStarPosition(i); // 获取随机坐标

				Index.starAnim.starMove(i); //让星星移动 给一个初始速度

				var changeTime = parseInt(Math.random() * 5000); // 设置随机时间  让星星在不同的时候闪烁
				var j = 0;
				setTimeout(function() {
					Index.starAnim.changeStarSrc(j); // 更换星星的图片 达到闪烁的效果
					j++;
				}, changeTime);
			}
		},

		setStarPosition: function(i) { // 设置星星的随机显示位置
			var bodyH = parseInt($(".con").css("width")); // 页面宽度

			var starY = Math.random() * 500; // Y轴

			var starX = Math.random() * bodyH; // X轴

			$(".add_star" + i + "").css({
				top: starY + "px",
				left: starX + "px"
			});

			$(".me_star" + i + "").css({
				top: starY + "px",
				left: starX + "px"
			});
		},

		starMove: function(i) {
			var moveX = Math.random() * 2 - 1; // x轴移动速度
			var moveY = Math.random() * 2 - 1; // y轴移动速度

			setInterval(function() {
				$(".add_star" + i + "").animate({
					left: "+=" + moveX + "px",
					top: "+=" + moveY + "px",
				}, 300, function() {
					//处理如果星星不在页面上之后 重新生成星星
					Index.starAnim.createStar(i);

				});
			}, 300); // 每隔多久移动一次
		},

		changeStarSrc: function(i) {
			var count = 0;
			setInterval(function() {
				$(".add_star" + i + "").attr("src", Index.imgSrc[count]);
				count++;
				if(count == 3)
					count = 0;
			}, 300);
		},

		createStar: function(i) {
			var left = parseInt($(".add_star" + i + "").css("left"));
			var top = parseInt($(".add_star" + i + "").css("top"));
			if(left < 0 || left > parseInt($("body").css("width")) || top < 0 || top > parseInt($("body").css("height"))) {
				Index.starAnim.setStarPosition(i); // 获取随机坐标
				Index.starAnim.starMove(i); //让星星移动 给一个初始速度
			}
		},
	},

	meteorAnim: {

		initMe: function() {
			for(var i = 0; i < 2; i++) {
				var _html = "<img class='star me_star" + i + "' src='/xyProject/public/img/login/lx.png'/>";
				$("body").append(_html);
				Index.meteorAnim.setStarPosition(i);

				var changeTime = parseInt(Math.random() * 5000); // 设置随机时间  让星星在不同的时候闪烁
				var j = 0;
				setTimeout(function() {
//					Index.meteorAnim.meMove(j);
					j++;
				}, changeTime);
			}
		},

		setStarPosition: function(i) { // 设置星星的随机显示位置
			var bodyH = parseInt($(".con").css("width")); // 页面宽度

			var starY = Math.random() * -500 - 100; // Y轴

			var starX = Math.random() * bodyH; // X轴

			$(".me_star" + i + "").css({
				top: starY + "px",
				left: starX + "px"
			});
		},

//		meMove: function(i) {
//			var moveX = Math.random() * 2 + 1.5; // x轴移动速度
//
//			setInterval(function() {
//				$(".me_star" + i + "").animate({
//					left: "-=" + moveX + "px",
//					top: "+=" + moveX + "px",
//				}, 10, function() {
//					Index.meteorAnim.createMe(i);
//				});
//			}, 10); // 每隔多久移动一次
//		},

//		createMe: function(i) {
//			var left = parseInt($(".me_star" + i + "").css("left"));
//			var top = parseInt($(".me_star" + i + "").css("top"));
//			if(left < -100 || top > parseInt($("body").css("height"))) {
//				Index.meteorAnim.setStarPosition(i); // 获取随机坐标
//				Index.meteorAnim.meMove(i); //让星星移动 给一个初始速度
//			}
//		},
	},
};
Index.init();
