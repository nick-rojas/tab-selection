var main = function(){
	"use strict";
	var toDos = ["Finish writing this book","Take Gracie to the park","Answer emails","prep for monday class","make more todos","get groceries"];
	$(".tabs a span").toArray().forEach(function(element){
		$(element).on("click", function(){
			var $element = $(element),
			$content;
			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			
			if($element.parent().is(":nth-child(1)")){
				$("main .content").empty();
				console.log("First Tab clicked!");
				$content = $("<ul>");
					for (var i = toDos.length - 1; i >= 0; i--) {
						$content.append($("<li>").text(toDos[i]));
					};
				$("main .content").append($content);
				return false;
			}
			else if($element.parent().is(":nth-child(2)")){
				console.log("Second Tab clicked!");
				$("main .content").empty();
				$content = $("<ul>");
				toDos.forEach(function(todo){
					$content.append($("<li>").text(todo));
				});
				
				$("main .content").append($content);
				return false;
			}
			else if($element.parent().is(":nth-child(3)")){
				console.log("Tags tab clicked!");
				$("main .content").empty();
				var tags = [{"name":"writing", "toDos":["finish book", "prep for class monday"]},{"name": "chores", "toDos":["Get Groceries"]}];
				tags.

				
				return false;
			}
			else if($element.parent().is(":nth-child(4)")){
				console.log("Add tab clicked!");
				$("main .content").empty();
				$content = $("<ul>");
				var $input = $("<input>"),
				$button = $("<button>").text("+");
				$input.append($button);
				
				$("main .content").append($content);
				return false;
			}
			return false;
		});

	});
	$(".tabs a:first-child span").trigger("click");
}
$(document).ready(main);