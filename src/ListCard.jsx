import { useState } from "react";
import * as React from "react";

import AddCardButton from "./AddCardButton";
import CreateCard from "./CreateCard";
import { Card, CardContent, Stack, Typography, TextField } from "@mui/material";
import { UpdateListName } from "./api/list";

const ListCard = ({ list, children, handleAddCard }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isNameEdit, setIsNameEdit] = useState(false);
  const [listName,setListName] = useState(list.name)
  function handleCancelCard() {
    setIsEditing(false);
  }
  function handleIsEditing() {
    console.log('sdfdf');
    setIsEditing(true);
  }
  function handleDoubleClick() {
    setIsNameEdit(true)
  }
  function handleUpdateName(e){
    UpdateListName(list.id, e.target.value)
    .then((data)=>{
      setListName(data.name)
      setIsNameEdit(false)
    })
    e.target.value = "";
  }
  return (
    <div>
      <div>
        <Card sx={{ minWidth: 330, borderRadius: "0.6rem" }}>
          <CardContent>
            {!isNameEdit ? (
              <Typography

                variant="subtitle1"
                fontWeight="bold"
                sx={{ margin: 1,p:1 }}
                onClick={(e) => handleDoubleClick(e)}
              >
                {listName}
              </Typography>
            ) : (
              <TextField size="small" onKeyDown={(e)=>{
                if(e.key==='Enter') handleUpdateName(e)
              }} />
            )}
            {children}
            {isEditing ? (
              <CreateCard
                handleCancelCard={handleCancelCard}
                setIsEditing={setIsEditing}
                handleAddCard={handleAddCard}
                listId={list.id}
              />
            ) : (
              <AddCardButton handleIsEditing={handleIsEditing} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ListCard;
