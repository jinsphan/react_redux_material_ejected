import { GET_COUNTRY_FIFA } from "app/actions/actionTypes";

const initialState = {
  country: [],
};

export default function(state = initialState, payload) {
  switch (payload.type) {
    case GET_COUNTRY_FIFA:
      return {
        country: payload.country,
      };
    default:
      return state;
  }
}
