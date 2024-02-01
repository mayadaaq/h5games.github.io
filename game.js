class Game {
  constructor() {
    // Define variables
    this.score = 0;
    this.choice = '';
    this.muted = false;

    this.canvas = document.getElementById('gameContainer').getContext('2d');
    this.canvas.font = '24px Arial';

    this.playButton = document.getElementById('playButton');
    this.headsButton = document.getElementById('headsButton');
    this.tailsButton = document.getElementById('tailsButton');
    this.muteButton = document.getElementById('muteButton');

    adConfig({
      sound: 'on',
    });

    // On click listeners for the game's buttons.
    this.playButton.addEventListener('click', () => {
      this.erase();
      this.play();
    });

    this.headsButton.addEventListener('click', () => {
      this.choice = 'Heads';
      this.flipCoin();
    });

    this.tailsButton.addEventListener('click', () => {
      this.choice = 'Tails';
      this.flipCoin();
    });

    this.muteButton.addEventListener('click', () => {
      var soundString = this.muted ? 'on' : 'off';
      this.muteButton.innerHTML = this.muted ? 'Mute sound' : 'Un-mute sound';
      this.muted = !this.muted;
      adConfig({
        sound: soundString,
      });
    });

    this.erase();
  [...]
