import {TIMER} from './Action';
import { MIN } from './Action';

const initialValue = {
  timer: '',
  min:''
};

export const timerReducer = (state = initialValue, {type, payload}: any) => {
  switch (type) {
    case TIMER:
      return {...state, timer: payload};
    case MIN:
      return {...state, min: payload};
    default:
      return state;
  }
};
