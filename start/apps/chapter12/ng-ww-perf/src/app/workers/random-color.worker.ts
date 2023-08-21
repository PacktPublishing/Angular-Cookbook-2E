/// <reference lib="webworker" />

// import { randColor } from "@ngneat/falso";

// function randomColor(randomizationCount: number) {
//   let color;
//   for (let i = 0; i < factorial(randomizationCount); i++) {
//     color = randColor();
//   }
//   return color;
// }

// function factorial(n: number): number {
//   if (n == 0 || n == 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }


addEventListener('message', ({ data }) => {
  console.log('I WAS HERE', data)
  const response = `worker response to ${data}`;
  postMessage(data);
});
