var acountList = {
	init : function(){
		this.addEvent();
		this.requestData();
	},
	
	addEvent : function(){
		$("body").delegate(".ac_al_tb_btn","click",function(){
			var idText = $(this).text();
			switch (idText){
				case '编辑':
					$(".popus_bg").css("display","block");
					$(".user_edit").css("display","block");
					$(".user_edit .ret_point_set .r_p_s_i:first-child span:nth-child(2)").text($(this).attr("data-id"));
					$(".r_p_s_i_remind").css("visibility","visible").text("提示 ： 只能升点不能降点！");
					var sscr = $(this).attr("data-ssc");
					var tsel5r = $(this).attr("data-11sel5");
					var fc3dr = $(this).attr("data-fc3d");
					acountList.rePointDomInit(sscr,tsel5r,fc3dr);  //  设置返点
					break;
				case '团队':
					$(".team_balance .ret_point_set .r_p_s_i:first-child span:nth-child(2)").text($(this).attr("data-id"));
					$(".team_balance .ret_point_set .r_p_s_i:nth-child(2) span:nth-child(2)").text($(this).attr("data-money")+"   RMB ");
					$(".popus_bg").css("display","block");
					$(".team_balance").css("display","block");
					break;
				case '充值':
					$(".user_xia_re .ret_point_set .r_p_s_i:first-child span:nth-child(2)").text($(this).attr("data-id"));
					$(".user_xia_re .ret_point_set .r_p_s_i:nth-child(2) span:nth-child(2)").text(Header.moneyBalance+"  RMB");
					$(".popus_bg").css("display","block");
					$(".user_xia_re").css("display","block");
					break;
			}
			agentCenter.popusInit(); 
		});
		
		$(".ac_require .ac_require_btn").click(function(){
			acountList.requestData();
		});
		$(document).keydown(function(e){
			 if(e.keyCode == 13){
			 	$(".ac_require .ac_require_btn").trigger("click");
			 }
		});
		
		// 状态图片按钮点击
		$("body").delegate(".agent_bet_info","click",function(){
			$(".popus_bg").css("display","block");
			$(".user_bet_info").css("display","block").css("width","1000px");
			agentCenter.popusInit();
		});
		
		// 充值确定按钮
		
		$(".user_xia_re .btn_con").click(function(){
			if(parseInt($(".to_money").val())>parseInt($(".now_money").text())){
				alert("您的金额不足！");
				return false;
			}
			if($(".to_money").val()<0||$(".to_money").val()=="")
				return false;
			var params = {
				"toid":$(".to_id").text(),
				"money":$(".to_money").val()-0,
				"password":$(".to_password").val(),
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
					if(data.code == "error")
						alert(data.data);
					else{
						alert(data.data);
						$(".popus_bg").css("display","none");
			            $(".user_xia_re").css("display","none");
					}
				},
				error: function(e) {
					console.log(e);
				}
			});
		});
		
		// 充值取消按钮  返点取消按钮
		$(".user_xia_re_btn .btn_cancel").click(function(){
			$(".popus_bg").css("display","none");
			$(".user_xia_re").css("display","none");
			$(".user_edit").css("display","none");
		});
		
		//返点修改确认按钮
		$(".user_edit .btn_con").click(function(){
			var data = {
				"id":$(".user_edit .ret_point_set .r_p_s_i:first-child span:nth-child(2)").text(),
				"rebate":{
							"时时彩":$(".user_edit #sscai").find("option:selected").attr("data-val")-0,
							"十一选五":$(".user_edit #elsel5").find("option:selected").attr("data-val")-0,
							"低频彩":$(".user_edit #fc3d").find("option:selected").attr("data-val")-0
						}
			};
			data = JSON.stringify(data);
			var	params = {
					info:data
				};
			var urlString = "/user/rebate/edit";
			agentCenter.allAjaxSub(params,urlString,acountList.modifyRebatePro);
		});
		
	},
	
	requestData : function(){
		var params = {
				type:$("#agent_type").find("option:selected").attr("data-type")
			};
			var urlString = "/user/get-users";
		agentCenter.allAjaxSub(params,urlString,acountList.regsterReDataPro);
	},
	
	regsterReDataPro : function(data){
		console.log(data);
		var _html = ''; 
		$.each(data, function(i,item) {
			var rep = JSON.parse(item.rebate);
			var tstr = (new Date( item.time));  // 时区转换  依赖js   Date.prototype.format    /   main.js
			var time = tstr.format("yyyy-MM-dd hh:mm:ss");
			var rePointer  = rep.时时彩*100;
			
			var loginTme = null ;
			if(item.logintime){
				var tstr = (new Date(item.logintime));  // 时区转换  依赖js   Date.prototype.format    /   main.js
				var loginTme = tstr.format("yyyy-MM-dd hh:mm:ss");
			}
			_html += '<tr><td>'+item.id+'</td><td>￥'+item.money+'</td><td>'+rePointer.toFixed(1)+'%</td><td>'+time+'</td><td>'+loginTme+'</td><td>'+item.loginedcount+'</td>'+
			'<td>'+item.parentid+'</td><td><img class="agent_bet_info" data-id="'+item.id+'" src="/public/img/agentCenter/zaixian.png"></td><td><span class="ac_al_tb_btn" data-id="'+item.id+'" '+
			'data-ssc="'+rep.时时彩*100+'" data-11sel5="'+rep.十一选五*100+'" data-fc3d="'+rep.低频彩*100+'">编辑</span>'+
			'<span class="ac_al_tb_btn" data-id="'+item.id+'" data-money="'+item.money+'">团队</span><span class="ac_al_tb_btn" data-id="'+item.id+'">充值</span></td></tr>';
		});
		$("#account_list tr:gt(0)").remove();
		$("#account_list tr:first-child").after(_html); 
		
		var index  = $("#pag .page_num_item.active").text();  // 当前页的页码
		if(data.length <= 14)
			return ;
		if(!index)
			index = 1;
		acountList.pagPro(index);
	}, 
	
	pagPro : function(index){
		var data = {  // 添加分页
			length:1,
			active:index,
			method:acountList.pagPro
		};
		pag.init(data);
	},
	
	rePointDomInit : function(sscr,tsel5r,fc3dr){
		Header.rebate = JSON.parse(Header.rebate);
		var sscPoint = 1800+(Header.rebate.时时彩*100-0)*20;
		var else15 = 1811+(Header.rebate.十一选五*100-0)*19.8;
		var fc3dPoint = 1800+(Header.rebate.低频彩*100-0)*20;
		var ssc_html = '';
		var fc3d_html = '';
		var else15_html = '';
		for(var i = 0;i <= (sscPoint-(1800+sscr*20))/2 ; i++){
			var a = (0.001*i+sscr/100).toFixed(3);
			var b = (i*0.1+(sscr-0)).toFixed(1);
			ssc_html += '<option data-val="'+a+'">'+b+"("+(1800+sscr*20+i*2)+")"+'</option>';
		}
		$("#sscai").html(ssc_html);
		for(var i = 0;i <= (sscPoint-(1800+fc3dr*20))/2 ; i++){
			var a = (0.001*i+fc3dr/100).toFixed(3);
			var b = (i*0.1+(fc3dr-0)).toFixed(1);
			fc3d_html += '<option data-val="'+a+'">'+b+"("+(1800+fc3dr*20+i*2)+")"+'</option>';
		}
		$("#fc3d").html(fc3d_html);
		for(var i = 0;i <= (else15-(1811+tsel5r*19.8))/2 ; i++){
			var a = (0.001*i+tsel5r/100).toFixed(3);
			var b = (i*0.1+(tsel5r-0)).toFixed(1);
			else15_html += '<option data-val="'+a+'">'+b+"("+(1811+tsel5r*19.8+i*1.98).toFixed(2)+")"+'</option>';
		}
		$("#elsel5").html(else15_html);
	},
	
	modifyRebatePro : function(data){
		if(data.code=="error"){
			$(".r_p_s_i_remind").css("visibility","visible").text("修改返点失败！");
		}else{
			$(".r_p_s_i_remind").css("visibility","visible").text("修改返点成功！");
			setTimeout(function(){
				$(".popus_bg").css("display","none");
				$(".user_edit").css("display","none");
			},1500);
		}
	},
	
};
acountList.init();