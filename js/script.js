

$(document).ready(function(){
  var number = "";	
  var firstNumber = "";
  var operator = "";
  var display = $("#total");
  var counter = 0;

  function reset() {
  	firstNumber = display.text();
    number = "";  	
    operator = "";
    counter ++;
  }

  $("#buttons #number").click(function(){
    number += $(this).text();
    display.text(number);
  });

  $("#buttons #operation").click(function(){
    operator = $(this).text();
    if(counter < 1){
      firstNumber = number;
      number = "";
    }

  });

  $("#buttons #equals").click(function(){
    if(operator === "+"){
    	display.text(parseInt(firstNumber) + parseInt(number));
        reset();
    }else if(operator === "-"){
        display.text(parseInt(firstNumber) - parseInt(number));
        reset();
    }else if(operator === "/"){
    	display.text(parseInt(firstNumber) / parseInt(number));
    	reset();
    }else if(operator === "*"){
    	display.text(parseInt(firstNumber) * parseInt(number));
    	reset();
    }

  });

});


  

    





