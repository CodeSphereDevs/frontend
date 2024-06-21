export default function ProjectInfo({project}) {
  return (
    <div className="project_info">
        <h1>{project.projectName}</h1>
        <p>{project.details}</p>
    </div>
  )
}
