var lotteryMissing = {
	init : function(){
		this.initDom();
		this.addEvent();
		lotteryMissing.defaultShowLen = 15;
		$(".lm_con_how span:first-child").trigger("click");
	},
	
	initDom : function(){
		var lotClassText = $(".lm_con_menu .lm_con_item.active").text();
		var _html = '';
			if(lotClassText=="山东11选5"||lotClassText=="广东11选5"||lotClassText=="江西11选5"||lotClassText=="多乐11选5"){
				_html += '<tr><th rowspan="2">期号</th><th rowspan="2">开奖号码</th><th colspan="11">万位</th><th colspan="11">千位</th><th colspan="11">百位</th>'+
				'<th colspan="11">十位</th><th colspan="11">个位</th></tr><tr ><th class="td_h">01</th><th class="td_t">02</th><th class="td_t">03</th><th class="td_t">04</th>'+
				'<th class="td_t">05</th><th class="td_t">06</th><th class="td_t">07</th><th class="td_t">08</th><th class="td_t">09</th><th class="td_t">10</th><th class="td_t">11</th><th class="td_h">01</th>'+
				'<th class="td_t">02</th><th class="td_t">03</th><th class="td_t">04</th><th class="td_t">05</th><th class="td_t">06</th><th class="td_t">07</th><th class="td_t">08</th>'+
				'<th class="td_t">09</th><th class="td_t">10</th><th class="td_t">11</th><th class="td_h">01</th><th class="td_t">02</th><th class="td_t">03</th><th class="td_t">04</th>'+
				'<th class="td_t">05</th><th class="td_t">06</th><th class="td_t">07</th><th class="td_t">08</th><th class="td_t">09</th><th class="td_t">10</th><th class="td_t">11</th><th class="td_h">01</th>'+
				'<th class="td_t">02</th><th class="td_t">03</th><th class="td_t">04</th><th class="td_t">05</th><th class="td_t">06</th><th class="td_t">07</th><th class="td_t">08</th>'+
				'<th class="td_t">09</th><th class="td_t">10</th><th class="td_t">11</th><th class="td_h">01</th><th class="td_t">02</th><th class="td_t">03</th><th class="td_t">04</th><th class="td_t">05</th>'+
				'<th class="td_t">06</th><th class="td_t">07</th><th class="td_t">08</th><th class="td_t">09</th><th class="td_t">10</th><th class="td_t">11</th></tr>'+
				'<tr class="table_tr_sp"><th >出现次数</th><th ></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th>'+
				'</tr><tr class="table_tr_sp"><th >最大遗漏</th><th ></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th>'+
				'</tr><tr class="table_tr_sp1"><th rowspan="2">期号</th><th rowspan="2">开奖号码</th><th class="td_h">01</th><th class="td_t">02</th><th class="td_t">03</th>'+
				'<th class="td_t">04</th><th class="td_t">05</th><th class="td_t">06</th><th class="td_t">07</th><th class="td_t">08</th><th class="td_t">09</th><th class="td_t">10</th>'+
				'<th class="td_t">11</th><th class="td_h">01</th><th class="td_t">02</th><th class="td_t">03</th><th class="td_t">04</th><th class="td_t">05</th><th class="td_t">06</th>'+
				'<th class="td_t">07</th><th class="td_t">08</th><th class="td_t">09</th><th class="td_t">10</th><th class="td_t">11</th><th class="td_h">01</th><th class="td_t">02</th><th class="td_t">03</th>'+
				'<th class="td_t">04</th><th class="td_t">05</th><th class="td_t">06</th><th class="td_t">07</th><th class="td_t">08</th><th class="td_t">09</th><th class="td_t">10</th><th class="td_t">11</th>'+
				'<th class="td_h">01</th><th class="td_t">02</th><th class="td_t">03</th><th class="td_t">04</th><th class="td_t">05</th><th class="td_t">06</th><th class="td_t">07</th>'+
				'<th class="td_t">08</th><th class="td_t">09</th><th class="td_t">10</th><th class="td_t">11</th><th class="td_h">01</th><th class="td_t">02</th><th class="td_t">03</th><th class="td_t">04</th>'+
				'<th class="td_t">05</th><th class="td_t">06</th><th class="td_t">07</th><th class="td_t">08</th><th class="td_t">09</th><th class="td_t">10</th><th class="td_t">11</th></tr><tr><th colspan="11">万位</th>'+
				'<th colspan="11">千位</th><th colspan="11">百位</th><th colspan="11">十位</th><th colspan="11">个位</th></tr>';
			}else if(lotClassText=="福彩3D"){
				 _html += '<tr><th rowspan="2">期号</th><th rowspan="2">开奖号码</th><th colspan="10">百位</th>'+
				'<th colspan="10">十位</th><th colspan="10">个位</th></tr><tr ><th class="td_h">0</th><th class="td_t">1</th><th class="td_t">2</th><th class="td_t">3</th>'+
				'<th class="td_t">4</th><th class="td_t">5</th><th class="td_t">6</th><th class="td_t">7</th><th class="td_t">8</th><th class="td_t">9</th><th class="td_h">0</th>'+
				'<th class="td_t">1</th><th class="td_t">2</th><th class="td_t">3</th><th class="td_t">4</th><th class="td_t">5</th><th class="td_t">6</th><th class="td_t">7</th>'+
				'<th class="td_t">8</th><th class="td_t">9</th><th class="td_h">0</th><th class="td_t">1</th><th class="td_t">2</th><th class="td_t">3</th><th class="td_t">4</th>'+
				'<th class="td_t">5</th><th class="td_t">6</th><th class="td_t">7</th><th class="td_t">8</th><th class="td_t">9</th></tr>'+
				'<tr class="table_tr_sp"><th >出现次数</th><th ></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th>'+
				'</tr><tr class="table_tr_sp"><th >最大遗漏</th><th ></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th>'+
				'</tr><tr class="table_tr_sp1"><th rowspan="2">期号</th><th rowspan="2">开奖号码</th><th class="td_h">0</th><th class="td_t">1</th><th class="td_t">2</th>'+
				'<th class="td_t">3</th><th class="td_t">4</th><th class="td_t">5</th><th class="td_t">6</th><th class="td_t">7</th><th class="td_t">8</th><th class="td_t">9</th>'+
				'<th class="td_h">0</th><th class="td_t">1</th><th class="td_t">2</th><th class="td_t">3</th><th class="td_t">4</th><th class="td_t">5</th><th class="td_t">6</th>'+
				'<th class="td_t">7</th><th class="td_t">8</th><th class="td_t">9</th><th class="td_h">0</th><th class="td_t">1</th><th class="td_t">2</th><th class="td_t">3</th>'+
				'<th class="td_t">4</th><th class="td_t">5</th><th class="td_t">6</th><th class="td_t">7</th><th class="td_t">8</th><th class="td_t">9</th></tr><tr>'+
				'<th colspan="10">百位</th><th colspan="10">十位</th><th colspan="10">个位</th></tr>';
			}else{
				_html += '<tr><th rowspan="2">期号</th><th rowspan="2">开奖号码</th><th colspan="10">万位</th><th colspan="10">千位</th><th colspan="10">百位</th>'+
				'<th colspan="10">十位</th><th colspan="10">个位</th></tr><tr ><th class="td_h">0</th><th class="td_t">1</th><th class="td_t">2</th><th class="td_t">3</th>'+
				'<th class="td_t">4</th><th class="td_t">5</th><th class="td_t">6</th><th class="td_t">7</th><th class="td_t">8</th><th class="td_t">9</th><th class="td_h">0</th>'+
				'<th class="td_t">1</th><th class="td_t">2</th><th class="td_t">3</th><th class="td_t">4</th><th class="td_t">5</th><th class="td_t">6</th><th class="td_t">7</th>'+
				'<th class="td_t">8</th><th class="td_t">9</th><th class="td_h">0</th><th class="td_t">1</th><th class="td_t">2</th><th class="td_t">3</th><th class="td_t">4</th>'+
				'<th class="td_t">5</th><th class="td_t">6</th><th class="td_t">7</th><th class="td_t">8</th><th class="td_t">9</th><th class="td_h">0</th><th class="td_t">1</th>'+
				'<th class="td_t">2</th><th class="td_t">3</th><th class="td_t">4</th><th class="td_t">5</th><th class="td_t">6</th><th class="td_t">7</th><th class="td_t">8</th>'+
				'<th class="td_t">9</th><th class="td_h">0</th><th class="td_t">1</th><th class="td_t">2</th><th class="td_t">3</th><th class="td_t">4</th><th class="td_t">5</th>'+
				'<th class="td_t">6</th><th class="td_t">7</th><th class="td_t">8</th><th class="td_t">9</th></tr>'+
				'<tr class="table_tr_sp"><th >出现次数</th><th ></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th>'+
				'</tr><tr class="table_tr_sp"><th >最大遗漏</th><th ></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th><th colspan="10"></th>'+
				'</tr><tr class="table_tr_sp1"><th rowspan="2">期号</th><th rowspan="2">开奖号码</th><th class="td_h">0</th><th class="td_t">1</th><th class="td_t">2</th>'+
				'<th class="td_t">3</th><th class="td_t">4</th><th class="td_t">5</th><th class="td_t">6</th><th class="td_t">7</th><th class="td_t">8</th><th class="td_t">9</th>'+
				'<th class="td_h">0</th><th class="td_t">1</th><th class="td_t">2</th><th class="td_t">3</th><th class="td_t">4</th><th class="td_t">5</th><th class="td_t">6</th>'+
				'<th class="td_t">7</th><th class="td_t">8</th><th class="td_t">9</th><th class="td_h">0</th><th class="td_t">1</th><th class="td_t">2</th><th class="td_t">3</th>'+
				'<th class="td_t">4</th><th class="td_t">5</th><th class="td_t">6</th><th class="td_t">7</th><th class="td_t">8</th><th class="td_t">9</th><th class="td_h">0</th>'+
				'<th class="td_t">1</th><th class="td_t">2</th><th class="td_t">3</th><th class="td_t">4</th><th class="td_t">5</th><th class="td_t">6</th><th class="td_t">7</th>'+
				'<th class="td_t">8</th><th class="td_t">9</th><th class="td_h">0</th><th class="td_t">1</th><th class="td_t">2</th><th class="td_t">3</th><th class="td_t">4</th>'+
				'<th class="td_t">5</th><th class="td_t">6</th><th class="td_t">7</th><th class="td_t">8</th><th class="td_t">9</th></tr><tr><th colspan="10">万位</th>'+
				'<th colspan="10">千位</th><th colspan="10">百位</th><th colspan="10">十位</th><th colspan="10">个位</th></tr>';
			}
		$(".lm_con table").html(_html);
	},
	

	
	addEvent : function(){
		// 彩种大类
		$(".lm_menu_item").click(function(){
			if(!$(this).hasClass("active")){
				$(".lm_menu .lm_menu_item").removeClass("active");
				$(this).addClass("active");
				lotteryMissing.methodSet.getSecMenu($(this).attr("data-menu"));
				lotteryMissing.methodSet.genLotMissing(lotteryMissing.defaultShowLen);
				$(".lm_con_menu .lm_con_item").trigger("click");
			}
		});
		
		// 彩种具体类
		$("body").delegate(".lm_con_menu .lm_con_item","click",function(){
			lotteryMissing.initDom();
			$(".lm_con_menu .lm_con_item").removeClass("active");
			$(this).addClass("active");
			lotteryMissing.methodSet.genLotMissing(lotteryMissing.defaultShowLen);
		});
		
		// 查看的期数
		$(".lm_con_how span").click(function(){
			$(".lm_con_how span").removeClass("active");
			$(this).addClass("active");
			var index = $(this).index(".lm_con_how span");
			lotteryMissing.methodSet.getShowLen(index);
		});
	},
	
	methodSet : {
		getSecMenu : function(string){
			var menuArr = string.split(",");
			var _html = "";
			$.each(menuArr,function(i,item){
				_html += '<li class="lm_con_item">'+item+'</li>';
			});
			$(".lm_con .lm_con_menu").html(_html);
			$(".lm_con .lm_con_menu .lm_con_item:first-child").addClass("active");
		},
		
		getShowLen : function(index){
			switch(index){
				case 0:lotteryMissing.methodSet.ajaxData(15,lotteryMissing.methodSet.genLotMissing);break; 
				case 1:lotteryMissing.methodSet.ajaxData(30,lotteryMissing.methodSet.genLotMissing);break; 
				case 2:lotteryMissing.methodSet.ajaxData(50,lotteryMissing.methodSet.genLotMissing);break; 
				case 3:lotteryMissing.methodSet.ajaxData(100,lotteryMissing.methodSet.genLotMissing);break;  
			}
		},
		
		ajaxData : function(len,method){
			var lotClass = $(".lm_con_item.active").text();
			var rePointType = "";
			if(lotClass == "福彩3D") {
				rePointType = "低频彩";
			} else if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5") {
				rePointType = "十一选五";
			} else {
				rePointType = "时时彩";
			}
			var urlString = '/game/lottery/game-results?gametype=彩票/'+rePointType+"/"+$(".lm_con_item.active").text()+"&count="+len;
			$.ajax({
				type: 'GET',
				url: urlString,
				dataType: "json",
				cache:false,
				success: function(data) { 
					method(data);
				},
				error: function(e) {
					console.log(e);
				}
			});
		},
		
		// 生成对应期的开奖遗漏
		genLotMissing : function(data){
			console.log(data);
			var _html = "";
			var count_arr = new Array();
			lotteryMissing.item_arr_1 = [0,0,0,0,0,0,0,0,0,0]; //遗漏计数
			lotteryMissing.item_arr_2 = [0,0,0,0,0,0,0,0,0,0]; //遗漏计数
			lotteryMissing.item_arr_3 = [0,0,0,0,0,0,0,0,0,0]; //遗漏计数
			lotteryMissing.item_arr_4 = [0,0,0,0,0,0,0,0,0,0]; //遗漏计数
			lotteryMissing.item_arr_5 = [0,0,0,0,0,0,0,0,0,0]; //遗漏计数
			$.each(data, function(i,item) {
				var lotNum = item.detail.replace(/\[/g, '').replace(/\]/g, '').replace(/\,/g," ");
				var lotNum_arr = lotNum.split(" ");
				var losse_item_arr1 = lotteryMissing.methodSet.calLosse(lotNum_arr[0],lotteryMissing.item_arr_1); // 遗漏期数计算
//				console.log(losse_item_arr);
				_html += '<tr class="table_dsync_code"><td>'+item.issue+'</td><td>'+lotNum+'</td><td  class="wangwei"><span>'+losse_item_arr1[0]+'</span></td><td  class="wangwei"><span>1</span></td>'+
				'<td  class="wangwei"><span>2</span></td><td  class="wangwei"><span>3</span></td><td  class="wangwei"><span>4</span></td><td  class="wangwei"><span>5</span></td><td  class="wangwei"><span>6</span></td>'+
				'<td  class="wangwei"><span>7</span></td><td  class="wangwei"><span>8</span></td><td  class="wangwei"><span>9</span></td><td  class="qianwei"><span >0</span></td><td class="qianwei"><span>1</span></td>'+
				'<td class="qianwei"><span>2</span></td><td class="qianwei"><span>3</span></td><td class="qianwei"><span>4</span></td><td class="qianwei"><span>5</span></td><td class="qianwei"><span>6</span></td><td class="qianwei"><span>7</span></td>'+
				'<td class="qianwei"><span>8</span></td><td class="qianwei"><span>9</span></td><td class="baiwei"><span >0</span></td><td class="baiwei"><span>1</span></td><td class="baiwei"><span>2</span></td><td class="baiwei"><span>3</span></td>'+
				'<td class="baiwei"><span>4</span></td><td class="baiwei"><span>5</span></td><td class="baiwei"><span>6</span></td><td class="baiwei"><span>7</span></td><td class="baiwei"><span>8</span></td><td class="baiwei"><span>9</span></td>'+
				'<td class="shiwei"><span >0</span></td><td class="shiwei"><span>1</span></td><td class="shiwei"><span>2</span></td><td class="shiwei"><span>3</span></td><td class="shiwei"><span>4</span></td><td class="shiwei"><span>5</span></td>'+
				'<td class="shiwei"><span>6</span></td><td class="shiwei"><span>7</span></td><td class="shiwei"><span>8</span></td><td class="shiwei"><span>9</span></td><td class="gewei"><span >0</span></td>'+
				'<td  class="gewei"><span>1</span></td><td  class="gewei"><span>2</span></td><td  class="gewei"><span>3</span></td><td  class="gewei"><span>4</span></td><td  class="gewei"><span>5</span></td><td  class="gewei"><span>6</span></td>'+
				'<td  class="gewei"><span>7</span></td><td  class="gewei"><span>8</span></td><td  class="gewei"><span>9</span></td></tr>';
				$.each(losse_item_arr1, function(i,item) { // 万位
					_html+='<td  class="wangwei"><span>'+losse_item_arr1[0]+'</span></td>';
				});
				
				
				
			});
			$("table .table_dsync_code").remove();
			$(".lm_con table tr:nth-child(2)").after(_html);
			$("#canvas").css("height",$(".lm_con table").css("height"));
			$("#canvas").attr("height",parseInt($(".lm_con table").css("height")));
			lotteryMissing.methodSet.addNumActive();  // 给开奖号码后面对应的号码添加样式
		},
		
		calLosse : function(num,item_arr){
			$.each(item_arr, function(i1,item1) {
				if(num == i1)
					item_arr[i1] = 0
				else
					item_arr[i1]++;
			});
			return item_arr;
		},
		
		
		
		
		
		addNumActive : function(){
			var lotClassText = $(".lm_con_menu .lm_con_item").text();
			if(lotClassText=="山东11选5"||lotClassText=="广东11选5"||lotClassText=="江西11选5"||lotClassText=="多乐11选5"){
				
			}else{
				 $(".table_dsync_code").each(function(){
				 	$obj = $(this);
					var lotNumArr = $(this).find("td:nth-child(2)").text().split(" ");
//					console.log(lotNumArr);
					lotteryMissing.methodSet.genCodeActive(lotNumArr[0],$obj,"td.wangwei");
				 	lotteryMissing.methodSet.genCodeActive(lotNumArr[1],$obj,"td.qianwei");
				 	lotteryMissing.methodSet.genCodeActive(lotNumArr[2],$obj,"td.baiwei");
				 	lotteryMissing.methodSet.genCodeActive(lotNumArr[3],$obj,"td.shiwei");
				 	lotteryMissing.methodSet.genCodeActive(lotNumArr[4],$obj,"td.gewei");
				 });
			}
			lotteryMissing.canvas();      //canvas  画线
		},
		
		genCodeActive : function(text,$obj,sel){
			$obj.find(sel).each(function(){
				 if($(this).text()==text){
				 	$(this).find("span").addClass("active");
				 }
			});
		},
	},
	
	canvas : function(){
		var canvasTop = parseInt($("#canvas").offset().top);
		var canvasleft = parseInt($("#canvas").offset().left);
		
		lotteryMissing.getOffsetArr(canvasTop,canvasleft,$("td.wangwei .active"));
		lotteryMissing.getOffsetArr(canvasTop,canvasleft,$("td.qianwei .active"));
		lotteryMissing.getOffsetArr(canvasTop,canvasleft,$("td.baiwei .active"));
		lotteryMissing.getOffsetArr(canvasTop,canvasleft,$("td.shiwei .active"));
		lotteryMissing.getOffsetArr(canvasTop,canvasleft,$("td.gewei .active"));
	},
	
	getOffsetArr : function(canvasTop,canvasleft,$obj){
		var offsetArr = new Array();
		// 获取有active类的坐标
		$obj.each(function(){
			var offsetArrC = new Array();
			var x = parseInt($(this).offset().left)-canvasleft+10;
			var y =parseInt($(this).offset().top)-canvasTop+10;
			offsetArrC.push(x);offsetArrC.push(y);
			offsetArr.push(offsetArrC);
		});
		lotteryMissing.drawLine(offsetArr);
	},
	
	drawLine : function(offsetArr){
		var canvas = document.getElementById("canvas").getContext("2d");
		canvas.lineWidth = "1";
		canvas.strokeStyle = "#ed6d10";
		canvas.moveTo(offsetArr[0][0]-3,offsetArr[0][1]+3);
		$.each(offsetArr, function(i,item) {
			canvas.lineTo(item[0]-3,item[1]+3);
			canvas.stroke();
			canvas.moveTo(item[0]-3,item[1]+4);
		});
		canvas.stroke();
	},
};
lotteryMissing.init();
