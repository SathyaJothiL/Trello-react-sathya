import axios from 'axios'

export const client = axios.create({
    baseURL: `https://api.trello.com/1/members/me/boards?key=${api_key}&token=${api_token}`

})