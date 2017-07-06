var gameRecord = {
	init: function() {
		this.addEvent();
		gameRecord.personBetRecordAjax()
	},
	addEvent: function() {
		$(".dm_second_menu .dm_s_m_i").click(function(){
			if(!$(this).hasClass("active")){
				$(".dm_second_menu .dm_s_m_i").removeClass("active");
				$(this).addClass("active");
			}
		});
		
		$(".game.data_require").click(function(){
			gameRecord.personBetRecordAjax();
		});
		
		$("body").delegate("#page_table tr","click",function(){
			var id = $(this).attr("data-id");
			var url = '/game/lottery/betting-record?id='+id;
			gameRecord.ajaxAll(url,gameRecord.personBetRecorditemInfoPro);
			$(".popus_bg").css("display","block");
			$(".game_record_popus").css("display","block");
		});
		
		$(document).keydown(function(e){
			 if(e.keyCode == 13){
			 	$(".game.data_require").trigger("click");
			 }
		});
	},
	personBetRecordAjax : function(){
		var gametype = $("#game_type").find("option:selected").text();
		console.log(gametype);
		var bdate = $("#date1").val();
		var edate = $("#date2").val();
		var state = $("#game_state").find("option:selected").text();
		if(state=="所有") 
			state = "null";
		else
			state ='"'+state+'"';
		if(gametype=="所有游戏")
			gametype = null;
		var url = '/game/lottery/betting-records?info={"gametype":null,"state":'+state+',"bdate":"'+bdate+' 00:00:00","edate":"'+edate+' 23:59:59"}';
		gameRecord.ajaxAll(url,gameRecord.personBetRecordPro);
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
			$.each(data, function(i,item) {
				var lotArr = item.gametype.split("/");
				var lotNum = '';
				if(item.result){
					lotNum = item.result.substring(1,item.result.length-1);
				}else{
					lotNum = "-----";
				}
				var detaileText = item.detail.replace(/\[/g,"").replace(/\],/g,"|").replace(/\]/g,"");
				_html += '<tr data-id="'+item.id+'"><td>' + lotArr[2] + '</td><td>' + item.issuenumber + '</td><td>' + lotArr[3] + '</td><td>1880</td><td>' + detaileText + '</td>' +
					'<td>￥'+item.betmoney+'</td><td>'+lotNum+'</td><td>' + item.state + '</td><td>￥'+item.winmoney.toFixed(2)+'</td><td>查看</td></tr>';
			});
			$(".table table tr:gt(0)").remove();
			$(".table table tr:first-child").after(_html);
	},
	
	personBetRecorditemInfoPro : function(data){
		console.log(data);
		var gameTArr = data.gametype.split("/");
		var issNumber = data.issuenumber.replace(/\-/g,"");
		var tstr = (new Date( data.time));  // 时区转换  依赖js   Date.prototype.format    /   main.js
		var time = tstr.format("yyyy-MM-dd hh:mm:ss");
		var bettype = JSON.parse(data.type);
		var betdetail = data.detail.replace(/\[/g,"").replace(/\],/g,"|").replace(/\]/g,"");
		console.log(data);
		var _html = '<li class="g_r_p_i"><span class="g_r_p_key">会员名 :</span><span class="g_r_p_val">'+data.memberid+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">游戏名称 :</span><span class="g_r_p_val">'+gameTArr[2]+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">游戏模式 :</span><span class="g_r_p_val">'+gameTArr[3]+"/"+gameTArr[4]+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">下注期号 :</span><span class="g_r_p_val">'+issNumber+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">下单时间 :</span><span class="g_r_p_val">'+time+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">下单注数 :</span><span class="g_r_p_val">'+data.betcount+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">下单倍数 :</span><span class="g_r_p_val">'+bettype.multiple+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">下单金额 :</span><span class="g_r_p_val">￥'+data.betmoney+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">状态 :</span><span class="g_r_p_val">'+data.state+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">中奖金额 :</span><span class="g_r_p_val">￥'+data.winmoney.toFixed(4)+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">中奖注数 :</span><span class="g_r_p_val">'+data.wincount+'</span></li>'+
		'<li class="g_r_p_i" style="width:100%;"><span class="g_r_p_key"  style="width:30%;">下注号码 :</span><span class="g_r_p_val"  style="width:70%;text-align:left;">'+betdetail+'</span></li>';
		$(".game_record_popus .g_r_p_l").html(_html);
	},
};
gameRecord.init();