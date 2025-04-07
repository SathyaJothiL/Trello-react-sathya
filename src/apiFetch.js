import fs from 'fs'
import path from 'path'
const api_key = import.meta.env.VITE_API_KEY
const api_token = import.meta.env.VITE_API_TOKEN

let filepath= path.join(__dirname,'data.json')

fetch(`https://api.trello.com/1/members/me/boards?key=${api_key}&token=${api_token}`)
.then(response=>response.json())
.then(data=>{
    fs.writeFile(filepath,JSON.stringify(data,null,2),function(err){
        console.log(err.message);
        
    })
})
.catch(err=>console.log(err.message,'err fetching'))

console.log(api_key);
console.log(api_token);

