
import Nav from "./Nav";//jsk

import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>Gruppe18</h1>
        <nav>
          <Link to="/">Hjem</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;

import Nav from "./Nav";


export default function Layout({ children }) {
    return (
        <>
        <Nav></Nav>
        <main>
        {children}
        </main>
        </>
    );
  }
