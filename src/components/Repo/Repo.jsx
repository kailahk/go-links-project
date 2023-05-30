import "./Repo.css"
import { useState } from "react"

export default function Repo({ repo }) {
    const [showCommits, setShowCommits] = useState(false)
    const created = repo.created_at.split('-')
    const updatedCreatedAt = `${created[1]}/${created[0]}`
    return (
        <div className="Repo" onClick={() => setShowCommits(!showCommits)}>
            <h4>{repo.name}</h4>
            <p>Language: {repo.language}</p>
            <p>Description: {repo.description}</p>
            <p>Fork Count: {repo.forks_count}</p>
            <p>Star Count: {repo.stargazers_count}</p>
            <p>Created: {updatedCreatedAt}</p>
            {
                showCommits &&
                <div className="commits">
                    Commits here
                </div>
            }
        </div>
    );
}