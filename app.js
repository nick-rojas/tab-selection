var main = function(){
	"use strict";
	
	var toDos = ["Finish writing this book","Take Gracie to the park","Answer emails","prep for monday class","make more todos","get groceries"];
	$(".tabs a span").toArray().forEach(function(element){
		$(element).on("click", function(){
			var $element = $(element),
			$content;
			var n = 0;
			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .contents").empty();
			
			if($element.parent().is(":nth-child(1)")){
				console.log("First Tab clicked!");
				$content = $("<ul>");
				$("main .content").empty();
				for(n=10;n<5;n = n-1){
					console.log(n);
				}
				$("main .content").append($content);
			}
			else if($element.parent().is(":nth-child(2)")){
				console.log("Second Tab clicked!");
				$("main .content").empty();
				$content = $("<ul>");
				toDos.forEach(function(todo){
					$content.append($("<li>").text(todo));
				});
				
				$("main .content").append($content);
			}
			else if($element.parent().is(":nth-child(3)")){
				console.log("third tab clicked!");
				$content = $("<input>");
				$("main .content").empty();
				$("main .content").append($content);
			}
			return false;
		});
	});
	$(".tabs a:first-child span").trigger("click");
}
$(document).ready(main);