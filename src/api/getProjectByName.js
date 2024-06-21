const GETPROJECT_ENDPOINT = `${import.meta.env.VITE_SERVER_URI}/api/projects/`;

export const getProjectByName = async (projectName) => {
    try{
        const response = await fetch(`${GETPROJECT_ENDPOINT}${projectName}`);
        return await response.json();
    }catch(error){
        console.log(error);
        return null;
    }
}