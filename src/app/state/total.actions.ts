import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Total Component] Increment',
  props<{ amount: number }>()
);

export const decrement = createAction(
  '[Total Component] Decrement',
  props<{ amount: number }>()
);
