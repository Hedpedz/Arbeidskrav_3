import { Link } from 'react-router-dom';

function ProfileCard({ member }) {
  return (
    <div className="profile-card">
      <img src={member.imageUrl} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.email}</p>
      <Link to={`/${member.name}`}>Se profil</Link>
    </div>
  );
}

export default ProfileCard;