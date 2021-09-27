
import { useState } from 'react';
import './App.css';





function App() {
  const [card_number, setCard_number] = useState("")
  const [card_holder, setCard_holder] = useState("")
  const [cvv, setcvv] = useState("")
  const [expMm, setExpMm] = useState("")
  const [ExpYY, setExpYY] = useState("")
  const [animationTurn, setAnimationTurn] = useState("front") 

  function isNumeric(str) {
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

  const handleChange=(input,event)=>{
    if(input==="card_number"){
      if(event.target.value==="")setCard_number("") 
     else if (isNumeric(event.target.value))  setCard_number(event.target.value) //force the input to be Number
    
    }
    else if(input==="card_holder"){
      setCard_holder(event.target.value);
    }else if(input==="cvv"){
      if(event.target.value==="")setcvv("") 
      else if (isNumeric(event.target.value))  setcvv(event.target.value) //force the cvv input to be Number
    }else if(input==="expMm"){
      setExpMm(event.target.value)
    }else if(input==="ExpYY"){
      setExpYY(event.target.value)
    }
    
  }

  const Generate_space_cart_number=(number)=>{
   
    return number.match(/.{1,4}/g).join(' ')
    //Put space Between 4 numbers
  }

  const OnMouseEnter=()=>{
 
    setAnimationTurn('back')
  }

  const OnMouseLeave=()=>{
    setAnimationTurn('front')
  }

  return (

      
<div className="container">

<div className="card-container">

    <div className="front" style={animationTurn==="front"? {transform: "perspective(1000px) rotateY(0deg)"}:{transform: 'perspective(1000px) rotateY(-180deg)'}}>
        <div className="image">
            <img src="image/chip.png" alt=""/>
            <img src="image/visa.png" alt=""/>
        </div>
        <div className="card-number-box">{card_number ===""?"##############": Generate_space_cart_number(card_number)}</div>
        <div className="flexbox">
            <div className="box">
                <span>card holder</span>
                <div className="card-holder-name">{card_holder ===""?"full name":card_holder}</div>
            </div>
            <div className="box">
                <span>expires</span>
                <div className="expiration">
                    <span className="exp-month">{expMm ===""?"MM":expMm}/</span>
                    <span className="exp-year">{ExpYY ===""?"YY":ExpYY}</span>
                </div>
            </div>
        </div>
    </div>

    <div className="back"  style={animationTurn==="front"? {transform: 'perspective(1000px) rotateY(180deg)'}:{transform: 'perspective(1000px) rotateY(0deg)'}}>
        <div className="stripe"></div>
        <div className="box">
            <span>cvv</span>
            <div className="cvv-box">{cvv}</div>
            <img src="image/visa.png" alt=""/>
        </div>
    </div>

</div>

<form action="">
    <div className="inputBox">
        <span>card number</span>
        <input value={card_number} onChange={(event)=> handleChange("card_number",event)} type="text" maxLength="16" className="card-number-input"/>
    </div>
    <div className="inputBox">
        <span>card holder</span>
        <input value={card_holder} onChange={(event)=> handleChange("card_holder",event)} type="text" className="card-holder-input"/>
    </div>
    <div className="flexbox">
        <div className="inputBox">
            <span>expiration mm</span>
            <select name="" id="" defaultValue ={expMm ===""?"month":expMm} className="month-input" onChange={(event)=> handleChange("expMm",event)}>
                <option value="month"  disabled>month</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
        </div>
        <div className="inputBox">
            <span>expiration yy</span>
            <select name="" id="" className="year-input" defaultValue={ExpYY ===""?"year":ExpYY} onChange={(event)=> handleChange("ExpYY",event)}>
                <option value="year"  disabled>year</option>
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
                <option value="25">2025</option>
                <option value="26">2026</option>
                <option value="27">2027</option>
                <option value="28">2028</option>
                <option value="29">2029</option>
                <option value="30">2030</option>
            </select>
        </div>
        <div className="inputBox">
            <span>cvv</span>
            <input value={cvv} onMouseLeave={()=>OnMouseLeave()} onMouseEnter={()=>OnMouseEnter()}   onChange={(event)=> handleChange("cvv",event)} type="text" maxLength="4" className="cvv-input"/>
              
        </div>
    </div>
    <input type="submit" value="submit" className="submit-btn"/>
</form>

</div>    

  );
}

export default App;
