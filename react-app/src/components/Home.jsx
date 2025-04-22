import { useEffect, useState } from "react";
import { client } from "../sanity/client";
import UserCard from "./UserCard";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [logEntries, setLogEntries] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
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

    const fetchAllLogs = async () => {
       const logQuery = `*[_type == "logEntry"] | order(logDate desc, _createdAt desc) {
         _id,
         description,
         logDate,
         hours,
         _createdAt,
         "name": member->name
       }`;
       const data = await client.fetch(logQuery);
       setLogEntries(data);
    }

    fetchUsers();
    fetchAllLogs();
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
        <thead>
          <tr>
            <th>Dato</th>
            <th>Navn</th>
            <th>Beskrivelse</th>
            <th>Timer</th>
          </tr>
        </thead>
        <tbody>
          {logEntries.map((entry) => {
             const displayDate = entry.logDate ? new Date(entry.logDate) : new Date(entry._createdAt);
             const formattedDate = displayDate.toLocaleDateString('nb-NO', { day: '2-digit', month: '2-digit', year: 'numeric' });
            return (
              <tr key={entry._id}>
                <td>{formattedDate}</td>
                <td>{entry.name || 'Ukjent'}</td>
                <td>{entry.description}</td>
                <td>{entry.hours ? `${entry.hours} timer` : ''}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}