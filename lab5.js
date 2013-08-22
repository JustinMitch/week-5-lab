				// mouse over hover up and down float
				$("#nav li").mouseover(function(){
				$(this).animate({ "margin-top":'-10px'}, 500); });
				
				
				$("#nav li").mouseleave(function(){
				$(this).animate({ "margin-top":'0px'}, 500); });
				
				//show and hide specific navs
				function changenav1() {
						$("#nav1").show(500);
						$("#nav2,#nav3,#nav4").hide(500);
						}
						$("#btnnav1").on("click", changenav1 );
					
				function changenav2() {
						$("#nav2").show(500);
						$("#nav1,#nav3,#nav4").hide(500);
						}
						$("#btnnav2").on("click", changenav2);
						
				function changenav3() {
						$("#nav3").show(500);
						$("#nav1,#nav2,#nav4").hide(500);
						}
						$("#btnnav3").on("click", changenav3 );	
				
				function changenav4() {
						$("#nav4").show(500);
						$("#nav1,#nav2,#nav3").hide(500);
						}
						$("#btnnav4").on("click",changenav4);
					
				
				
	

				//jquery adding the content box to multiple classes
				$("#nav1,#nav2,#nav3,#nav4").addClass("contentBox");
				
				
