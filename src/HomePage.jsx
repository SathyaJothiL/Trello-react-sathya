import React from 'react'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
    const navigate = useNavigate()
    function goToBoards(){
        navigate('/boards')
    }
  return (
    <div className='flex justify-center flex-col items-center gap-1 mt-3'>
       <h1 className='text-center text-2xl font-bold '>Welcome to Home Page</h1>
       <button className='text-xl font-bold text-white bg-gray-400 w-fit p-3 rounded' onClick={goToBoards}>Boards</button>
    </div>
  )
}

export default HomePage
