import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const promise = axios.get(baseUrl);
  return promise.then((response) => response.data);
};

const create = (newPerson) => {
  const promise = axios.post(baseUrl, newPerson);
  return promise.then((response) => response.data);
};

const remove = (id) => {
  const promise = axios.delete(`${baseUrl}/${id}`);
  return promise.then((response) => response.data);
};

const update = (id, newPerson) => {
  const promise = axios.put(`${baseUrl}/${id}`, newPerson);
  return promise.then((response) => response.data);
};
export default { getAll, create, remove, update };
