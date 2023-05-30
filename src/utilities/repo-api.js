export async function getRepos(company) {
    const options = {
        headers: {
            accept: "application/vnd.github.text-match+json",
            "Content-Type": "application/json",
        }
    }
    const queryString = `?sort=star&order=desc`
    const base_url = `https://api.github.com/orgs/${company}/repos`

    const res = await fetch(base_url+queryString, options).then(res => res.json());
    // console.log(res)
    return res
}