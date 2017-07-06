var infomation = {
	init : function(){
		this.addEvent();
	},
	
	addEvent : function(){
		
		$(".dm_second_menu .dm_s_m_i").click(function(){
			$(".dm_second_menu .dm_s_m_i").removeClass("active");
			$(this).addClass("active");
			var index = $(this).index(".dm_second_menu .dm_s_m_i");
			switch (index){
				case 0:
					$(".dm_container .table").css("display","block");
					$(".dm_container .mod_pwd").css("display","none");
					break;
				case 1:
					$(".dm_container .table").css("display","block");
					$(".dm_container .mod_pwd").css("display","none");
					break;
				case 2:
					$(".dm_container .table").css("display","none");
					$(".dm_container .mod_pwd").css("display","block");
					break;
			}
		});
		
		// 删除按钮点击
		$("body").delegate(".table .td_btn","click",function(e){
			e.stopPropagation();
			$(this).parent().parent().remove();
		});
	},
};
infomation.init();
