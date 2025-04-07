import React from 'react'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
    const navigate = useNavigate()
    function goToBoards(){
        navigate('/boards')
    }
  return (
    <div>
       <h1>Welcome to Home Page</h1>
       <button onClick={goToBoards}>Boards</button>
    </div>
  )
}

export default HomePage
