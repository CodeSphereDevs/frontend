const GETPOSTBYTITLE_ENDPOINT = `${import.meta.env.VITE_SERVER_URI}/api/posts/`;

export const getPostByTitle = async (title) => {
    try{
        const response = await fetch(`${GETPOSTBYTITLE_ENDPOINT}${title}`);
        return await response.json();
    }catch(error){
        console.log(error);
        return null;
    }
}