/// <reference lib="webworker" />

import { generateRandomColor } from "../utils";

addEventListener('message', ({ data }) => {
  const {
    randomizationCount
  } = data;
  console.log('inside the worker', data)
  if (!randomizationCount) {
    return;
  }
  const color = generateRandomColor(randomizationCount);
  postMessage({
    color
  });
});

export const getRandomColorWorker = () => {
  if (typeof Worker !== undefined) {
    return new Worker(new URL('./random-color.worker', import.meta.url), {
      type: 'module'
    })
  }
  return null;
}
