import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CreateBoard({ imgSrc, handleCreateBoard, board }) {
  return (
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
        borderRadius:'5%'
      }}
      onClick={handleCreateBoard}
    >
      <CardActionArea
        sx={{ height: "100%", display: "flex", justifyItems: "center" }}
      >
        <Typography>Create New Board</Typography>
      </CardActionArea>
    </Card>
  );
}
