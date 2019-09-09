import { ANSWERED_Q, START_GAME, RESET_GAME } from '../actions/types';

const initialState = {
  questions: [],
  answeredQ: [],
  score: 0,
  currentQuestion: 0,
};
function rootReducer(state = initialState, action) {
  //Using a switch statement since it is a bit easier to follow
  //than a lot of if/else statements. Same concept though.
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        questions: action.payload,
      };
    case RESET_GAME:
      return {
        ...initialState,
        questions: state.questions,
      };
    case ANSWERED_Q:
      //In Redux you want to follow the pattern of immutability which
      //is a fancy way of saying "Don't change things directly. Make a copy
      //and change that." This helps to reduce bugs in your application.
      //Here I'm using the spread operator to create a copy of state and then
      //update the copy with the properties I want to change
      if (state.currentQuestion + 1 == 10) action.payload.nav('Results');
      return {
        ...state,
        answeredQ: [...state.answeredQ, action.payload.answer],
        currentQuestion: state.currentQuestion + 1,
        score:
          action.payload ==
          state.questions[state.currentQuestion].correct_answer
            ? state.score + 1
            : state.score,
      };

    default:
      return state;
  }
}
export default rootReducer;
