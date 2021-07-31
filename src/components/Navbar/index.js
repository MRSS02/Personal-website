import "./styles.css"
import { Link, useLocation } from "react-router-dom"


export default function Navbar() {
  let location = useLocation();

  return (
    <div className="Navbar">
      <Link className={
        location.pathname === "/" ? "active linkInstance"
        : "linkInstance"}
      to="/">Home</Link>
      <Link className={
        location.pathname === "/sites" ? "active linkInstance"
        : "linkInstance"}
        to="/sites">Sites</Link>
      <Link className={
        location.pathname === "/games" ? "active linkInstance"
        : "linkInstance"}
      to="/games">Games</Link>
    </div>
  )
}
