import {getBoard} from '../api/board'


export async function getBoardName(boardId){
    try{
        const data = await getBoard(boardId)
        console.log(boardId,'id',data.name,'boardName');
        return data.name
    }catch(err){
        console.log(err.message) 
    }
}