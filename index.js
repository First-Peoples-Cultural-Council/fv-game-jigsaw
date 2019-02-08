import JigsawGame from './scripts/game';

document.addEventListener("DOMContentLoaded", function(event) { 
    const gameContainer = document.getElementById('game');
    JigsawGame.init(gameContainer,{});
});