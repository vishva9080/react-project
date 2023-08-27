import React, { useEffect, useState } from "react"
import  Axios  from "axios"
import { Link } from "react-router-dom"

function Home() {
    const [data,setData] = useState([])
    useEffect(()=>{
   Axios.get("https://jsonplaceholder.typicode.com/users")
   .then((res)=>{
       setData(res.data)
       console.log(res.data);
   })
   .catch((err)=>{
  console.log(err);
   })
    },[])
    return(
        <div>
           {
            data.map((val,ind)=>{
               return( 
               <div key={ind}>
                    <Link to={`/contact?id=${val.id}`}>{val.name}</Link>
            </div>
            )
            })
           }
        </div>
    )
}
export default Home