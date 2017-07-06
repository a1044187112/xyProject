var promotions = {
	init: function() {
		this.addEvent();
		promotions.pageStyleInit();
		
	},
	addEvent: function() {
		//彩票点击事件
		$(".pro_menu .pro_menu_item").click(function() {
			if(!$(this).hasClass("active")) {
				$(".pro_menu .pro_menu_item").removeClass("active");
				$(this).addClass("active");
			}
		});

		// 具体活动点击事件
		$(".pro_ac_info .p_a_i").click(function() {
			promotions.popusBgInit($(".activity_popus"));
			promotions.initPopusData($(this));  // 弹窗显示数据
		});

		// 弹窗关闭按钮
		$(".activity_popus .activety_popus_close").click(function() {
			promotions.closePopus($(".activity_popus"));
		});
		$(".activity_popus .popus_footer .popus_footer_close").click(function() {
			promotions.closePopus($(".activity_popus"));
		});
	},

	popusBgInit: function($this) {
		var height = document.body.scrollHeight;
		$(".popus_bg").css("height", height).css("display", "block");
		$this.css("display", "block");
	},
 
	closePopus: function($this) {
		$(".popus_bg").css("display", "none");
		$this.css("display", "none");
	},

	pageStyleInit: function() {
		$(".con_menu .con_menu_item").removeClass("active");
		$($(".con_menu .con_menu_item")[4]).addClass("active");
	},
	
	initPopusData : function($obj){
		$(".activity_popus .intro").text($obj.find("div").attr("data-title"));
		var activityIntro = $obj.find("img").attr("data-intro");
		var aiArr = activityIntro.split("|");
		$(".activity_popus .a_p_info .a_p_i .a_p_i_value").each(function(i,item){
			$(this).text(aiArr[i]);
		});
		var activetyMoreTitle = $obj.find("img").attr("data-table-title");
		if(activetyMoreTitle){
			$(".activity_popus .table_f").css("visibility","visible");
			var amtArr = activetyMoreTitle.split(",");
			var title_html = "<tr>";
			$.each(amtArr, function(i,item) {
				title_html += '<th>'+item+'</th>'
			});
			title_html += '</tr>';
			$(".activity_popus table_f table").html(title_html);
			var activetyMoreData = $obj.find("img").attr("data-table-data");
			var amArr = activetyMoreData.split("|");
			var data_html = "";
			$.each(amArr, function(i,item) {
				data_html += "<tr>";
				var itemArr = item.split(",");
				$.each(itemArr, function(i,item) {
					data_html += '<td>'+item+'</td>';
				});
				data_html += "</tr>";
			});
			$(".activity_popus table_f table tr:first-child").after(title_html);
		}else{
			$(".activity_popus .table_f").css("visibility","hidden");
		}
	},
};
promotions.init();