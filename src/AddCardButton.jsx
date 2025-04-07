import React from 'react'
import plusIcon from "./assets/plusIcon.svg";
import { Button } from "@mui/material";
const AddCardButton = ({handleIsEditing}) => {
  return (
    <Button
    variant='contained'
                sx={{
                  backgroundColor: "rgba(9,30,66,0.1)",
                  color: "white",
                  width: "272px",
                  display: "flex",
                  justifyContent: "start",
                  alignItems:'center',
                  padding:'0.6rem'
                }}
                onClick={(e) => handleIsEditing(e)}
              >
                <img src={plusIcon} className="pr-4"></img>
                <span className="font-bold text-[rgb(23,43,77)]">
                  Add a Card
                </span>
              </Button>
  )
}

export default AddCardButton
