async function fetchUserData(user){
    const response = await fetch(`https://api.github.com/users/${user}`)
    const data = await response.json();
    return data;
}

async function user(user){
    try {
        const perfil = await fetchUserData(user);
        console.log(`Nome: ${perfil.name}`);
        console.log(`Bio: ${perfil.bio}`);
        console.log(`Repositórios Públicos: ${perfil.public_repos}`);
    } catch (error) {
        console.log(`Erro ao buscar dados do usuário ${error.message}`);
    }
}

user("AeroIV");