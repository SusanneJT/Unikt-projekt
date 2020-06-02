import axios from 'axios';

export async function GetProducts(url) {
    return axios.get(`http://localhost:3000/products` + url);
}




/*
.then(function(response) {
    console.log(response.data);
 }).catch(function(error) {
    console.log(error.response.data);
 });
 */ 