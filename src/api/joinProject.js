const GETPROJECT_ENDPOINT = `${import.meta.env.VITE_SERVER_URI}/api/joinProject/`;

export const getJoinProjectByName = async (projectName) => {
    try {
        const response = await fetch(`${GETPROJECT_ENDPOINT}${projectName}`);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch join project:', error);
        return null;
    }
};
