import UserCard from "../../componentes/userCard/userCard";
import { useState, useEffect } from "react";
import { getUsers } from "../../api/getUsers";
import "./Usuarios.scss";
import UserCardSkeleton from "./UserCardSkeleton";

export default function Usuarios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getUsers();
      if (response.success) {
        setUsers(response.data);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="users-list">
      {loading ? (
        <>
          <UserCardSkeleton />
          <UserCardSkeleton />
          <UserCardSkeleton />
          <UserCardSkeleton />

        </>
      ) : (
        <>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}

        </>
      )}
    </div>
  );
}
