var personCenter = {
	init : function(){
		this.pageStyleInit();
		this.addEvent();
		var url = window.location.href;
		var urlArr = url.split("?");
		var page_name = decodeURI(urlArr[1]);
		$("#app_dom").load("/home/personCenter/"+page_name+".html");
		$("."+page_name+"").addClass("active");
	},
	pageStyleInit : function() {
		$(".con_menu .con_menu_item").removeClass("active");
		$($(".con_menu .con_menu_item")[4]).addClass("active");
	},
	
	addEvent : function(){
		$("#date1").change(function(){
			$("#date2").val($(this).val());
		});
		
		$("#date2").change(function(){
			var date2 = $(this).val();
			var date1  = $("#date1").val();
			date2Arr = date2.split("-");
			date1Arr = date1.split("-");
			if(date2Arr[0]>=date1Arr[0]){
				if(date2Arr[1]>=date1Arr[1]){
					if(date2Arr[2]>=date1Arr[2]){
					}else{
						$("#date2").val($("#date1").val());
					}
				}else{
					$("#date2").val($("#date1").val());
				}
			}else{
				$("#date2").val($("#date1").val());
			}
		});
		
		
//		$("body").delegate("#page_table tr:gt(0)","click",function(){
//			$(".popus_bg").css("display","block");
//			$(".game_record_popus").css("display","block");
//			personCenter.popusInit();
//		})
		
		$(window).resize(function(){
			personCenter.popusInit();
		});
		
		$(".dm_con_menu .dm_con_m_i").click(function(){
			$(".dm_con_menu .dm_con_m_i").removeClass("active");
			$(this).addClass("active");
			var index = $(this).index(".dm_con_menu .dm_con_m_i");
			switch (index){
				case 0:
					$("#app_dom").load("/home/personCenter/DataManagement.html");
					break;
				case 1:
					$("#app_dom").load("/home/personCenter/bankCardMan.html");
					break;
				case 2:
					$("#app_dom").load("/home/personCenter/gameRecord.html");
					break;
				case 3:
					$("#app_dom").load("/home/personCenter/accoundChangeRecorde.html");
					break;
				case 4:
					$("#app_dom").load("/home/personCenter/reportQuery.html");
					break;
				case 5:
					$("#app_dom").load("/home/personCenter/thisWebsiteTransfer.html");
					break;
				case 6:
					$("#app_dom").load("/home/personCenter/infomation.html");
					break;
				case 7:
					$("#app_dom").load("/home/personCenter/websiteInfo.html");
					break;
			}
		});
	},
	
	popusInit : function(){
		var height = document.body.scrollHeight;
		$(".popus_bg").css("height", height);
		var width = parseInt($("body").css("width"));
		var popusWidth = parseInt($(".game_record_popus").css("width"));
		$(".game_record_popus").css("left",(width-popusWidth)/2+"px");
	},
	
	allAjaxSub : function(params,urlString,method){
		console.log(params);
			$.ajax({
				type: 'POST',
				url: urlString,
				data:params,
				dataType: "json",
				success: function(data) {
					method(data);
				},
				error: function(e) {
					console.log(e);
				}
			});
		},
};

personCenter.init();


Date.prototype.format = function(format) {
       var date = {
              "M+": this.getMonth() + 1,
              "d+": this.getDate(),
              "h+": this.getHours(),
              "m+": this.getMinutes(),
              "s+": this.getSeconds(),
              "q+": Math.floor((this.getMonth() + 3) / 3),
              "S+": this.getMilliseconds()
       };
       if (/(y+)/i.test(format)) {
              format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
       }
       for (var k in date) {
              if (new RegExp("(" + k + ")").test(format)) {
                     format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
              }
       }
       return format;
}