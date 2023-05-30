import "./Repo.css"

export default function Repo({ repo }) {
    return (
        <div className="Repo">
            <h3>{repo.name}</h3>
            <p>{repo.langauge}</p>
            <p>{repo.description}</p>
            <p>{repo.star}</p>
        </div>
    );
}