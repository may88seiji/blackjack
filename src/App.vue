<template>
  <div id="app">
    <h1>Vue BlackJack</h1>
    <div class="container">
      <button>Restart</button>
      <button>Hit</button>
      <button>Stay</button>
    </div>
    <div>{{ addedDeck.length }}</div>
    <div class="flex">
      <div v-for="(player, index) in players" :key="index" >
        <div>{{player.Name}}</div>
        <div>{{player.Points}}</div>
        <div v-for="(Hand, index) in player.Hands" :key='index' class='card'>
          <div>{{Hand.Suit}}</div>
          <div>{{Hand.Value}}</div>
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
      currentPlayer: '',
      points: 0
    }
  },
  watch:{
    players: 'updatePoint'
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
      console.log(this.players[0].Points)
    },
    hitMe: function() {
      var card = deck.pop();
      players[currentPlayer].Hand.push(card);
      renderCard(card, currentPlayer);
      updatePoints();
      updateDeck();
      check();
    },
    stay: function() {
      // move on to next player, if any
      if (currentPlayer != players.length-1) {
        document.getElementById('player_' + currentPlayer).classList.remove('active');
        currentPlayer += 1;
        document.getElementById('player_' + currentPlayer).classList.add('active');
      }

      else {
        end();
      }
    }
  }
}
</script>

<style>
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

.card {
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
}

</style>
