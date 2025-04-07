import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY
const api_token = import.meta.env.VITE_API_TOKEN
const base_url = 'http://api.trello.com/1'

export function fetchBoards(){
   let promiseBoard =  axios.get(`${base_url}/members/me/boards/?key=${api_key}&token=${api_token}`)
    .then(response=>{
        console.log("Boards fetched successfully");
        return response.data
    })
    .catch(err=>{
        console.log(err.message,'Error accessing boards');
    })
    
    return promiseBoard
}

// export default fetchBoards