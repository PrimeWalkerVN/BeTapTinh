
function checkAvalid(frm){ // check 2 input numbers is valid
 
   if(frm.FirstNumber.value== "" ||frm.SecondNumber.value=="")
   {
      let Notify=document.querySelector(".Notify"); // Notify
      Notify.querySelector("p").innerHTML="Chưa nhập đủ 2 số hợp lệ!";   
   }
   else {
      
      let Notify=document.querySelector(".Notify"); // Notify
      var number1 = frm.FirstNumber.value; // get fisrt number
      var number2 = frm.SecondNumber.value;// get second number

      if(isNaN(number1))
      {
         Notify.querySelector("p").innerHTML="Giá trị nhập ở <i> Số ô thứ nhất </i> không phải là số!"
      } else
      if(isNaN(number2))
      {
         Notify.querySelector("p").innerHTML="Giá trị nhập ở <i> Số ô thứ hai </i> không phải là số!"
      }else
      Notify.querySelector("p").innerHTML="Đã nhập đủ 2 số hợp lệ!";
   }  
   
}

    
function commute(frm) {

   if(document.querySelector('input[name="Operator"]:checked')) //Check which radio button actived
   {
      let Notify=document.querySelector(".Notify"); // Notify
      Notify.querySelector("p").innerHTML="đã chọn phép tính!";  
      let operator=document.querySelector('input[name="Operator"]:checked').value; // Get operator from button radio
      console.log(operator);
      var number1 = parseFloat(frm.FirstNumber.value); // get fisrt number
      var number2 = parseFloat(frm.SecondNumber.value);// get second number
      var result;
     switch (operator)
     {
          case "Summation":
          result = number1+number2; 
             break;
          case "Subtraction":
             result = number1-number2; 
             break;
          case "Multiplication":
             result = number1*number2; 
             break;
          case "Division":
             result = number1/number2; 
             break;              
     }
      document.getElementById("ResultNumber").value=result;
      
   } else 
      {
         let Notify=document.querySelector(".Notify");
         Notify.querySelector("p").innerHTML="Chưa chọn phép tính!"          
      }
  
}