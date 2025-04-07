import axios from 'axios'

const api_key = import.meta.env.VITE_API_KEY
const api_token = import.meta.env.VITE_API_TOKEN



export function createChecklist(cardId,name){
    return axios.post(`https://api.trello.com/1/checklists`,null,{
        params:{
            idCard:cardId,
            key:api_key,
            token:api_token,
            name:name
        }
    })
    .then(response=>{
        console.log('Checlist created successfully');
        console.log(response);
    })
    .catch(err=>{
        console.log(err.message)
    })
}

export function getChecklists(cardId){
    console.log(cardId,'idcard');
    
    return axios.get(`https://api.trello.com/1/cards/${cardId}/checklists`,{
        params:{
            key:api_key,
            token:api_token,
        }
    })
    .then(response=>{
        console.log('Fetched all checklists on a card');
        console.log(response);
        return response.data
    })
    .catch(err=>{
        console.log(err.message)
    })
}