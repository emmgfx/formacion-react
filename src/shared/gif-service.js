import request from "./api-service";

function random(options){
  return request({
    url: `/gifs/random`,
    method: "GET",
    params: {
      api_key: process.env.REACT_APP_API_KEY_GIPHY_API,
      ...options,
    }
  });
}

function search({ term, limit = 5, rating = "R", ...options }){
  return request({
    url: `/gifs/search`,
    method: "GET",
    params: {
      api_key: process.env.REACT_APP_API_KEY_GIPHY_API,
      q: term,
      limit: limit,
      rating: rating,
      ...options
    }
  });
}

const GifService = {
  random,
  search,
};

export default GifService;