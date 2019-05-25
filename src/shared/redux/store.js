import {createStore}  from 'redux'




const initialState = {

fname : ""

}


export function reducer (state = initialState, action)
{
  switch (action.type)
  {
    case "ADD_FIRSTNAME":
      return Object.assign({},state,{

        fname : action.text
      })

    default:
      return state
  }



}


export const store = createStore(reducer)
