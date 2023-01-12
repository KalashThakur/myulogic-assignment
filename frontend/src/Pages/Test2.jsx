import React from 'react'
import style from './Test.module.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Test2 = () => {
  const [ans, setAns] = useState("");
  const navigate = useNavigate();

   let count=0

    const handleSelect = (e) => {
        setAns(e.target.value)
        if(ans == 'triangle and square'){
          count++;
        //   navigate("/")
        }
    }

  return (
    <div className={style.container}>
      <div>
        <img src="https://en.testometrika.com/upload/questions/245/24515daa6ce195302daea970499a81c3.png" alt="" />
      </div>
      <div>
        <div onChange={handleSelect}>
            <h3>What do you see on the picture</h3>
            <input type="radio" value="triangle and circle" id="" /> <span>triangle and circle</span> <br />
            <input type="radio" value="two squares" id="" /><span>two squares</span>   <br />  
            <input type="radio" value="triangle and square" id="" /><span>triangle and square</span> <br />
            <input type="radio" value="two circles" id="" /><span>two circles</span>  <br />
            <input type="radio" value="nothing" id="" /><span>nothing</span> <br />
        </div>
      </div>
    </div>
  )
}

export default Test2
