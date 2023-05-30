import "./NetflixReposPage.css"
import { useState } from "react"
import {getRepos} from "../../utilities/repo-api"

export default function NetflixReposPage() {
    const company = 'Netflix'
    const [netflixRepos, setNetflixRepos] = useState(getRepos(company))
    return (
        <div className="NetflixReposPage">
            Netflix Repositories
        </div>
    )
}