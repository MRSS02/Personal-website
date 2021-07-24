import "./styles.css"
import { Link } from "react-routter-dom"

export default function Home() {
  return(
    <div>
     <p className="helloWorld">Hi, this is my website.</p>
     <div className="myWork">
       <div className="desc">Check out my work:</div>
       <Link to="/webdev">Web developmment</Link>
       <Link to="/games">Games</Link>
     </div>

    </div>
  )
}
