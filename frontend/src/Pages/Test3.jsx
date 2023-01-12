import React from 'react'
import style from './Test.module.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Test3 = () => {
  const [ans, setAns] = useState("");
  const navigate = useNavigate();

   let count=0

    const handleSelect = (e) => {
        setAns(e.target.value)
        if(ans == 'D'){
          count++;
        //   navigate("/")
        }
    }

  return (
    <div className={style.container}>
      <div>
        <img src="https://en.testometrika.com/upload/questions/dc8/dc83826194d81a973f41bfba0fb77e76.png" alt="" />
      </div>
      <div>
        <div onChange={handleSelect}>
            <h3>What do you see on the picture</h3>
            <input type="radio" value="C" id="" /> <span>C</span> <br />
            <input type="radio" value="D" id="" /><span>D</span>   <br />  
            <input type="radio" value="P" id="" /><span>P</span> <br />
            <input type="radio" value="H" id="" /><span>H</span>  <br />
        </div>
      </div>
    </div>
  )
}

export default Test3
