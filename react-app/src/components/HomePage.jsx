import { useState, useEffect } from 'react';
import { client } from '../sanity/client.js';
import ProfileCard from '../components/ProfileCard';

function HomePage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "member"]{name, email, "imageUrl": image.asset->url}')
      .then((data) => setMembers(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Medlemmer</h2>
      <div className="member-list">
        {members.map((member) => (
          <ProfileCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;