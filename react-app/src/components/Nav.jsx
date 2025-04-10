
import { Link, useLocation } from "react-router-dom"; 

export default function Nav() {
  const location = useLocation(); 

  return (
    <header>
      <nav>
      <Link to="/" className="icon">TEAM 18</Link>
      <ul>
          <li>
            <Link to="/">Hjem</Link>
          </li>
          <li>
            <Link to="/arshad">Arshad</Link>
          </li>
          <li>
            <Link to="/hedda">Hedda</Link>
          </li>
          <li>
            <Link to="/markus">Markus</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
