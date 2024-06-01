const LOGIN_ENDPOINT = `${import.meta.env.VITE_SERVER_URI}/api/auth/login`;

export const login = async (username, password) => {
    try{
        const response = await fetch(LOGIN_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            credentials:"include",
            body: JSON.stringify({username, password})
        })
        return await response.json();
    }catch(error){
        console.log(error);
        return null;
    }
}