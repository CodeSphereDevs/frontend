import JoinProjectBtn from "./JoinProjectBtn";

export default function ProjectInfo({ project, user }) {
  return (
    <div className="project_info">
      <header>
        <h1>{project.projectName}</h1>
        {user != null && !project.membersList.includes(user.username) && <JoinProjectBtn />}
        {user != null && project.pendingMembersList.includes(user.username) && <span>Esperando aprobación</span>}
      </header>
      <p>{project.details}</p>
    </div>
  );
}
