import React, {useState , useEffect} from 'react'
import {Link , Route} from 'react-router-dom'
import Axios from 'axios'

const UserList =(props)=>{
    const [users , setUser] =useState([])

    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const res=response.data
           setUser(res)
         
        })
        .catch(err =>{
            console.log(err.message)
        })
    })
   

    return (
        <div>
           
                 <h2>User List - {users.length}</h2>
        <ol>
            {
                 users.map(user=>{
                    return (
                        <div>

                            <li key={user.id}>  <Link to={`/users/${user.id}`}>{user.name}</Link> </li>
                        </div>
                    )
                 })
            }
        </ol>

        </div>
    )
}

export default UserList