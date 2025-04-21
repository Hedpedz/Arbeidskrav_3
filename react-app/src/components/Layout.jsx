import Nav from "./Header";


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
