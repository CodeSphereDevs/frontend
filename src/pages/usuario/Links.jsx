export default function Links({ links }) {
  return (
    <div className="links">
      <h3>Links</h3>
      {links.map((link, index) => {
        if (index % 2 == 0) {
          return <a href={links[index+1]} target="_blank" rel="noopener noreferrer" key={link}>{link}</a>;
        }
      })}
    </div>
  );
}
