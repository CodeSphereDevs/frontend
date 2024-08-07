import { useParams } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../contexts/useUserContext";
import { useEffect } from "react";
import { getUserByName } from "../../api/getUserByName";
import "./Usuario.scss";
import Info from "./Info";
import Loader from "../../assets/loader.svg";
import Links from "./Links";
import EditUserModal from "./EditUserModal";
import Posts from "./Posts";

export default function Usuario() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useParams();
  const { user: userFromContext } = useUserContext();
  const [showEditUserModal, setShowEditUserModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getUserByName(username);
      if (response.success) {
        setUser(response.data);
        setIsLoading(false);
      }
    })();
  }, [username]);

  if (isLoading) {
    return (
      <div className="pageIsLoading">
        <img src={Loader} alt="loader" />
      </div>
    );
  }

  return (
    <>
      <div className="userpage">
        <Info
          user={user}
          isMine={
            userFromContext != null && user.username == userFromContext.username
          }
          showEditUserModal={setShowEditUserModal}
        />
        <Links links={user.links} />
        <Posts posts={user.posts}/>
      </div>
      {showEditUserModal && (
        <div className="backblur">
          <EditUserModal showEditUserModal={setShowEditUserModal} user={user} setUser={setUser} />
        </div>
      )}
      <div
        style={{
          whiteSpace: "pre-line",
          border: "1px solid #222",
          marginTop: "10vh",
          fontSize: "smaller",
          padding: "16px",
          color:"gray"
        }}
      >
        {JSON.stringify(user, null, 2)}
      </div>
    </>
  );
}
