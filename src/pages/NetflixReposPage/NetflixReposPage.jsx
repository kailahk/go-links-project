import "./NetflixReposPage.css"
import NetflixReposList from "../../components/NetflixReposList/NetflixReposList"
import { useState, useEffect } from "react"
import { getRepos } from "../../utilities/repo-api"

export default function NetflixReposPage() {
    const company = 'Netflix'
    const [netflixRepos, setNetflixRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function getResults() {
            try {
               const res = await getRepos(company);
               setNetflixRepos(res)
               setIsLoading(false);
           } catch (err) {
               setIsLoading(false);
               setError(err);
           }
       }
       getResults()
    }, []);
    return (
        <div className="NetflixReposPage">
            {error &&
            <div className="error">
                {error.message}
            </div>
            }
            { isLoading ? 
                <div className="loading">
                    Gathering Repos
                </div>
                :
                <NetflixReposList netflixRepos={netflixRepos} />
            }
        </div>
    )
}