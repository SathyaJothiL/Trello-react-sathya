import { Button, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import ProgressBar from './ProgressBar'
import CheckItemCard from './CheckItemCard'

const initialState = {
  isOpen:false,
  inputValue:'',
  CheckItemLists:[]
}
function reduceCheckItem(checkItem,dispatchCheckItem){

}
const ChecklistCard = ({ checklist, handleDelete }) => {
  const [open,setOpen] = useState(null)
  function handleAddCheckitem(){
    setOpen(true)
  }
  return (
    <div className="flex justify-center items-center w-full">
      <Card
        sx={{
          width: "100%",
        }}
      >
        <CardContent
          sx={{
            padding: "1rem",
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <Typography
                sx={{
                  color: "rgb(23,43,77)",
                  fontWeight: "bold",
                }}
              >
                {checklist.name}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgb(9,30,66,0.14)",
                  color: "rgb(23,43,77)",
                }}
                onClick={() => handleDelete(checklist.id)}
              >
                Delete
              </Button>
            </div>
            <ProgressBar/>
            <Button variant="contained" sx={{
              width:'fit-content'
            }}
            onClick={handleAddCheckitem}
            >Add item</Button>
          </div>
          <CheckItemCard open={open} setOpen={setOpen}/>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChecklistCard;
