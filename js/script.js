$(document).ready(function(){
  var number = "";  
  var firstNumber = "";
  var operator = "";
  var display = $("#total");
  var counter = 0;

  function checkLength(number){
    if(number.length > 6){
      display.text(number.substr(number.length - 6, 6));
    }  
  }

  function reset() {
    firstNumber = display.text();
    number = "";    
    operator = "";
    counter ++;
  }

  function total(){
    if(operator === "+"){
      number = parseFloat(firstNumber) + parseFloat(number);
    }else if(operator === "-"){
      number = parseFloat(firstNumber) - parseFloat(number); 
    }else if(operator === "/"){
      number = parseFloat(firstNumber) / parseFloat(number);  
    }else if(operator === "*"){
      number = parseFloat(firstNumber) * parseFloat(number);
    }
    display.text(number);
    if(display.text().length > 6){
      display.text("Err");
    }
    reset();
  }

  $("#buttons .number").click(function(){
    number += $(this).text();
    display.text(number);
    checkLength(number);
  });

  $("#buttons .operation").click(function(){
    if(operator === "" && number === "" && firstNumber === ""){
      operator = "";
    }else if(operator === ""){
      operator = $(this).text();
      if(counter < 1){
        firstNumber = number;
        number = "";
      }
    }else if(number === ""){
      operator = $(this).text();
    }else{
      total();
      operator = $(this).text();
      firstNumber = display.text();    
    }
  });

  $("#buttons .equals").click(function(){
    if(firstNumber !== "" && number !== ""){
      total();
    }  
  });

  $("#buttons .clearall").click(function(){
    display.text("0");
    firstNumber = "";
    number = "";
    operator = "";
    counter = 0;
  });

  $("#buttons .clear").click(function(){
    number = "";
    display.text("0");
  });

  $("#buttons .percent").click(function(){
    if(firstNumber !== ""){
      number = parseInt(firstNumber) * parseInt(number) / 100;
      display.text(number);
    }else if(number !== ""){
      number = parseFloat(number) / 100;
      display.text(number);
    }else{
      display.text();
    }
  });
    
  $("#buttons .decimal").click(function(){
    if(!number.includes('.')){
      number += $(this).text();
      display.text(number);  
      checkLength(number);
    }      
  });  
});

  

    





