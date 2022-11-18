export const TIMER = 'TIMER';
export const MIN= 'MIN'
export const Timer = (timer: any) => ({
  type: TIMER,
  payload: timer,
});
export const Min = (min: any) => ({
  type: MIN,
  payload: min,
});
