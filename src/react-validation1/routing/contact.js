import { useEffect, useState } from "react"
import { useLocation, useParams, useSearchParams } from "react-router-dom"
import  Axios  from "axios"

function Contact() {
    const [id,SetId] = useState()
    const { search } = useLocation()
    
    const [data,setData] = useState([])
    useEffect(() => {
        let Params = new URLSearchParams(search)
        console.log(Params.get("id"));
        Axios.get(`https://jsonplaceholder.typicode.com/users/${Params.get("id")}`)
        .then((res)=>{
            setData(res.data)
            console.log(res.data);
        })
        .catch((err)=>{
       console.log(err);
        })
    }, [])

    return (
        <div>
            {
                <div>
                     <p>{data.id}</p>
                     <p>{data.name}</p>
                    <p>{data.username}</p>
                    <p>{data.phone}</p>
                    <p>{data.website}</p>
                    </div>
            }
        </div>
    )
}
export default Contact