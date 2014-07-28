/**
 * Module - play.js
 * Role - Playable state where all the action happens
 */
var playState = {
  create: function() {
  	var style = {
      font: '30px Arial',
      fill: '#FF0000'
    };
    game.add.text(50, 250, 'Phaser 2.0.7 up and running. Go make some games', style);
  	//Add sprites and other objects here
  },

  update: function() {
  	//Add some logic here	
  }
};