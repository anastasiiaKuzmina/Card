import {data} from './data';

class Game implements IGame {
  private randomArray: Array<any>;
  cardGame: HTMLElement;

  constructor() {
    this.cardGame = document.querySelector('.card-game') as HTMLElement;
    this.randomArray = [];

    this.init();
    this.render();
  }

  init() {
    const arr = Object.keys(data);
    this.randomArray = arr.slice();
    for(let i = 0; i < arr.length; i++) {
      this.randomArray.push(arr[i]);
    }

    return this.random(this.randomArray);
  }

  random(arr: any) {
    for(let i = arr.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      let randomItem = arr[randomIndex];
      arr[randomIndex] = arr[i];
      arr[i] = randomItem;
    }

    return arr;
  }

  render() {
    this.randomArray.forEach((item: any) => {
      if(data[item]) {
        const elem = document.createElement('button');
        const elemFront = document.createElement('span');
        const elemBack = document.createElement('span');
        elem.className = "button-card";
        elemFront.className = "button-card__part button-card__part-front";
        elemBack.className = "button-card__part button-card__part-back";
        elemFront.style.cssText = `background-image: url("cat.jpg");`;
        elemBack.style.cssText = `background-image: url("${data[item]}");`;
        elem.appendChild(elemFront);
        elem.appendChild(elemBack);

        elem.addEventListener( 'click', () => {
          elem.classList.add("flip");
        });

        this.cardGame.append(elem);
      }
    });
  }
}

export default Game;

