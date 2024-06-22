const CREATEPOST_ENDPOINT = `${import.meta.env.VITE_SERVER_URI}/api/posts/`;

export const createPost= async (title, content) => {
    try{
        const response = await fetch(CREATEPOST_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            credentials:"include",
            body: JSON.stringify({title, content})
        })
        return await response.json();
    }catch(error){
        console.log(error);
        return null;
    }
}