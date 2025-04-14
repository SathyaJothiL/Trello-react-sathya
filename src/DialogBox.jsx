import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {createChecklist,getChecklists,deleteChecklists} from './api/checklist'
import { Card, TextField } from '@mui/material';
import ChecklistCard from './ChecklistCard';



export default function DialogBox({card,isOpen,setIsOpen,children}) {
  const [checklists,setChecklists] = React.useState([])
  React.useEffect(()=>{
    getChecklists(card.id)
    .then(data=>{
      console.log(data,'cl');
      setChecklists(data)
    })
  },[])

function handleCreateChecklist(e){
  createChecklist(card.id,e.target.value)
  .then(data=>{
    setChecklists([...checklists,data])
  })
    e.target.value = ''
}

  function handleDelete(checklistId){
    deleteChecklists(checklistId)
    .then(data=>{
      setChecklists(prev=>prev.filter(checklist=>checklist.id!==checklistId))
    })
  }

  return (
    <React.Fragment>
      {children}
      <Dialog
        open={isOpen}
        onClose={()=>setIsOpen(false)}
        // sx={{
        //   width:'100vw'
        // }}
        PaperProps={{
          sx:{
            width:'100vw'
          }
        }}
      >
        <DialogTitle>{card.name}</DialogTitle>
        <DialogContent>
          <TextField onKeyDown={(e)=>{
            if(e.key==='Enter') handleCreateChecklist(e) 
          }}></TextField>
        
        <div>
         { checklists.map(checklist=>(
            <ChecklistCard checklist={checklist} handleDelete={handleDelete}/>
          ))}
        </div>
  
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setIsOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      
    </React.Fragment>
  );
}
