var Game = {
  start: false,
  goal: 0,
  crystal: [0, 0, 0, 0],
  score: [0, 0, 0],

  restartGame: function () {
    this.goal = Math.floor(Math.random() * 102) + 19;
    for(var i = 0; i < 4; i++) {
      this.crystal[i] = Math.floor(Math.random() * 12) + 1;
      $('#crystal-' + (i+1)).attr("value", this.crystal[i]);
      $('#goal').text(Game.goal);
    }
    this.score[0] = 0;
    $('#score').text("0");
  },

  checkStatus: function () {
    if (this.score[0] === this.goal) {
      this.restartGame();
      this.score[1] += 1;
      $('#wins').text(this.score[1]);
    } else if (this.score[0] > this.goal) {
      this.restartGame();
      this.score[2] += 1;
      $('#losses').text(this.score[2]);
    }
  }
}

$(function() {
  $('audio').prop("volume",0.25);

  Game.restartGame();

  $('.crystal').mouseup(function () {
    Game.score[0] += parseInt(this.getAttribute("value"));
    $('#score').text(Game.score[0]);
    Game.checkStatus();
  });

});
