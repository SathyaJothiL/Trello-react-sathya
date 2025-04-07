import React, { useEffect, useState } from "react";
import { getBoardLists } from "./api/board";
import { useParams } from "react-router-dom";
import ListCard from "./ListCard";
import { createCard, getAllCards, getCardsInList } from "./api/cards";
import groupCards from "./helpers/groupCards";
import CardComponent from "./CardComponent";
import CreateList from "./CreateList";
import { CreateSingleList,UpdateListName } from "./api/list";

const SingleBoardPage = () => {
  const [lists, setLists] = useState([]);
  const { boardId } = useParams();
  const [cardLists, setcardLists] = useState({});
  useEffect(() => {
    getBoardLists(boardId).then((data) => {
      setLists(data);
    });
    getAllCards(boardId).then((data) => {
      let groupedCards = groupCards(data);
      setcardLists(groupedCards);
    });
  }, []);

  function handleAddList(inputValue) {
    console.log(inputValue, "ip");
    CreateSingleList(boardId, inputValue)
    .then((data) => {
      getBoardLists(boardId)
      .then(data=>{
        setLists(data)
      })
    });
  }

  function handleAddCard(listId, name) {
    console.log(listId, name);
    createCard(listId, name).then(() => {
      getCardsInList(listId).then((data) => {
        setcardLists((prev) => {
          return { ...prev, [listId]: data };
        });
      });
    });
  }
  function onEdit() {}
  function onToggleComplete() {

  }
  return (
    <div className="bg-[rgb(12,102,228)] min-h-screen min-w-[100vw] overflow-x-auto flex">
      <div className="flex p-8">
        <div className="flex">
          {lists.map((list) => (
            <div className="mr-3 rgb(241,242,244)">
              <ListCard list={list} handleAddCard={handleAddCard} >
              <div className="card-container p-2">
                {cardLists[list.id] &&
                  cardLists[list.id].map((card) => (
                    <CardComponent
                      card={card}
                      handleAddCard={handleAddCard}
                    />
                  ))}
              </div>
              </ListCard>
            </div>
          ))}
        </div>
        <CreateList handleAddList={handleAddList} />
      </div>
    </div>
  );
};

export default SingleBoardPage;
