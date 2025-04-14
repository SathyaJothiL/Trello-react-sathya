import { Login } from "@mui/icons-material";
import axios from "axios"

const api_key = import.meta.env.VITE_API_KEY
const api_token = import.meta.env.VITE_API_TOKEN
const base_url = 'http://api.trello.com/1'

export function createCard(listId,name){
    console.log(listId);
    console.log(name);
    
    
    return axios.post(`https://api.trello.com/1/cards/`,null,{
        params:{
            idList:listId,
            key:api_key,
            token:api_token,
            name:name
        }
    }).then(response=>{
        console.log('Card created successfully');
        console.log(response.data);
        return response.data
    })
    .catch(err=>{
        console.log(err.message);
        
    })
}


export function getAllCards(boardId){
    return axios.get(`https://api.trello.com/1/boards/${boardId}/cards`,{
        params:{
            key:api_key,
            token:api_token,
        }
    }).then(response=>{
        console.log("Fetched all cards",response.data);
        return response.data
    })
    .catch(err=>{
        console.log(err.message);
        
    })
}

export function getCardsInList(listId){
    return axios.get(`https://api.trello.com/1/lists/${listId}/cards`,{
        params:{
            key:api_key,
            token:api_token,
        }
    })
    .then(response=>{
        console.log("Fetched all cards in a list");
        return response.data
    })
    .catch(err=>{
        console.log(err.message);
        
    })
}

export function deleteCard(cardId){
    return axios.delete(`https://api.trello.com/1/cards/${cardId}`,{
        params:{
            key:api_key,
            token:api_token,
        }
    })
    .then(response=>{
        console.log("Card deleted successfully");
        console.log(response.data);
        return response.data
    })
    .catch(err=>{
        console.log(err.message);
    })
}