import React from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

const HomePage = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("./question-1")
  }


  return (
    <div>
      <button onClick={handleClick}>Take the test</button>
    </div>
  )
}

export default HomePage
