'use strict';

module.exports = {
  create: function() {
    console.log('Loading');
  },

  update: function() {
    game.state.start('menu');
  }
};
