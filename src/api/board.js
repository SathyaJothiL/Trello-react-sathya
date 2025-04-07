import axios from "axios";
const api_key = import.meta.env.VITE_API_KEY;
const api_token = import.meta.env.VITE_API_TOKEN;

export function createBoard(name) {
  return axios
    .post(`https://api.trello.com/1/boards/`, null, {
      params: {
        name: name,
        key: api_key,
        token: api_token,
      },
    })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err.message);
    });
}

export function getBoard(boardId){
  return axios.get(`https://api.trello.com/1/boards/${boardId}`,{
    params:{
      key: api_key,
        token: api_token,
    }
  })
  .then(response=>{
    console.log('Fetched a board successfully');
    return response.data
  })
  .catch(err=>{
    console.log(err.message);
    
  })
}

export function getBoardLists(board_id) {
  return axios.get(`https://api.trello.com/1/boards/${board_id}/lists`, {
    params: {
      key: api_key,
      token: api_token,
    },
  })
  .then(response=>response.data)
  .catch(err=>{
    console.log(err.message);
    return []
  })
}

export function deleteBoard(board_id){
  return axios.delete(`https://api.trello.com/1/boards/${board_id}`,{
    params:{
      key: api_key,
      token: api_token,
    }
  }).then(response=>{
    console.log("Board deleted successfully");
    return response.data})
  .catch(err=>{
    console.log(err.message);
  })
}