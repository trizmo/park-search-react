import axios from 'axios';
import APIKEY from './config/keys'

const BASEURL = "https://developer.nps.gov/api/v1/parks?stateCode=";

export default {
  search: function(query) {
    console.log("getting data", BASEURL + query)
    return axios.get(BASEURL + query + APIKEY.NPS_API_KEY);
  },

  getFavorites: function() {
    return axios.get("/api/favorites");
  },

  addToFavorites: function(name) {
    return axios.post("/api/favorites", name)
  }
}



// EXAMPLE:
// https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=7pUOGAxRW75zlyAVYdazUiRRYvqo4S32uPvYDZWs