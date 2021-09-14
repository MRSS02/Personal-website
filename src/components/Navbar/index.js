import "./styles.css"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  let location = useLocation();
  const initializeStates = ["active", "active", "active"]
  const [buttonStates, setButtonStates] =
  useState(initializeStates.slice());
  function animation(index) {
    let newStates = initializeStates.slice()
    newStates[index] += " animation"
    setButtonStates(newStates)
    console.log(buttonStates)
    setTimeout(() => {
      setButtonStates(initializeStates.slice())
      console.log(buttonStates)
    }, 100)
  }

  return (
    <div className="Navbar">
      <Link className={
        location.pathname === "/" ?
        `${buttonStates[0]} linkInstance` : "linkInstance"}
      to="/" onClick={() => animation(0)}>Home</Link>
      <Link className={
        location.pathname === "/sites" ?
        `${buttonStates[1]} linkInstance` : "linkInstance"}
        to="/sites" onClick={() => animation(1)}>Sites</Link>
      <Link className={
        location.pathname === "/games" ?
        `${buttonStates[2]} linkInstance` : "linkInstance"}
      to="/games" onClick={() => animation(2)}>Games</Link>
    </div>
  )
}
