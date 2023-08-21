import { randColor } from "@ngneat/falso";

export const factorial = (n: number): number => {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

export const generateRandomColor = (randomizationCount: number) => {
  let color = randColor();
  for (let i = 0; i < factorial(randomizationCount); i++) {
    color = randColor();
  }
  return color;
}

