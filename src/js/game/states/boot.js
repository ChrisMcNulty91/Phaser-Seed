/**
 * Module - boot.js
 * Role - Configure game settings such as physics, size etc..
 */
var bootState = {
  preload: function() {
    game.load.image('progressBar', 'assets/sprites/progressBar.png');
  },

  create: function() {
    game.stage.backgroundColor = '#3498DB';

    game.state.start('load');
  }
};