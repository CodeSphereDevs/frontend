const SIGNUP_ENDPOINT = `${import.meta.env.VITE_SERVER_URI}/api/auth/signup`;

export const signup = async (username, email, password) => {
    try{
        const response = await fetch(SIGNUP_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({username, email, password})
        })
        return await response.json();
    }catch(error){
        console.log(error);
        return null;
    }
}