"use strict";

var main = function(){
	var $line, $content;
	function writeLine(number){
		$line = $("<span>").text(number + " ");
		$("body").append($line);
	}

	function newline(){
		$content = $("<p>");
		$("body").append($content);
	}


	function fizzbuzz_1(){
		for(var x = 1; x <=100 ; x++){
			if(x%15==0){
				writeLine("Fizzbuzz");
			}
			else if (x%3==0){
				writeLine("Fizz");
			}
			else if (x%5==0){
				writeLine("Buzz");
			}
			else{
				writeLine(x);
			}
		}
		newline();
	}

	function fizzbuzz_2(start, end){
		for(var x = start; x <=end ; x++){
			if(x%15==0){
				writeLine("Fizzbuzz");
			}
			else if (x%3==0){
				writeLine("Fizz");
			}
			else if (x%5==0){
				writeLine("Buzz");
			}
			else{
				writeLine(x);
			}
		}
		newline();
	}

	function fizzbuzz_3(arr){
		var length = arr.length;

		for(var i = 0; i < length; i++){
			if(arr[i]%15==0){
				writeLine("Fizzbuzz");
			}
			else if (arr[i]%3==0){
				writeLine("Fizz");
			}
			else if (arr[i]%5==0){
				writeLine("Buzz");
			}
			else{
				writeLine(arr[i]);
			}
		}
		newline();
	}

	function fizzbuzz_4(obj){
		for(var x = 1; x <=100 ; x++){
			if(x%15==0){
				writeLine(obj.divisibleByThree + obj.divisibleByFive);
			}
			else if (x%3==0){
				writeLine(obj.divisibleByThree);
			}
			else if (x%5==0){
				writeLine(obj.divisibleByFive);
			}
			else{
				writeLine(x);
			}
		}
		newline();
	}


	function fizzbuzz_5(arr,obj){
		var length = arr.length;
		for(var i = 0; i < length; i++){
			if(arr[i]%15==0){
				writeLine(obj.divisibleByThree + obj.divisibleByFive);
			}
			else if (arr[i]%3==0){
				writeLine(obj.divisibleByThree);
			}
			else if (arr[i]%5==0){
				writeLine(obj.divisibleByFive);
			}
			else{
				writeLine(arr[i]);
			}
		}
		newline();
	}



	fizzbuzz_1();
	fizzbuzz_2(200,300);
	fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115])
	fizzbuzz_4({divisibleByThree: "foo", divisibleByFive: "bar"})
	fizzbuzz_5([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115],{divisibleByThree: "foo", divisibleByFive: "bar"})
}
$(document).ready(main);