let deck = []

export default class Deck{
  constructor() {
  }
  //get
  get(){
    let card = ''
    let suits = ['♠︎', '♦︎', '♣︎', '❤︎']
    let values = ['A','2','3','4','5','6','7','8','9','10','J',"Q",'K']
    let weight = ''

    suits.forEach(function(e,i,a){
      values.forEach(function(element,index,array){
        weight = parseInt(values[index])
        if (values[index] == "J" || values[index] == "Q" || values[index] == "K" || values[index] == "A") {
          weight = 10
        }
        card = { Value: values[index], Suit: suits[i], Weight: weight }
        deck.push(card)
      })
    })
    return deck
  }
  //shuffle
  shuffle() {
    for (let i = 0; i < 1000; i++){
      let shuffle_01 = Math.floor(Math.random() * deck.length)
      let shuffle_02 = Math.floor(Math.random() * deck.length)
      let tmp = deck[shuffle_01]

      deck[shuffle_01] = deck[shuffle_02]
      deck[shuffle_02] = tmp
    }
    return deck
  }
}
