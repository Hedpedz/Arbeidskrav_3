import { useEffect, useState } from "react";
import { client } from "../sanity/client"; 
import UserCard from "./UserCard";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const query = `*[_type == "member"]{
        name,
        firstName,
        "slug": slug.current,
        email,
        "profileImage": profileImage.asset->url
      }`;

      const data = await client.fetch(query);
      setUsers(data);
    };

    fetchMembers();
  }, []);

  return (
    <>
      <h1>Gruppemedlemmer</h1>
      <div className="userCardContainer">
        {users.map((user) => (
          <UserCard key={user.slug} user={user} />
        ))}
      </div>

      <h1>Arbeidslogg</h1>
    </>
  );
}
