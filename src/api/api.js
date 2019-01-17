
import axios from "axios";
const API_BASE_URL = "http://5c3f57bac27832001404e338.mockapi.io/saga";

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
//Get
function* getData(){
    const response = yield client.get("/product-saga");
    const data= yield response.status === 200 ? response.data :[];
    return  data;  
}
// Post
function* createData(params){
    const response = yield client.post("/product-saga",params);
    const isOk= yield response.status === 201 ?true :false;
    return  isOk;  
}


export const Api = {
    getData,
    createData
};

// export const fetchtasks = () => {
//     return client.get("/tasks");
//   };
  
//   export const createTask = (params) => {
//     return client.post("/tasks", params);
//   }
  
//   export const updateTask = (id, params) => {
//     return axios.put(`${API_BASE_URL}/tasks/${id}`, params);
//   }
  