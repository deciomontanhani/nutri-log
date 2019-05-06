import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import Meal from '~/models/Meal';

const { Types, Creators } = createActions({
  addMeal: ['meal'],
});

export const MealTypes = Types;

export default Creators;

export const INITIAL_STATE = Immutable({
  meals: [
    new Meal(1, '08:25h', 'Lanche Integral', 'Feliz e saciado'),
    new Meal(2, '12:30h', 'Almoço Executivo', 'Ansioso e levemente saciado'),
    new Meal(3, '14:00h', 'Frutas com Iogurte', 'Contente, com fome'),
  ],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_MEAL]: () => (state, { meal }) => state.merge({ meals: [...state.meals, meal] }),
});
