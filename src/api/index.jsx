import request from './request';

const baseUrl = `https://www.omdbapi.com/`;

export function getData(params, page) {
  return request.get(`${baseUrl}?s=${params}&page=${page}&apikey=4a3b711b`);
}

export function getCurrData(params) {
  return request.get(`${baseUrl}?i=${params}&apikey=4a3b711b`);
}
