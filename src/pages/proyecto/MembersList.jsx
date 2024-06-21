export default function MembersList({ membersList }) {
  return (
    <div className="members_list">
      <h3>Miembros:</h3>
      {membersList.map((member) => (
        <span key={member} className="member">- {member}</span>
      ))}
      
    </div>
  );
}
