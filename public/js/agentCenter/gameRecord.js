var gameRecord = {
	init: function() {
		this.addEvent();
		this.personBetRecordAjax();
	},

	addEvent: function() {
		$(".dm_second_menu .dm_s_m_i").click(function() {
			if(!$(this).hasClass("active")) {
				$(".dm_second_menu .dm_s_m_i").removeClass("active");
				$(this).addClass("active");
			}
		});
		
		$(".ac_require_btn").click(function(){
			gameRecord.personBetRecordAjax();
		});
		$(document).keydown(function(e){
			 if(e.keyCode == 13){
			 	$(".ac_require_btn").trigger("click");
			 }
		});
		//查看item详情
		$("body").delegate("#page_table tr","click",function(){
			var id = $(this).attr("data-id");
			var url = '/game/lottery/betting-record?id='+id;
			gameRecord.ajaxAll(url,gameRecord.personBetRecorditemInfoPro);
		});
	},

	personBetRecordAjax: function() {
		var gametype = $("#game_type").find("option:selected").text();
		console.log(gametype);
		var bdate = $("#date1").val();
		var edate = $("#date2").val();
		var state = $("#game_state").find("option:selected").text();
		var memberId = $("#member_id").val();
		if(!memberId)
			memberId = "null";
		if(state == "所有")
			state = "null";
		else
			state = '"' + state + '"';
		if(gametype == "所有游戏")
			gametype = null;
		var url = '/game/lottery/betting-records?info={"gametype":null,"state":' + state + ',"bdate":"' + bdate + ' 00:00:00","edate":"' + edate + ' 23:59:59","subordinates":"true","memberid":'+memberId+'}';
		console.log(url);
		gameRecord.ajaxAll(url, gameRecord.personBetRecordPro);
		return;
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
	
	personBetRecordPro : function(data){
		console.log(data);
		var _html = '';
		$.each(data,function(i,item){
			var gameTyme = item.gametype.split("/");
			var betNum = item.detail.replace(/\[/g,"").replace(/\],/g,"|").replace(/\]/g,"");
			var result = item.result.replace(/\[/g,"").replace(/\],/g,"|").replace(/\]/g,"");
			
			var tstr = (new Date(item.time));  // 时区转换  依赖js   Date.prototype.format    /   main.js
			var time = tstr.format("yyyy-MM-dd hh:mm:ss");
			var multiple = JSON.parse(item.type).multiple;
			_html += '<tr data-id="'+item.id+'"><td>'+item.id+'</td><td>'+item.memberid+'</td><td>'+gameTyme[2]+'/'+gameTyme[4]+'</td><td>'+time+'</td>'+
					'<td width="120"><div>'+betNum+'</div></td><td>￥'+(item.betmoney/multiple).toFixed(2)+'</td><td>'+multiple+'倍</td><td>'+item.betmoney+'</td>'+
					'<td>'+item.winmoney.toFixed(2)+'</td><td>'+result+'</td><td>'+item.state+'</td><td>查看</td></tr>';
		});
		$("#page_table tr:gt(0)").remove(); 
		$("#page_table tr:first-child").after(_html);
	},
	
	personBetRecorditemInfoPro : function(data){
		var gameTArr = data.gametype.split("/");
		var issNumber = data.issuenumber.replace(/\-/g,"");
		var tstr = (new Date( data.time));  // 时区转换  依赖js   Date.prototype.format    /   main.js
		var time = tstr.format("yyyy-MM-dd hh:mm:ss");
		var bettype = JSON.parse(data.type);
		var betdetail = data.detail.replace(/\[/g,"").replace(/\],/g,"|").replace(/\]/g,"");
		var lotNum = data.result.replace(/\[/g,"").replace(/\]/g,"");
		var _html = '<li class="g_r_p_i"><span class="g_r_p_key">会员名 :</span><span class="g_r_p_val">'+data.memberid+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">游戏名称 :</span><span class="g_r_p_val">'+gameTArr[2]+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">游戏模式 :</span><span class="g_r_p_val">'+gameTArr[3]+"/"+gameTArr[4]+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">下注期号 :</span><span class="g_r_p_val">'+issNumber+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">下单时间 :</span><span class="g_r_p_val">'+time+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">下单注数 :</span><span class="g_r_p_val">'+data.betcount+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">下单倍数 :</span><span class="g_r_p_val">'+bettype.multiple+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">下单金额 :</span><span class="g_r_p_val">￥'+data.betmoney+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">状态 :</span><span class="g_r_p_val">'+data.state+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">中奖金额 :</span><span class="g_r_p_val">'+data.winmoney+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">开奖号码 :</span><span class="g_r_p_val">'+lotNum+'</span></li><br />'+
		'<li class="g_r_p_i"><span class="g_r_p_key">下注号码 :</span><span class="g_r_p_val">'+betdetail+'</span></li>';
		$(".game_record_popus .g_r_p_l").html(_html);
		$(".game_record_popus.record").css("display", "block");
		agentCenter.popusInit();
	},
};
gameRecord.init();

