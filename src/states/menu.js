'use strict';

module.exports = {
  create: function() {
    console.log('Menuing');
  },

  update: function() {
    game.state.start('play');
  }
};
