
export default class Deck{
  constructor() {
  }
  get(){
    let deck = []
    let card = ''
    let suits = ['spades', 'diamonds', 'clubs', 'hearts']
    let values = ['A','2','3','4','5','6','7','8','9','10','J',"Q",'K']

    suits.forEach(function(e,i,a){
      values.forEach(function(element,index,array){
        card = ''
        card = { Value: values[index], Suit: suits[i]}
        // console.log(deck)
        deck.push(card)
      })
    })

    // for (let i = 0; i < 10; ){
    //   let shuffle_01 = Math.floor(Math.random() * deck.length)
    //   let shuffle_02 = Math.floor(Math.random() * deck.length)
    //   let tmp = deck[shuffle_01]

    //   deck[shuffle_01] = deck[shuffle_02]
    //   deck[shuffle_02] = tmp
    // }
    console.log(deck)
    return deck
  }
}
