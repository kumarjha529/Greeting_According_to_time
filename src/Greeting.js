import React from "react";

 function Greeting () {

let curdate = new Date();
curdate = curdate.getHours();
let message = "";
const colour = { }; 


if (curdate >=1 && curdate < 12){
    message = " Good Morning  ..!!! ";
    colour.color = "yellow ";
  }

  else if ( curdate >= 12 && curdate <19 ){
    message = " Good Afternoon ...!!!  ";
    colour.color = "orange";
  }
  
   else {
    message = " Good Night , Sleep Tight ..! शुभ रात्रि  ";
    colour.color = "#F5F5DC";
  }

  return (
      <>
 {/* <h3>   This will Greet You  according  to Your System  Time </h3> */}

  <div className ="xyz">
    <h1>  Mr.  V.K.Jha  Wishing  uhh <span style={colour}>{message} </span> </h1>
  </div>

      </>
  )
}

export default Greeting;