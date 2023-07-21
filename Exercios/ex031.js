function fetchUserData(user) {
    return new Promise(async (resolve, reject) => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    if
    })
}