import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const initialState = {
  activeClass: 'citizen-page',
  content: null,
  suggestoins: {}
}
export const actionTypes = {
  REPRESENT: 'REPRESENT',
  PARTNER: 'PARTNER',
  CITIZEN: 'CITIZEN',
  LOAD_SUGGESTIONS: 'LOAD_SUGGESTIONS',
  SET_CONTENT: 'SET_CONTENT'
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

// reducer
export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONTENT:
      return {       
        content: action.data
      }   
    default:
      return state
  }
}

const reducers = combineReducers({
  // ваши редюсеры
  classReducer,
  contentReducer,
  form: formReducer     // В state все данные формы будут храниться в свойстве form
})

// ACTIONS

export const setContent = (data) => {
  return {
    type: actionTypes.SET_CONTENT,
    data
  }
}

export const representClass = () => {
  return {type: actionTypes.REPRESENT}
}

export const citizenClass = () => {
  return {type: actionTypes.CITIZEN}
}

export const partnerClass = () => {
  return {type: actionTypes.PARTNER}
}

// export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export function initializeStore(initialState = initialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))   
   
}


