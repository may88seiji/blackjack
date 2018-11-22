let players = []

export default class Player {
  constructor(id) {
    let hand = []
  }
  add(id){
    let hand = []
    let player = { Name: 'Player_'+ id, ID: id, Points: 0, Hands: hand}
    players.push(player)
    return players
  }
}
