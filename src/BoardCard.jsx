import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { yellow } from "@mui/material/colors";

export default function ImgMediaCard({
  handleBoardClick,
  board,
  handleDeleteBoard,
}) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        // alt="Board Image"
        // height="140"
        sx={{ backgroundColor: "rgb(12,102,228)"}}
      ></CardMedia>
      
      <CardContent sx={{ backgroundColor: "rgb(12,102,228)", borderTopLeftRadius:'5%',borderTopRightRadius:'5%' }}>
        <Typography gutterBottom variant="h5" component="div">
          {board.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleBoardClick(board.id)}>
          View Board
        </Button>
        <Button size="small" onClick={() => handleDeleteBoard(board.id)}>
          Delete Board
        </Button>
      </CardActions>
    </Card>
  );
}
