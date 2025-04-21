import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../sanity/client';


export default function UserProfile() {
  const { slug } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `*[_type == "member" && slug.current == $slug][0]{
      name,
      email,
      "profileImage": profileImage.asset->url,
      interests,
      bio,
      logEntries[]{ description, logDate, hours } | order(logDate desc)
    }`;
    const params = { slug };

    setLoading(true);
    client.fetch(query, params)
      .then(data => {
        setMember(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch member data');
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p>Laster profildata...</p>;
  if (error) return <p>{error}</p>;
  if (!member) return <p>Fant ikke gruppemedlem.</p>;

  return (
    <article className="userProfile">

      <section className="profileMainContent">
        {member.profileImage && <img src={member.profileImage} alt={member.name} />}
        <section className="infoBox">
          <h1>{member.name}</h1>
          {member.email && <a href={`mailto:${member.email}`}>{member.email}</a>}

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

          {member.bio && (
            <section>
              <h3>Biografi</h3>
              <p>{member.bio}</p>
            </section>
          )}
        </section>
      </section> 


      {member.logEntries && member.logEntries.length > 0 && (
        <section className="logEntriesSection">
          <h2>Loggføringer for {member.name}</h2>
          <table className="logTable">
            <thead>
              <tr>
                <th>Dato</th>
                <th>Beskrivelse</th>
                <th>Timer</th>
              </tr>
            </thead>
            <tbody>
              {member.logEntries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.logDate ? new Date(entry.logDate).toLocaleDateString('nb-NO') : 'Ukjent dato'}</td>
                  <td>{entry.description}</td>
                  <td>{entry.hours ? `${entry.hours} timer` : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </article>
  );
}