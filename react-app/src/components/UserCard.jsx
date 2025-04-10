import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <article className="userCard">
      <img src="public/bilde.png" />
      <h3>Navn navnesen</h3>
      <a href="mailto:someone@example.com">navn@navnesen.no</a>
    </article>
  );
}