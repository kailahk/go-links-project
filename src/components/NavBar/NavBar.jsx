import "./NavBar.css"
import {Link} from "react-router-dom"

export default function NavBar() {
    return(
        <div className="NavBar">
            <Link to="/netflixrepos">Netflix Repos</Link>
        </div>
    )
}