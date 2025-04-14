import React, { useEffect, useState } from "react";
import { getBoardLists } from "./api/board";
import { useParams } from "react-router-dom";
import ListCard from "./ListCard";
import { createCard, getAllCards, getCardsInList,deleteCard } from "./api/cards";
import groupCards from "./helpers/groupCards";
import CardComponent from "./CardComponent";
import CreateList from "./CreateList";
import { CreateSingleList,archiveList } from "./api/list";

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
      setLists([...lists,data])
    });
  }

  function handleAddCard(listId, name) {
    createCard(listId, name).then((data) => {
      setcardLists(prev=>{
        if(!prev[listId]){
          prev[listId]=[] 
        }
        let curr = [...prev[listId],data]
        return {
          ...prev,[listId]:curr
        }
      })
    });
  }
  function handleArchiveList(listId){
    archiveList(listId)
    .then(()=>{
      setLists(prev=>prev.filter(list=>list.id!==listId))
    })
  }
  function handleDeleteCard(cardId,listId){
    console.log(cardId);
    deleteCard(cardId)
    .then((data)=>{
      setcardLists(prev=>{
        console.log(prev[listId],'okay')
        let curr = prev[listId].filter(card=>card.id!=cardId)
        return {    
          ...prev,[listId]:curr
        }
      })
    })
    
  }
  return (
    <div className="bg-[rgb(12,102,228)] min-h-screen min-w-[100vw] overflow-x-auto flex">
      <div className="flex p-8">
        <div className="flex">
          {lists.map((list) => (
            <div className="mr-3 rgb(241,242,244)">
              <ListCard list={list} handleAddCard={handleAddCard} handleArchiveList={handleArchiveList}  >
              <div className="card-container p-2">
                {cardLists[list.id] &&
                  cardLists[list.id].map((card) => (
                    <CardComponent
                      list={list}
                      card={card}
                      handleAddCard={handleAddCard}
                      handleDeleteCard={handleDeleteCard}
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
