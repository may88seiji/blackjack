<template>
  <div id="app">
    <h1>Vue BlackJack</h1>
    <div>{{ status }}</div>
    <div class="container">
      <button>Restart</button>
      <button @click="hit">Hit</button>
      <button @click="stay">Stay</button>
    </div>
    <div>Deck</div>
    <div class="deck">{{ addedDeck.length }}</div>
    <div class="flex players" v-bind:class="{ isJudge: isJudge }">
      <div v-for="(player, index) in players" :key="index" :class="['player_' + index]">
        <div>{{player.Name}}</div>
        <div class="total">Total {{player.Points}}</div>
        <div class="cards">
          <div v-for="(Hand, index) in player.Hands" :key='index' class='card'>
            <div>{{Hand.Suit}}</div>
            <div>{{Hand.Value}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Deck from './deck'
import Player from './player'

export default {
  name: 'app',
  data: function() {
    return {
      deck: new Deck(),
      player: new Player(),
      addedDeck: null,
      cardHand: null,
      players: [],
      currentPlayer: 0,
      points: 0,
      counter: 0,
      newCard: null,
      status: 'Now Player_0',
      isJudge: false
    }
  },
  watch:{
    players: 'updatePoint',
    newCard: ['updatePoint' , 'check']
  },
  mounted: function() {
    this.initDeck(),
    this.initPlayer(0),
    this.initPlayer(1),
    this.dealHands()
  },
  methods: {
    initDeck: function() {
      this.addedDeck = this.deck.get()
      this.deck.shuffle()
    },
    initPlayer: function(i) {
      this.players = this.player.add(i)
    },
    dealHands: function() {
      for(let i = 0; i < 2; i++){
        for( var j = 0; j < this.players.length; j++){
          this.cardHand = this.addedDeck.pop()
          this.players[j].Hands.push(this.cardHand)
        }
      }
    },
    updatePoint: function() {
      this.points = 0

      this.players.forEach(function(e,i,a){
        let point = 0
        e.Hands.forEach(function(element,index,array) {
          point += element.Weight
          return point
        })
        e.Points = point
      })
    },
    hit: function(event) {
      this.newCard = 0
      this.newCard = this.addedDeck.pop()
      this.players[this.currentPlayer].Hands.push(this.newCard)
    },
    check: function(event) {
      if(this.players[this.currentPlayer].Points > 21) {
        this.status = `Player_${this.players[this.currentPlayer].ID} Lose`
      }
    },
    stay: function() {
      this.currentPlayer =+ 1
      this.status = `Now Player_${this.players[this.currentPlayer].ID}`
      this.playCom()
    },
    playCom: function() {
      while(this.players[this.currentPlayer].Points < 18) {
        this.hit()
        this.updatePoint()
        if(this.players[this.currentPlayer].Points >= 17) {
          this.judge()
          break
        }
      }
      this.judge()
    },
    judge: function() {
      this.isJudge = true
      if(this.players[0].Points == this.players[1].Points){
        this.status = 'Even'
      }else if(this.players[0].Points > this.players[1].Points){
        this.status = 'You Win'
      }else{
        this.status = 'You Lose'
      }
    }
  }
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

.flex {
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin: 0 auto;
}

.deck {
  border: 1px solid;
  display: inline-block;
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
}

.card {
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
  height: 70px;
}

.player_1 {
  .total{
    opacity: 0;
  }
  .card {
    &:not(:first-child) {
      background-color: black;
    }
  }
}

.isJudge .player_1 {
    .total{
    opacity: 1;
  }
  .card {
    &:not(:first-child) {
      background-color: inherit;
    }
  }
}

</style>
