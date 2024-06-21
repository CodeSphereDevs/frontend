const GETUSER_ENDPOINT = `${import.meta.env.VITE_SERVER_URI}/api/users/`;

export const getUserByName = async (username) => {
    try{
        const response = await fetch(`${GETUSER_ENDPOINT}${username}`);
        return await response.json();
    }catch(error){
        console.log(error);
        return null;
    }
}