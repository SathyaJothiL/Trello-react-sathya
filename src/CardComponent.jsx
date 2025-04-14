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
import DeleteIcon from "@mui/icons-material/Delete";

import DialogBox from "./DialogBox";
const CardComponent = ({
  card,
  onEdit,
  onToggleComplete,
  handleDeleteCard,
  list,
}) => {
  const handleCheckboxChange = (e) => {};
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <DialogBox card={card} isOpen={isOpen} setIsOpen={setIsOpen}>
        <Card
          onClick={() => setIsOpen(true)}
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
              <Checkbox size="small" onClick={(e)=>e.stopPropagation()}></Checkbox>
              <Typography>{card.name}</Typography>
            </div>
            <IconButton onClick={(e) => {
              e.stopPropagation()
              handleDeleteCard(card.id, list.id)
            }}>
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      </DialogBox>
    </div>
  );
};

export default CardComponent;
