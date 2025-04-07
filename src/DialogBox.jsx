import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {createChecklist,getChecklists} from './api/checklist'
import { Card, TextField } from '@mui/material';

export default function DialogBox({card}) {
  const [open, setOpen] = React.useState(false);
  const [checklists,setChecklists] = React.useState([])
  
  React.useEffect(()=>{
    getChecklists(card.id)
    .then(data=>{
      setChecklists(data)
    })
  },[])


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
function handleCreateChecklist(e){
  createChecklist(card.id,e.target.value)
  .then(data=>{
    getChecklists(card.id)
    .then(data=>{
      setChecklists(data)
    })
  })
    e.target.value = ''
}

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{card.name}</DialogTitle>
        <DialogContent>
          <TextField onKeyDown={(e)=>{
            if(e.key==='Enter') handleCreateChecklist(e) 
          }}></TextField>
        
        {
        checklists.map(checklist=>(
          <div>{checklist.name}</div>
        ))
      }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      
    </React.Fragment>
  );
}
