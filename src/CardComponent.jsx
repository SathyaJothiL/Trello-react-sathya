import React, { useState } from "react";
import {
  Card,
  CardContent,
  Checkbox,
  Typography,
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DialogBox from "./DialogBox";
const CardComponent = ({ card, onEdit, onToggleComplete }) => {
  const handleCheckboxChange = (e) => {};
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Card
      onClick={()=>setIsOpen(true)}
        variant="outlined"
        size="small"
        sx={{
          bgcolor: "white",
          borderRadius: "0.6rem",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox size="small"></Checkbox>
            <Typography>{card.name}</Typography>
          </div>
          <IconButton>
            <EditIcon />
          </IconButton>
        </CardContent>
      </Card>

      <DialogBox card={card}/>
    </div>
  );
};

export default CardComponent;
