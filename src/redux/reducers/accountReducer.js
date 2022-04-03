// A reducer is a function that ultimately returns a state

// const reducer = (initialState, typeOfActionToChangeTheState)
// Read the action and then return the appropriate state
// Switch statements are standard
// Create a constants file so the action name will not be prone to typos
// Typescript can be used to make sure the payload is always an acceptable type
const initialState = {
  name: "anon",
  cash: 52,
  age: 23
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":

      return state + action.payload;
    
    case "WITHDRAW":
      return state - action.payload;
    
    case "ROB":
      return state.cash - action.payload
    default:
      return state;
  }
}

export default reducer; 