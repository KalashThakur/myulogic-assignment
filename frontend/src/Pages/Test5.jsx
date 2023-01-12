import React from 'react'
import style from './Test.module.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Test5 = () => {
  const [ans, setAns] = useState("");
  const navigate = useNavigate();

   let count=0

    const handleSelect = (e) => {
        setAns(e.target.value)
        if(ans == '18'){
          count++;
        //   navigate("/")
        }
    }

  return (
    <div className={style.container}>
      <div>
        <img src="https://en.testometrika.com/upload/questions/9a3/9a3eeb80bb8b201b5949afc1bf655ba3.png" alt="" />
      </div>
      <div>
        <div onChange={handleSelect}>
            <h3>What do you see on the picture</h3>
            <input type="radio" value="16" id="" /> <span>16</span> <br />
            <input type="radio" value="13" id="" /><span>13</span>   <br />  
            <input type="radio" value="18" id="" /><span>18</span> <br />
            <input type="radio" value="15" id="" /><span>15</span>  <br />
        </div>
      </div>
    </div>
  )
}

export default Test5
