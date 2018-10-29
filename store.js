import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const initialState = {
  activeClass: 'citizen-page'
}
export const actionTypes = {
  REPRESENT: 'REPRESENT',
  PARTNER: 'PARTNER',
  CITIZEN: 'CITIZEN'
}

// reducer
export const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REPRESENT:
      return {activeClass: 'represent-page'}
    case actionTypes.PARTNER:
      return {activeClass: 'partner-page'}
    case actionTypes.CITIZEN:
      return {activeClass: 'citizen-page'}
    default:
      return state
  }
}


const reducers = combineReducers({
  // ваши редюсеры
  classReducer,
  form: formReducer     // В state все данные формы будут храниться в свойстве form
})

// ACTIONS

// export const representClass = () => dispatch => {
//   return dispatch({type: actionTypes.REPRESENT})
// }
export const representClass = () => {
  return {type: actionTypes.REPRESENT}
}
// export const citizenClass = () => dispatch => {
//   return dispatch({type: actionTypes.CITIZEN})
// }
export const citizenClass = () => {
  return {type: actionTypes.CITIZEN}
}
// export const partnerClass = () => dispatch => {
//   return dispatch({type: actionTypes.PARTNER})
// }
export const partnerClass = () => (
  {type: actionTypes.PARTNER}
)

// export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export function initializeStore(initialState = initialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))   
   
}


