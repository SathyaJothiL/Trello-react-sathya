import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  TextField,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CreateNewBoard = ({ }) => {
  

  return (
    <div className="flex flex-col">
        <Box>

        </Box>

      {/* <Box
      sx={{
        maxWidth: 250
      }}
      >
        <TextField
        size="small"
          placeholder="Enter a title..."
          value={cardInput}
          onChange={(e) => setCardInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit(cardInput);
            }
          }}
        />
      </Box> */}
      <div className="flex mt-3">
        <Button variant="contained" onClick={() => handleSubmit(cardInput)}>
          Add Card
        </Button>
        <IconButton onClick={handleCancelCard} sx={{ml:'1rem'}}> 
          <CloseIcon/>
        </IconButton>
      </div>
    </div>
  );
};

export default CreateNewBoard;