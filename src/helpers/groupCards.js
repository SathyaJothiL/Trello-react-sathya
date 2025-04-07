

export default function groupCards(cards){
    let groupedCards = cards.reduce((acc,card)=>{
        if(!acc[card.idList]){
            acc[card.idList] = []
        }
        acc[card.idList].push(card)
        return acc
    },{})
    return groupedCards
}