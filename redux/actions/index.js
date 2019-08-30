import {ANSWERED_Q} from "./types";

export function answeredQ(data) {
  return {
    type: ANSWERED_Q,
    payload: data
  };
}
