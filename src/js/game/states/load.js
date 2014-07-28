/**
 * Module - load.js
 * Role - Load in all assests before entering a playable state
 */
var loadState = {
  preload: function() {
    var style = {
      font: '30px Arial',
      fill: '#FF0000'
    };
    var loadingLabel = game.add.text(game.world.centerX, 150, 'Loading.....', style);
    loadingLabel.anchor.setTo(0.5, 0.5);

    var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
    progressBar.anchor.setTo(0.5, 0.5);
    game.load.setPreloadSprite(progressBar);

  },

  create: function() {
    game.state.start('play');
  }
};