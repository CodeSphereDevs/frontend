const GETPOSTS_ENDPOINT = `${import.meta.env.VITE_SERVER_URI}/api/posts/`;

export const getPosts = async () => {
    try{
        const response = await fetch(`${GETPOSTS_ENDPOINT}`);
        return await response.json();
    }catch(error){
        console.log(error);
        return null;
    }
}