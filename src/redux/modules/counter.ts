import { Action } from 'redux';

export const INCREASE_ONE = 'INCREASE_ONE';
export const INCREASE_TEN = 'INCREASE_TEN';

export const MINUS_ONE = 'MINUS_ONE';

export const MINUS_TEN = 'MINUS_TEN';

export const RESET = 'RESET';

export const SET_COUNT_INPUT = 'SET_COUNT_INPUT';

export const APPLY_COUNT_INPUT = 'APPLY_COUNT_INPUT';

export const SET_CHANGE_INPUT = 'SET_CHANGE_INPUT';
export const increaseOne = () => ({
  type: INCREASE_ONE,
});

export const increaseTen = () => ({
  type: INCREASE_TEN,
});

export const minusOne = () => ({
  type: MINUS_ONE,
});

export const minusTen = () => ({
  type: MINUS_TEN,
});

export const reset = () => ({
  type: RESET,
});

export const setCountInput = (payload: number) => ({
  type: SET_COUNT_INPUT,
  payload,
});

export const applyCountInput = () => ({
  type: APPLY_COUNT_INPUT,
});
export const setChangeInput = (payload: number) => ({
  type: SET_CHANGE_INPUT,
  payload,
});

export type CounterState = {
  count: number;
  countInput: number;
  changeInput: number;
};

const counterInitialState: CounterState = {
  count: 546460,
  countInput: 0,
  changeInput: 0,
};

export type CounterAction = Action & {
  payload: number;
};

export const counterReducer = (state: CounterState = counterInitialState, action: CounterAction) => {
  if (action.type === INCREASE_ONE) {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === INCREASE_TEN) {
    return {
      ...state,
      count: state.count + 10,
    };
  }

  if (action.type === MINUS_ONE) {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  if (action.type === MINUS_TEN) {
    return {
      ...state,
      count: state.count - 10,
    };
  }

  if (action.type === RESET) {
    return counterInitialState;
  }
  if (action.type === SET_COUNT_INPUT) {
    return {
      ...state,
      countInput: action.payload,
    };
  }

  if (action.type === APPLY_COUNT_INPUT) {
    return {
      ...state,
      count: state.countInput,
      countInput: 0,
    };
  }
  if (action.type === SET_CHANGE_INPUT) {
    return {
      ...state,
      changeInput: action.payload,
    };
  }

  return state;
};
