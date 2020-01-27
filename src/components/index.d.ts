
// declare interface IPoint {
//   compare: (item: IPoint) => boolean
//   equal: (x: number, y: number) => boolean
//   move: (offset: number, direction: Direction) => void,
//   render: () => HTMLDivElement,
// }
//
// declare interface IFood {
//   isEaten: (item: IPoint) => boolean,
//   render: () => HTMLDivElement,
// }
//
// declare interface ISnake {
//   addItem: () => number,
//   getLastItem: () => IPoint,
//   init: () => void,
//   initSnakeList: (length: number) => Array<IPoint>,
//   move: () => boolean,
// }
//
declare interface IGame {
  init: () => string | Node,
}
