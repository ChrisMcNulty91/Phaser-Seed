'use strict';

module.exports = {
  create: function() {
    console.log('Booting');
    game.add.plugin(Phaser.Plugin.Debug);
  },

  update: function() {
    game.state.start('load');
  }
};
