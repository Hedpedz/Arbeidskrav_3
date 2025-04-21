import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"; 
import { client } from "../sanity/client"; 

export default function Nav() {
  const location = useLocation();
  const [members, setMembers] = useState([]); 

  useEffect(() => {
    const query = `*[_type == "member"]{firstName, "slug": slug.current}`;
    client.fetch(query).then(data => {
      setMembers(data);
    }).catch(console.error);
  }, []); 

  return (
    <header>
      <nav>
        <Link to="/" className="icon">GRUPPE 18</Link>
        <ul>
          <li>
            <Link to="/">Hjem</Link>
          </li>
          {}
          {members && members.map(member => (
            <li key={member.slug}>
              {}
              <Link to={`/${member.slug}`}>{member.firstName}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}