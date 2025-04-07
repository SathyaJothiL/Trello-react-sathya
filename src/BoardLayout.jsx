import React from 'react'
import boardIcon from './assets/boardIcon.png'

const BoardLayout = () => {
  return (
    <div>
      <h1 className='text-lg text-[rgb(68,84,111)] mt-12 mb-5 font-bold'>YOUR WORKSPACES</h1>
      <div>
        <div>
            <div className='flex justify-start items-center'>
                <p className='p-4'>T</p>
                <h2 className='p-4 text-lg text-[rgb(23,43,77)] font-bold'>Trello Workspace</h2>
            </div>
            <div>
                <div className='flex rounded-md p-2 bg-[rgba(9,30,66)] bg-opacity-10 w-fit'>
                    <img src={boardIcon} alt='Board-icon' className=''></img>
                    <h3 className='p-2 text-[rgb(23,43,77)] text-lg'>Boards</h3>
                </div>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default BoardLayout
