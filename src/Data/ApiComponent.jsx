
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../App.css';

const ApiComponent = () => {
  
const [data, setData] = useState([])



const url = "https://jsonplaceholder.typicode.com/posts";

const getFetchData = async(url) => {
  await axios.get(url).then((res) => {
    setData(res.data)
    console.log("ress" , res)
  })

}

useEffect(() => {
getFetchData(url)
}, [])

const [detail, setDetail] = useState(null)

const handlechange = (e) => {
  const {name, value} = e.target 
  
}




  return (
    <div className='App-detail'>
      
        
        {data?.length > 0 && data?.map((item, index) => {
          return (
           <div className='card'>
            <ul key={index}>
              <li>{item.body}</li>
              <li>{item.title}</li>
            </ul>
           </div>
           
          )
        })}
        
      
    </div>
  )
}

export default ApiComponent

