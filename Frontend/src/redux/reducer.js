// parameterReducer.js

const initialState = 0;

const parameterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PARAMETER':
      return action.payload;
    default:
      return state;
  }
};

export default parameterReducer;
