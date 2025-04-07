import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getBoardName} from './helpers/getBoardName'
const BoardNavbar = () => {
    const {boardId} = useParams()
    const [boardName, setBoardName] = useState(null) 
    useEffect(()=>{
         getBoardName(boardId)
         .then(data=>{
            setBoardName(data)
         })     
    },[])
  return (
    <div className='flex justify-start items-center text-white bg-[rgb(0,81,128,0.8)] h-14 border-b border-b-[rgba(255,255,255,0.16)]'>
      <h2 className='ml-8 font-bold text-xl '>{boardName}</h2>
    </div>
  )
}

export default BoardNavbar
