import {ANSWERED_Q} from "../actions/types";

const initialState = {
  questions: [],
  answeredQ: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ANSWERED_Q) {
    state.answeredQ = action.payload;
  }
  console.log({state});
  return state;
}
export default rootReducer;
