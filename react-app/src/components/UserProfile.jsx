import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function UserProfile({ users }) {
  const { user } = useParams(); 
  console.log("user param:", user);
  return (
    <article className="userProfile">
      <img src="public/bilde.png" />
    
      <div className="infoBox">

      <h1>{user}</h1>
      <a href="mailto:someone@example.com">navn@navnesen.no</a>

      <h3>Interesser</h3>
      <ul>
        <li>Interesse</li>
        <li>Interesse</li>
        <li>Interesse</li>
        <li>Interesse</li>
        <li>Interesse</li>
        <li>Interesse</li>
      </ul>

      <h3>Biografi</h3>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate rerum laboriosam culpa dolor consectetur maxime minus 
        iusto in labore, tenetur et quidem illum aliquid deleniti doloremque neque 
        odit ipsum error corporis repudiandae provident recusandae mollitia. 
        Enim mollitia tenetur provident, et hic rerum omnis asperiores sit totam? 
        Reprehenderit molestias voluptatum tempora.</p>
      </div>

      

    </article>
  );
}