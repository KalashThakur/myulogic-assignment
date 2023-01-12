import React from 'react'
import style from './Test.module.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Test4 = () => {
  const [ans, setAns] = useState("");
  const navigate = useNavigate();

   let count=0

    const handleSelect = (e) => {
        setAns(e.target.value)
        if(ans == 'TF'){
          count++;
        //   navigate("/")
        }
    }

  return (
    <div className={style.container}>
      <div>
        <img src="https://en.testometrika.com/upload/questions/1dc/1dc53eb5cc611b7f2b0015ca762c64a0.png" alt="" />
      </div>
      <div>
        <div onChange={handleSelect}>
            <h3>What do you see on the picture</h3>
            <input type="radio" value="TF" id="" /> <span>TF</span> <br />
            <input type="radio" value="TP" id="" /><span>TP</span>   <br />  
            <input type="radio" value="TL" id="" /><span>TL</span> <br />
            <input type="radio" value="FF" id="" /><span>FF</span>  <br />
        </div>
      </div>
    </div>
  )
}

export default Test4
