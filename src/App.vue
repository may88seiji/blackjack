<template>
  <div id="app">
    <h1>Vue BlackJack</h1>
    <div class="container">
      <button>Restart</button>
      <button>Hit Me</button>
      <button>Stay</button>
    </div>
    <div>{{ addedDeck.length }}</div>
    <div v-for="(player, index) in players" :key="index" >
      <div>{{player.Name}}</div>
      <div v-for="(Hand, index) in player.Hands" :key='index'>
        <div>{{Hand.Suit}}</div>
        <div>{{Hand.Value}}</div>
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
      currentPlayer: ''
    }
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
    renderCard: function(card,player) {
      console.log('render card')
    },
    getPoints: function(player) {
      let points = 0
      for(var i = 0; i < players[player].Hands.length; i++) {
          points += players[player].Hands[i].Weight;
      }
      players[player].Points = points;
      return points;
    },
    updatePoints: function() {
      players.forEach(function(e,i,a){
        getPoints(i)
      })
    },
    updateDeck: function() {
      console.log(deck.length)
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
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
