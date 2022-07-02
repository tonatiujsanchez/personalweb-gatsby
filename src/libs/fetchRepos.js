

export default async function getRepos() {
    
    const response = await fetch('https://api.github.com/users/tonatiujsanchez/repos')
    const result = await response.json()
    
    sessionStorage.setItem("reapos_tsdev", JSON.stringify(result))

    return result
}