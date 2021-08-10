$(document).ready( function () {

	$('.clickpopa').on('click', function(e){
		$('.clickpopa').parent().removeClass('active');
		$(this).parent().addClass('active');
	   	$('.hide_tab').show();
	  	$('.hide_tab').hide();

	  	var t = $(this).attr('data-attr');
		$("#pop_"+t).show();
	    
	});

	$('.search_btn').on('click', function() {
		event.stopPropagation();
		$('.serach_box').show();
	});

	$(' #addgroups').on('click', function() {
		//event.stopPropagation();
	//	$(' .add_group_pop').show();
	});
	var leftgetvelue;
	var rightgetvelue;

	// $('.getvelue li').on('click', function() {
	$(document).on('click','.getvelue li', function() {
		$(".getvelue li").removeClass('active');
		leftgetvelue = " ";
		rightgetvelue = " ";
		$(this).addClass('active');
  			 if ($(this).hasClass('lefttext')) {
 				 leftgetvelue =	$(this).text(); 
 			 }else{
 				 rightgetvelue = $(this).text(); 
 			 	
 			 }
 			 console.log(rightgetvelue,"ttttt",leftgetvelue)
 		 
	});
	$('.clickarrow').on('click', function() {  
	 // console.log(rightgetvelue,"ttttt",leftgetvelue)	
	  		if (leftgetvelue !== undefined && leftgetvelue !== " " || rightgetvelue !== undefined && rightgetvelue !== " ") {
 	  		
		 	if ($(this).hasClass('arrow_1') && leftgetvelue !== undefined) {
		 		var temp = $("#rightdata li").length
		 		console.log(temp)
  		 		if (temp == 0) {
  		 			temp++;
		 			$('#rightdata').append('<li>');
		 		}
 				$("#rightdata li").each(function(i){
 					console.log(i)
 				   	 $(this).attr("id","set"+i);
				   	 if (temp-1 == i) {
  				   	 	var leftdiv = $('#rightdata');
 		  	  	 			leftdiv.append('<li>')
 		  	  	 			i++
 		  	  	 			$('#rightdata').find("li").last().attr("id","set"+i)
 		  	  	 			$("li#set"+i).text(leftgetvelue);
 		  	  	 			$("li#set"+i).attr("class","righttext");
 		  	  	 			rightgetvelue = undefined;
 		  	  	 			leftgetvelue = " ";
 				   	 }

				  });
 						$("#leftdata li").each(function(i){
  		  	  	 					$("#leftdata li.active").remove();
 		  	  	 			});
 			 	console.log("====///left")
 			 }else if ($(this).hasClass('arrow_2') && rightgetvelue !== undefined) {
 			 	console.log("====right")
		 		var temp = $("#leftdata li").length 
 		 		if (temp == 0) {
 		 			temp++;
		 			$('#leftdata').append('<li>');
		 		} 
 				$("#leftdata li").each(function(i){
 				   	 $(this).attr("id","ret"+i);
				   	 if (temp-1 == i) {
  				   	 	var leftdiv = $('#leftdata');
 		  	  	 			leftdiv.append('<li>')
 		  	  	 			i++
 		  	  	 			$('#leftdata').find("li").last().attr("id","ret"+i)
 				   			$("li#ret"+i).attr("class","lefttext");
 		  	  	 			$("li#ret"+i).text(rightgetvelue)
 		  	  	 			rightgetvelue = undefined;
 		  	  	 			rightgetvelue = " ";
 				   	 }
				  });
 				$("#rightdata li").each(function(i){
  		  	  	 					$("#rightdata li.active").remove();
 		  	  	 			});
 			 	
 			 } 
 			}

 			 
 			 
		 
	});

	$('.canadd').on('click', function() {
	//	$(' .add_group_pop').hide();
	});

	//  $('.asset_nav[type="radio"]').click(function(){
	//     var inputValue = $(this).attr("value");
	//     var targetBox = $("#inputtab_" + inputValue);
	//     $(".asset_tab").not(targetBox).hide();
	//     $(targetBox).show();

	// });
	 $('.info_btn').click( function() {
	 	$('.info_pop').remove();
	$(this).append('<div class="info_pop"><div class="info_pop_content">\
		<div class="info_head">Lorem Ipsum</div>\
		<div class="info_content">\
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\
		</div></div>')
	});

	$('#addquestions').on('click', function() {
		event.stopPropagation();
		$('.question_bank_Inner').show();
		$('.question_bank_list').hide();
	});
	$('.btn_feedback_cancel').on('click', function() {
		event.stopPropagation();
		$('.question_bank_Inner').hide();
		$('.question_bank_list').show();
	});

	$('#addquiz').on('click', function() {
		event.stopPropagation();
		// $('.quiz_Inner').show();
		// $('.quiz_list').hide();
	});

	// clone PopUp
	$('.clone').on('click', function() {
		$('.clone').removeClass('active_clone');
		$(this).addClass('active_clone');
	})
	$('.clone_pop').on('click', function() {
		// $('.clone').removeClass('.active_clone');
		$('.confirmClonewrap').fadeIn();
		$('.overlay').fadeIn();
	})
	$('.btncloneCancel').on('click', function() {
		$('.confirmClonewrap').fadeOut();
		$('.overlay').fadeOut();
		$('.clone').removeClass('active_clone');
	})



	$(document).on('click', function() {
		$('.serach_box').hide();
		//$('.serach_box, .add_group_pop').hide();
		$('.info_pop').remove();
	});
		// stop bubbling
	$('.serach_box, .add_group_pop, .canGroupadd, .info_btn').on('click', function() {
		event.stopPropagation();
	});

	
});
