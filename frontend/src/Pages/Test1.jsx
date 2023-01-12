import React from 'react'
import style from './Test.module.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Test1 = () => {
  const [ans, setAns] = useState("");
  const navigate = useNavigate();

   let count=0

    const handleSelect = (e) => {
        setAns(e.target.value)
        if(ans == 89){
          count++;
        //   navigate("/")
        }
    }

  return (
    <div className={style.container}>
      <div>
        <img src="https://en.testometrika.com/upload/questions/dfb/dfb30a868bc75dde7f51badd0e57c18d.png" alt="" />
      </div>
      <div>
        <div onChange={handleSelect}>
            <h3>What number do you see on the picture</h3>
            <input type="radio" value="8" id="" /> <span>8</span> <br />
            <input type="radio" value="89" id="" /><span>89</span>   <br />  
            <input type="radio" value="73" id="" /><span>73</span> <br />
            <input type="radio" value="67" id="" /><span>67</span>  <br />
            <input type="radio" value="5" id="" /><span>52</span> <br />
        </div>
      </div>
    </div>
  )
}

export default Test1
