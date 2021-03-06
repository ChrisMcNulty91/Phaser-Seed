window.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container')

game.state.add('boot', require('./states/boot.js'));
game.state.add('load', require('./states/load.js'));
game.state.add('menu', require('./states/menu.js'));
game.state.add('play', require('./states/play.js'));

game.state.start('boot');
