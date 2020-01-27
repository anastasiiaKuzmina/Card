import Game from './components/Game';
import './styles/style.css';

class App {
  game: IGame;
  
  constructor() {
    this.game = new Game();
  }
}

const app = new App();

export default app;