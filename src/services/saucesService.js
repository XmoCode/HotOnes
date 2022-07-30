import http from "./httpService";
import config from "../config.json";

export function getSauces() {
  return http.get(config.apiUrl + "/sauces");
}

export function getSauce(id) {
  return http.get(config.apiUrl + "/sauces/" + id);
}

export function saveSauce(sauce) {
  if (sauce._id) {
    const body = { ...sauce };
    delete body._id;
    return http.put(config.apiUrl + "/sauces/" + sauce._id, body);
  }

  return http.post(config.apiUrl + "/sauces", sauce);
}

export function deleteSauce(id) {
  return http.delete(config.apiUrl + "/sauces/" + id);
}
