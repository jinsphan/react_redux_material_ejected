// import { request } from "app/utils/request";
import { getFifaByName } from "app/api";
import { GET_COUNTRY_FIFA } from "./actionTypes";

export function setCountryFifa(country) {
  return { country, type: GET_COUNTRY_FIFA };
}

export function getCountryFifa(countryId) {
  return dispatch => {
    // This is for request to server
    // return request().get("/matches/country", { params: { fifa_code: countryId } })
    // .then(response => {
    //   dispatch(setCountryFifa(response.data));
    // });

    // This is demo request with promise
    console.log(process.env);
    return getFifaByName(countryId).then(data => {
      dispatch(setCountryFifa(data));
    });
  };
}

export default {
  getCountryFifa,
};
