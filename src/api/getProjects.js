const GETPROJECTS_ENDPOINT = `${import.meta.env.VITE_SERVER_URI}/api/projects/`;

export const getProjects = async () => {
    try{
        const response = await fetch(`${GETPROJECTS_ENDPOINT}`);
        return await response.json();
    }catch(error){
        console.log(error);
        return null;
    }
}