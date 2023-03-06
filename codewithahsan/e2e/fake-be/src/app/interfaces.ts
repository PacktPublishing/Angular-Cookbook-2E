export enum Fruit {
  Apple = 'Apple 🍎',
  Banana = 'Banana 🍌',
  Grapes = 'Grapes 🍇',
  Cherries = 'Cherry 🍒',
}

export interface IFruit {
  id: number;
  name: Fruit;
}

export type Bucket = IFruit[];
