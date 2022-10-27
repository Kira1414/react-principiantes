import { useEffect, useState } from "react"

const UserList = () => {
    const [users, setUsers] = useState([])
    
    const getUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setUsers(data)
    }
    
    useEffect(()=>{
        getUsers()
    })

    return (
        <div>
            {users.map((user) => (
                <h1 key={user.id}>{user.name} | {user.email}</h1>
            ))}
        </div>
    )
}

export default UserList