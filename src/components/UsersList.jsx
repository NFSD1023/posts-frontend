import { useEffect, useState } from "react"
import UserItem from "./UserItem"

const UsersList = () => {
  async function getUsers() {
    const usersResponse = await fetch('http://localhost:3001/users/list')
    const users = await usersResponse.json()
    setUsers(users)
  }

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      {users.map(user => <UserItem
        name={user.name}
        email={user.email}
      />)}
    </div>
  )
}

export default UsersList