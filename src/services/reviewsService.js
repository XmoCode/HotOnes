import http from "./httpService";
import config from "../config.json";

export function getReviews() {
  return http.get(config.apiUrl + "/reviews");
}

export function getReview(id) {
  return http.get(config.apiUrl + "/reviews/" + id);
}

export function saveReview(review) {
  if (review._id) {
    const body = { ...review };
    delete body._id;
    return http.put(config.apiUrl + "/reviews/" + review._id, body);
  }

  return http.post(config.apiUrl + "/reviews", review);
}

export function deleteSauce(id) {
  return http.delete(config.apiUrl + "/reviews/" + id);
}
