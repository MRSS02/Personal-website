import "./styles.css"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link className="linkInstance" to="/">Home</Link>
      <Link className="linkInstance" to="/sites">Sites</Link>
      <Link className="linkInstance" to="/games">Games</Link>
    </div>
  )
}
