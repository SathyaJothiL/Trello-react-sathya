import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import {fetchBoards} from './api/trello'
import ImgMediaCard from './BoardCard'
import {Box} from '@mui/material'
import CreateBoard from './CreateBoard'
import { createBoard,getBoardLists,deleteBoard } from './api/board'
import { useNavigate } from 'react-router-dom'

const BoardLists = () => {
    const [boards,setBoards] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetchBoards().then(data=>{
            console.log(data); 
            setBoards(data)
        })
    },[])
    function handleBoardClick(boardId){
        navigate(`/boards/${boardId}`)
        
    }
    function handleCreateBoard(boardName){
        createBoard(boardName)
        .then(data=>{
            console.log(data);
            console.log('posted');
            setBoards([...boards,data])
        })
    }
    function handleDeleteBoard(boardId){
        deleteBoard(boardId).then(()=>{
            fetchBoards().then(data=>{
            console.log(data); 
            setBoards(data)
        })
        })
        
        
    }
  return (
    <div className=' py-4'>
        <div className='flex flex-wrap gap-5'>
         <Box
         sx={{
            display:'flex',
            gap:'1rem',
            justifyContent:'start',
            alignItems:'center',
            flexWrap:'wrap'
         }}
         >
         {
            boards.map(board=>(
                <ImgMediaCard
                key={board.id}
                handleBoardClick={handleBoardClick}
                board={board}
                handleDeleteBoard={handleDeleteBoard}
                >
                </ImgMediaCard>
            ))
          }
         </Box>
        </div>
        <div className='mt-4'>
            <CreateBoard
            handleCreateBoard={handleCreateBoard}/>
        </div>
    </div>
  )
}

export default BoardLists
