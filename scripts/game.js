import Boot from './boot';
import Preload from './preload';
import GameTitle from './gametitle';
import Main from './main';
import GameOver from './gameover';
import DifficultySelect from './difficulty';
import GameConfig from './config';
import AddJigsawPlugin from './libs/JigsawPlugin';

class Game {
    
    /**
     * Initializes game
     * @param {HtmlElement} containerElement - container element to inject canvas
     * @param {object} config - game config
     */
    init(containerElement, config) {

        AddJigsawPlugin(Phaser);
        
        this.destroy();
        
        //Set Game Config
        GameConfig.setConfig(config);

        //Start Game
        var game = new Phaser.Game(800, 600, Phaser.CANVAS, containerElement, false, false);
        game.state.add("Boot", Boot);
        game.state.add("Preload", Preload);
        game.state.add("GameTitle", GameTitle);
        game.state.add("Main", Main);
        game.state.add("GameOver", GameOver);
        game.state.add("DifficultySelect", DifficultySelect);
        game.state.start("Boot");
        
        this.game = game;
    }
    
    /**
     * Destroys game
     */
    destroy()
    {
        GameConfig.reset();
        if(this.game)
        {
            this.game.destroy();
            this.game = null;
        }
    }
}

export default new Game();