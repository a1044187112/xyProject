var accoundChangeRecrde = {
	init : function(){
		this.addEvent();
	},
	
	addEvent : function(){
		$(".dm_container .data_require").click(function(){
			console.log($(".require_type").find("option:selected").text());
			var data = {
				type: $(".require_type").find("option:selected").text(),
				begindate:$("#date1").val()+" 00:00:00",
				enddate:$("#date2").val()+" 23:59:59"
			};
//			data = JSON.stringify(data);
//			var params = { info:data };
			var urlString = "/user/get-account-records";
			personCenter.allAjaxSub(data,urlString,accoundChangeRecrde.dataRequirePro);
		});
		
		$("body").delegate("table .table_item_info","click",function(){
			var data = {
				type:$(this).attr("data-type"),
				id:parseInt($(this).attr("data-id"))+""
			};
			var params = {
				relation: JSON.stringify(data)
			};
			var urlString = "/user/get-account-relation";
			personCenter.allAjaxSub(params,urlString,accoundChangeRecrde.toviewPro);
			$(".popus_bg").css("display","block");
			$(".game_record_popus").css("display","block");
			personCenter.popusInit();
		});
		
		$(document).keydown(function(e){
			 if(e.keyCode == 13){
			 	$(".dm_container .data_require").trigger("click");
			 }
		});
		
	},
	
	dataRequirePro : function(data){
		console.log(data);
		var _html = '';
		$.each(data,function(i,item){
			var tstr = (new Date( item.time));  // 时区转换  依赖js   Date.prototype.format    /   main.js
			var time = tstr.format("yyyy-MM-dd hh:mm:ss");
			if(i<14){
				var relation = JSON.parse(item.relation);
				if(relation){
					_html += '<tr ><td>'+item.id+'</td><td>'+item.memberid+'</td><td>'+time+'</td><td>'+item.type+'</td>'+
						'<td class="win_money">'+item.money.toFixed(2)+'</td><td>'+item.moneybefore.toFixed(2)+'</td><td>'+item.moneyafter.toFixed(2)+'</td><td>'+item.comment+'</td>'+
						'<td><span class="table_item_info" data-id="'+relation.id+'" data-type="'+relation.type+'">查看</span></td></tr>'
				}else{
					_html += '<tr class="table_item"><td>'+item.id+'</td><td>'+item.memberid+'</td><td>'+time+'</td><td>'+item.type+'</td>'+
						'<td class="win_money">'+item.money.toFixed(2)+'</td><td>'+item.moneybefore.toFixed(2)+'</td><td>'+item.moneyafter.toFixed(2)+'</td><td>'+item.comment+'</td>'+
						'<td></td></tr>'
				}
			}
		});
		$(".dm_container .table tr:gt(0)").remove();
		$(".dm_container .table tr:first-child").after(_html);
	},
	
	toviewPro  : function(data){
		data = JSON.parse(data);
		var lotResult = data.result.replace(/\[/g,"").replace(/\]/g,"");
		var betInfo = data.detail.replace(/\[/g,"").replace(/\],/g,"|").replace(/\]/g,"");
		var typeArr = data.gametype.split("/");
		var _html = '<li class="g_r_p_i"><span class="g_r_p_key">会员名 :</span><span class="g_r_p_val">'+data.memberid+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">游戏类型 :</span><span class="g_r_p_val">'+typeArr[2]+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">游戏模式 :</span><span class="g_r_p_val">'+typeArr[3]+" - "+typeArr[4]+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">开奖结果 :</span><span class="g_r_p_val">'+lotResult+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">订单号 :</span><span class="g_r_p_val">'+data.issuenumber+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">订单状态 :</span><span class="g_r_p_val">'+data.state+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">下注时间 :</span><span class="g_r_p_val">'+data.time+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">下注金额 :</span><span class="g_r_p_val">￥'+data.betmoney+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">中奖注数 :</span><span class="g_r_p_val">'+data.wincount+'</span></li>'+
		'<li class="g_r_p_i"><span class="g_r_p_key">中奖金额 :</span><span class="g_r_p_val">￥'+data.winmoney+'</span></li>'+
		'<li class="g_r_p_i" style="width:100%;"><span class="g_r_p_key" style="width:15%;">注单内容 :</span><span class="g_r_p_val">'+betInfo+'</span></li>';
		$(".game_record_popus .g_r_p_l").html(_html);
	},
};
accoundChangeRecrde.init();
