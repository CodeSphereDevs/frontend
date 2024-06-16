import UserCard from "../../componentes/userCard/userCard";
import { useState, useEffect } from "react";
import { getUsers } from "../../api/getUsers";
import "./Usuarios.scss"

export default function Usuarios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getUsers();
      if (response.success) {
        setUsers(response.data);
        // setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="users-list">
      {users.map(user => <UserCard user={user}/>)}
    </div>
  )
}
