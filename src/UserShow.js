import React,{useState,useEffect} from "react";
import axios from 'axios'

const UserShow =(props)=>{

    const {id} =props.match.params
    const [user , setUser]= useState({})

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            setUser(response.data)
        })
    },[])

return (
        <div>
            
            <h1>User - {id}</h1>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address&&user.address.city}</p>
            

            
        </div>

    )
}

export default UserShow