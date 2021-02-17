import {createReducer, on} from '@ngrx/store';
import {increment, decrement} from './total.actions';

export const initialState = 0;

// tslint:disable-next-line:variable-name
const _totalReducer = createReducer(
  initialState,
  on(increment, (state, { amount }) => state + amount),
  on(decrement, (state, { amount }) => state - amount)
);

export function totalReducer(state, action): number {
  return _totalReducer(state, action);
}
