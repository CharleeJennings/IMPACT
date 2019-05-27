import {createStore}  from 'redux'




const initialState = {

fname : "",
user: {},


}


export function reducer (state = initialState, action)
{
  switch (action.type)
  {
    case "ADD_FIRSTNAME":
      return Object.assign({},state,{

        fname : action.text
      })
    case "ADD_USER":
      return Object.assign({},state,{user:action.user})
    default:
      return state
  }



}


export const store = createStore(reducer)
