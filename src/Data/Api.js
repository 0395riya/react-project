import axios from "axios";




export const getData = () =>{
    const Product = []
    const url = "https://jsonplaceholder.typicode.com/posts";
    return axios.get(url).then((res) => {
   return res.json()
  }).catch((err) => console.log(err))}