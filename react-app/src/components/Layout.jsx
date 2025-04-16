import Nav from "./Nav";//jsk

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