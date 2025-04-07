import React from 'react'
import BoardLists from './BoardLists'
import BoardLayout from './BoardLayout'

const BoardPage = () => {
  return (
    <div className='ml-[25%] mr-[5%] flex justify-center flex-col items-start'>
      <BoardLayout/>
      <BoardLists/> 
    </div>
  )
}

export default BoardPage
