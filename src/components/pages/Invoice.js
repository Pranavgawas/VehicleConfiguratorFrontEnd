import React from "react";
import Seatbelt from "./Seatbelt";
function Invoice() {

   const model_price =  sessionStorage.getItem("price");

  const quantity =  sessionStorage.getItem("quantity");

  var sbvalue = getNumber(sessionStorage.getItem("Seat_Belt"))
  var airbagvalue = getNumber(sessionStorage.getItem("Air_Bag"))
  
  model_price = model_price + sbvalue + airbagvalue;
  
  const finalprice = model_price * quantity;

  function getNumber(param){
    const Seat_Belt_Final_value = sessionStorage.getItem(param);
    var sbvalue = Seat_Belt_Final_value.split("₹");
  
     sbvalue =  sbvalue[1].trim();
     console.log(sbvalue);
     sbvalue = parseFloat(sbvalue);
  
    return sbvalue;
  }



  return (
    <>
      
      <div className="container">
        <div className="card mt-4">
          <div className="card-body">
            <h5>Invoice</h5>
            <p>{sbvalue}</p>
            <p>{sessionStorage.getItem("Air_Bag")}</p>
           <p>{finalprice}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invoice;
