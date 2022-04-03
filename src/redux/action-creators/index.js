// Should have multiple files/folders for each type of state
// To create an action and dispatch, must return a function 
// return function has dispatch parameter, takes object of type : action, and payload which is the value being used to manipulate the state
// ex: dispatch({type: }) **THIS COMMENT REFERS TO THUNK, just return a plain object
import axios from 'axios';


const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'London,uk',
    lat: '0',
    lon: '0',
    callback: 'test',
    id: '2172797',
    lang: 'null',
    units: 'imperial',
    mode: 'xml'
  },
  headers: {
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
    'X-RapidAPI-Key': '95e9fc104dmsha6ddc418cd1fc07p1de64cjsn2088bc16337e'
  }
};
export const depositMoney = (amount) => {
    return {
        type: "DEPOSIT",
        payload: amount
    }
}

export const widthdrawMoney = (amount) => {

  
  return (dispatch) => {
    axios.request(options).then(ele => {
      console.log(ele)
      dispatch({
        type: "WITHDRAW",
        payload: 5
      })
    }).catch(err=>dispatch({
      type: "WITHDRAW",
      payload: 5000
    }))
    
  }
} 