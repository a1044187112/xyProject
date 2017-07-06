var pag = {
	init : function(data){
		this.createDom(data.length,data.active);
		this.addEvent(data.method);
	},
	
	addEvent : function(method){
		// 点击页数
		$("body").undelegate("#pag .page_num_item","click");
		$("body").delegate("#pag .page_num_item","click",function(){
			if(!$(this).hasClass("active")){
				$("#pag .page_num_item").removeClass("active");
				$(this).addClass("active");
				var index = $(this).text();
				method(index);
			}
		});
		
		//点击上一页  
		$("body").undelegate("#pag .last_page","click");
		$("body").delegate("#pag .last_page","click",function(){
			var Activetext = $("#pag .page_num_item.active").text();
			if(Activetext != 1){
				$("#pag .page_num_item.active").removeClass("active").prev().addClass("active");
			}
		});
		
		// 点击下一页
		$("body").undelegate("#pag .next_page","click");
		$("body").delegate("#pag .next_page","click",function(){
			var Activetext = $("#pag .page_num_item.active").text();
			var totalPag = $("#pag .next_page").prev(".page_num").find(".total_pag").text();
			if(Activetext != totalPag){
				$("#pag .page_num_item.active").removeClass("active").next().addClass("active");
			}
		});
		
		// 点击跳转
		$("body").undelegate("#pag .jump_page","click");
		$("body").delegate("#pag .jump_page","click",function(){
			var jumpPage = $("#pag .page_num_item.active").text();
			var totalPag = $(".page_num").find(".total_pag").text();
			if(jumpPage <= totalPag && jumpPage >= 1){
//				$("#pag .page_num_item.active").removeClass("active").next().addClass("active");
			}
		});
	},
	
	createDom : function(i,activeIndex){
		var _html = '';
		if(i>=9){
			_html += "<span class='last_page'>上一页</span><div class='page_num'>";
			if(activeIndex>3&&activeIndex<(i-3)){
				_html += "<span class='page_num_item'>"+(activeIndex-3)+"</span><span class='page_num_item'>"+(activeIndex-2)+"</span><span class='page_num_item'>"+(activeIndex-1)+"</span>"+
				"<span class='page_num_item active'>"+activeIndex+"</span><span class='page_num_item'>"+(activeIndex-0+1)+"</span><span class='page_num_item'>"+(activeIndex-0+2)+"</span>"+
				"<span class='page_num_item'>"+(activeIndex-0+3)+"</span><span class='page_num_item'>...</span><span class='page_num_item total_pag'>"+i+"</span></div>";
			}else if(activeIndex>=(i-3)){
				_html += "<span class='page_num_item'>1</span><span class='page_num_item'>...</span><span class='page_num_item'>"+(i-6)+"</span>"+
				"<span class='page_num_item'>"+(i-5)+"</span><span class='page_num_item'>"+(i-4)+"</span><span class='page_num_item'>"+(i-3)+"</span>"+
				"<span class='page_num_item'>"+(i-2)+"</span><span class='page_num_item'>"+(i-1)+"</span><span class='page_num_item total_pag'>"+i+"</span></div>";
			}else{
				_html += "<span class='page_num_item'>1</span><span class='page_num_item'>2</span><span class='page_num_item'>3</span>"+
				"<span class='page_num_item'>4</span><span class='page_num_item'>5</span><span class='page_num_item'>6</span>"+
				"<span class='page_num_item'>7</span><span class='page_num_item'>...</span><span class='page_num_item total_pag'>"+i+"</span></div>";
			}
			_html += "<span class='next_page' data-total-page='100'>下一页</span><input class='input_page_num' type='number'  /><span class='jump_page'>跳转</span>";
		}else{
			_html += "<span class='last_page'>上一页</span><div class='page_num'>";
			for(var j = 1; j <= i; j++){
				_html += "<span class='page_num_item'>"+j+"</span>";
			}
			_html += "<span class='next_page' data-total-page='"+i+"'>下一页</span><input class='input_page_num' type='number' /><span class='jump_page'>跳转</span>";
		}
		$("#pag").children().remove();
		$("#pag").append(_html);
		$(".page_num_item").each(function(){
			if($(this).text() == activeIndex){
				$(this).addClass("active");
			}
		});
		pag.domCss();
	},
	
	domCss : function(){
		$("#pag span").css({display:"inline-block",fontsize:"14px",color:"#696969",border:"1px solid #c6c6c6",height:"22px",lineHeight:"22px",
			padding:"0 10px",marginRight:"4px",cursor:"pointer"});
		$("#pag div").css({display:'inline-block'});
		$("#pag input").css({display:"inline-block",width:"40px",height:"20px",marginRight:"4px",textAlign:"center"});
		
	},
};

