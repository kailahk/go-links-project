import "./NetflixReposPage.css"
import NetflixReposList from "../../components/NetflixReposList/NetflixReposList"
import { useState } from "react"
import { getRepos } from "../../utilities/repo-api"

export default function NetflixReposPage() {
    const company = 'Netflix'
    const [netflixRepos, setNetflixRepos] = useState(getResults);
    async function getResults() {
        try {
            const res = await getRepos(company);
            setNetflixRepos(res)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="NetflixReposPage">
            <NetflixReposList netflixRepos={netflixRepos} />
        </div>
    )
}