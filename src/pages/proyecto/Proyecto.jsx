import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Proyecto.scss";
import { useUserContext } from "../../contexts/useUserContext";
import { getProjectByName } from "../../api/getProjectByName";
import ProjectInfo from "./ProjectInfo";
import MembersList from "./MembersList";
import PendingMembersList from "./PendingMembersList";

export default function Proyecto() {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { projectName } = useParams();
  const { user } = useUserContext();


useEffect(()=>{(async()=>{
  const projectNameWithSpaces = projectName.replaceAll("_"," ")
  const response = await getProjectByName(projectNameWithSpaces);
  if(response.success){
    setProject(response.data);
    setIsLoading(false);
  }
})();},[projectName]);


  if(project == null){
    return <span>loading...</span>
  }

  return (
    <>
    <div className="project_container">
      <ProjectInfo project={project} user={user}/>
      <MembersList membersList={project.membersList}/>
      {user != null && project.membersList[0] == user.username && <PendingMembersList pendingMembersList={project.pendingMembersList}/>}
    </div>

    <div
        style={{
          whiteSpace: "pre-line",
          border: "1px solid #222",
          marginTop: "10vh",
          fontSize: "-7rem",
          color:"gray",
          padding: "16px",
        }}
      >
        {JSON.stringify(project, null, 2)}
      </div></>
  )
}
