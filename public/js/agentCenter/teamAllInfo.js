var teamAllInfo = {
	init : function(){
		this.addEvent();
	},
	
	addEvent : function(){
		//  菜单点击事件
		$(".ac .dm_s_m_i").click(function(){
			if(!$(this).hasClass("active")){
				teamAllInfo.method.changeClass($(".ac .dm_s_m_i"),$(this));
				var index = $(this).index(".ac .dm_s_m_i");
				teamAllInfo.method.divIsShow(index);
			}
		});
		$(document).keydown(function(e){
			 if(e.keyCode == 13){
			 	$(".ac_require_btn").trigger("click");
			 }
		});
	},
	method : {
		changeClass : function($faSel,$obj){
			$faSel.removeClass("active");
			$obj.addClass("active");
		},
		
		divIsShow : function(index){
			$(".ac .team_list").css("display","none");
			if(index == 0){
				$(".ac .team_total_list").css("display","block");
			}else if(index == 1){
				$(".ac .team_lot_list").css("display","block");
			}else{
				$(".ac .team_game_list").css("display","block");
			}
		},
	},
};
teamAllInfo.init();
