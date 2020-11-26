const initialState = {
  count: 0,
};
export default function aReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      console.log(state);
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}
