import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
export default function CreateBoard({ imgSrc, handleCreateBoard, board }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleIsEditing() {
    console.log("sdfdf");
    setIsEditing(true);
  }
  function handleSubmit(e) {
    console.log(e.target.value);
    let val= e.target.value
    handleCreateBoard(val);
    setIsEditing(false)
  }
  return (
    <div>
      {!isEditing ? (
        <Card
          sx={{
            maxWidth: 250,
            backgroundColor: "rgb(68,84,111,0.15)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10rem",
            color: "rgb(68,84,111)",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "5%",
          }}
          onClick={handleIsEditing}
        >
          <CardActionArea
            sx={{ height: "100%", display: "flex", justifyItems: "center" }}
          >
            <Typography>Create New Board</Typography>
          </CardActionArea>
        </Card>
      ) : (
        <Card sx={{
          maxWidth:250,
          backgroundColor:'white',
          color:'black',
          height:'10rem'
        }}>
          <TextField
            size="small"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit(e);
            }}
          />
          <IconButton>
            <CloseIcon/>
          </IconButton>
        </Card>
      )}
    </div>
  );
}
