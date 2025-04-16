import { Link } from "react-router-dom";
import UserCard from "./UserCard";

export default function Home() {
  return (
    <>
    <h1>Gruppemedlemmer</h1>
    <div className="userCardContainer">
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
    </div>

    <h1>Arbeidslogg</h1>
    </>

  );
}