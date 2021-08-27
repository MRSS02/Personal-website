import "./styles.css"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  let location = useLocation();

  function fadeInAnimation(event) {
    console.log(event.target.className)
    event.target.className += " transition"
    setTimeout(() => {
      event.target.className.replace("transition", "")
    }, 4000);
  }

  return (
    <div className="Navbar">
      <Link className={
        location.pathname === "/" ? "active linkInstance"
        : "linkInstance"}
      to="/" onClick={(e) => fadeInAnimation(e)}>Home</Link>
      <Link className={
        location.pathname === "/sites" ? "active linkInstance"
        : "linkInstance"}
        to="/sites" onClick={(e) => fadeInAnimation(e)}>Sites</Link>
      <Link className={
        location.pathname === "/games" ? "active linkInstance"
        : "linkInstance"}
      to="/games" onClick={(e) => fadeInAnimation(e)}>Games</Link>
    </div>
  )
}
