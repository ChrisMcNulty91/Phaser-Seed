/**
 * Module - game.js
 * Role - Main point of entry for phaser.js game
 */
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('play', playState);

game.state.start('boot');