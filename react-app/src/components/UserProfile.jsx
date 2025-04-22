import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../sanity/client';

export default function UserProfile() {
  const { slug } = useParams();
  const [member, setMember] = useState(null);
  const [memberLogs, setMemberLogs] = useState([]);

  useEffect(() => {
    const fetchMemberData = async () => {
      const memberQuery = `*[_type == "member" && slug.current == $slug][0]{
        _id,
        name,
        email,
        "profileImage": profileImage.asset->url,
        interests,
        bio
      }`;
      const memberParams = { slug };
      const memberData = await client.fetch(memberQuery, memberParams);
      setMember(memberData);

      if (memberData?._id) {
        const logQuery = `*[_type == "logEntry" && member._ref == $memberId] | order(logDate desc, _createdAt desc) {
          _id,
          description,
          logDate,
          hours,
          _createdAt
        }`;
        const logParams = { memberId: memberData._id };
        const logData = await client.fetch(logQuery, logParams);
        setMemberLogs(logData);
      } else {
        setMemberLogs([]);
      }
    };

    fetchMemberData();

  }, [slug]);

  if (!member) {
    return null;
  }

  return (
    <article className="userProfile">
      <section className="profileMainContent">
        {member.profileImage && <img src={member.profileImage} alt={member.name} />}
        <section className="infoBox">
          <h1>{member.name}</h1>
           {member.bio && (
             <section>
               <h3>Biografi</h3>
               <p>{member.bio}</p>
             </section>
            )}
           {member.interests && member.interests.length > 0 && (
             <section>
               <h3>Interesser</h3>
               <ul>
                 {member.interests.map((interest, index) => (
                   <li key={index}>{interest}</li>
                 ))}
               </ul>
             </section>
           )}
        </section>
      </section>

      {memberLogs && memberLogs.length > 0 && (
        <section className="logEntriesSection">
          <h2>Arbeidslogg for {member.name}</h2>
          <table className="logTable">
            <thead>
              <tr>
                <th>Dato</th>
                <th>Beskrivelse</th>
                <th>Timer</th>
              </tr>
            </thead>
            <tbody>
              {memberLogs.map((entry) => {
                 const displayDate = entry.logDate ? new Date(entry.logDate) : new Date(entry._createdAt);
                 const formattedDate = displayDate.toLocaleDateString('nb-NO', { day: '2-digit', month: '2-digit', year: 'numeric' });
                 return (
                   <tr key={entry._id}>
                     <td>{formattedDate}</td>
                     <td>{entry.description}</td>
                     <td>{entry.hours ? `${entry.hours} timer` : ''}</td>
                   </tr>
                 );
              })}
            </tbody>
          </table>
        </section>
      )}
    </article>
  );
}