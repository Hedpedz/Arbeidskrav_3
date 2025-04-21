import { Link } from "react-router-dom";
import { client } from '../sanity/client';

export default function UserCard({ user }) {
  
  return (
    <article className="userCard">
      <Link to={`/${user.slug}`}>
        <img src={user.profileImage} alt={user.name} />
        <h3>{user.name}</h3>
      </Link>
      <a href={`mailto:${user.email}`}>{user.email}</a>
    </article>
  );
}

