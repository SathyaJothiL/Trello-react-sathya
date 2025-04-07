import axios from 'axios'

const api_key = import.meta.env.VITE_API_KEY
const api_token = import.meta.env.VITE_API_TOKEN

export function CreateSingleList(boardId,name){
    return axios.post(`https://api.trello.com/1/lists`,null,{
        params:{
            idBoard:boardId,
            name:name,
            key:api_key,
            token:api_token,
        }
    })
}

export function UpdateListName(listId,name){
    return axios.put(`https://api.trello.com/1/lists/${listId}`,null,{
        params:{
            name:name,
            key:api_key,
            token:api_token,
        }
    }).then(response=>{
        console.log('List name updated successfully');
        return response.data      
    })
    .catch(err=>{
        console.log(err);
        
    })
}