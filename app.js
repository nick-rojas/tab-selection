var main = function(){
	"use strict";
	var toDos = ["Finish writing this book","Take Gracie to the park","Answer emails","prep for monday class","make more todos","get groceries"];
	var makeTabActive = function(tabNumber){
		var tabSelector = ".tabs a:nth-child("+tabNumber+") span";
		$(".tabs span").removeClass("active");
		$(tabSelector).addClass("active");
		$("main .content").empty();
		
	};


	$(".tabs a:nth-child(1)").on("click", function(){
		makeTabActive(1);
		return false;
	});
	$(".tabs a:nth-child(2)").on("click", function(){
		makeTabActive(2);
		return false;
	});
	$(".tabs a:nth-child(3)").on("click", function(){
		makeTabActive(3);
		return false;
	});
	$(".tabs a:first-child span").trigger("click");
}
$(document).ready(main);