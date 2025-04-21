import { useEffect, useState } from "react";
import { client } from "../sanity/client"; 
import UserCard from "./UserCard";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [logEntries, setLogEntries] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const query = `*[_type == "member"]{
        name,
        firstName,
        "slug": slug.current,
        email,
        "profileImage": profileImage.asset->url,
        logEntries[] {
        description, 
        logDate,
        hours
        }
      }`;

      const data = await client.fetch(query);
      console.log("Loggdata:", data.map(member => ({
        name: member.name,
        logEntries: member.logEntries
      })));
      setUsers(data);

      //Lager en liste med alle loggoppføringer m/ navn
      const allLogs = data.flatMap(member =>
        (member.logEntries || []).map(entry => ({
          name: member.name,
          ...entry
        }))
      );
      const sortedLogs = allLogs.sort((a, b) => new Date(b.logDate) - new Date(a.logDate));
      setLogEntries(sortedLogs)
    };
      

    fetchMembers();
  }, []);

  return (
    <>
      <h1>Gruppemedlemmer</h1>
      <section className="userCardContainer">
        {users.map((user) => (
          <UserCard key={user.slug} user={user} />
        ))}
      </section>

      <h1>Arbeidslogg</h1>
      <table className="logTable">
        <tbody>
          {logEntries.map((entry, index) => (
            <tr key={index}>
              <td>{new Date(entry.logDate).toLocaleDateString('nb-NO')}</td>
              <td>{entry.name}</td>
              <td>{entry.description}</td>
              <td>{entry.hours} timer</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

