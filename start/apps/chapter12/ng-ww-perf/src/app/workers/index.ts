import './random-color.worker';
let randomColorWorker: Worker | null = null;

export const getRandomColorWorker = () => {
  if (typeof Worker !== undefined && randomColorWorker !== null) {
    return randomColorWorker;
  }
  randomColorWorker = new Worker('./random-color.worker', {
    type: 'module'
  });
  return randomColorWorker;
}
