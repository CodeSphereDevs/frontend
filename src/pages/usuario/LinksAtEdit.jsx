export default function LinksAtEdit({ externalLink, deleteLink }) {
  const { label, link } = externalLink;
  return (
    <div className="linkAtEdit">
      <span>{label}</span>
      <span>{link}</span>
      <button onClick={deleteLink}>x</button>
    </div>
  );
}
