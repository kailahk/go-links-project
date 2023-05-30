import "./NetflixReposList.css"
import Repo from "../Repo/Repo";

export default function NetflixReposList({ netflixRepos }) {
    const netflixRepoList = netflixRepos.map((repo, idx) => <Repo repo={repo} key={idx} />);
    return (
        <div className="NetflixReposList">
            {netflixRepoList}
        </div>
    )
}