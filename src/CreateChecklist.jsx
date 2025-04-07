import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import plusIcon from "./assets/plusIcon.svg";
import CloseIcon from "@mui/icons-material/Close";

const CreateChecklist = ({handleAddList}) => {
  const [isEditing,setIsEditing] = useState(false);
  const [inputValue,setInputValue] = useState(null)

  function handleOnChange(e){
    setInputValue(e.target.value)
  }
  function handleCancelButton(){
    setIsEditing(false)
  }

  function handleIsEditing(){
    setIsEditing(true)
  }
  function handleOnSubmit(){
    handleAddList(inputValue)
    setInputValue('')
    setIsEditing(false)
  }
  return (
    <div>
      {!isEditing ? (
        <Button
          sx={{
            backgroundColor: "rgba(255,255,255,0.24)",
            padding: "12px",
            color: "white",
            width: "272px",
            display: "flex",
            justifyContent: "start"
          }}
          onClick={handleIsEditing}
        >
          <img src={plusIcon} className="invert pr-4"></img>
          <span className="font-bold">Add a list</span>
        </Button>
      ) : (
        <div>
          <Card
            sx={{ width: "270px", backgroundColor: "white",borderRadius:'0.75rem' }}
          >
            <CardContent>
              <TextField
              placeholder="Enter list name..."
              value={inputValue}
                size="small"
                onChange={(e) => {
                    handleOnChange(e)
                }}
                onKeyDown={(e)=>{
                    if(e.key==='Enter') {
                      handleOnSubmit()
                    }
                }}
                sx={{
                  mb: 2,
                }}
              ></TextField>
              <Stack direction="row" spacing={1}>
                <Button  onClick={()=>{
                  handleOnSubmit()
                }} variant="contained">Add List</Button>
                <IconButton onClick={handleCancelButton}>
                  <CloseIcon />
                </IconButton>
              </Stack>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CreateChecklist;

