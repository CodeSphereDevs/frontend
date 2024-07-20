const UPDATE_USER_ENDPOINT = `${import.meta.env.VITE_SERVER_URI}/api/users/`;

export const updateUser = async (data) => {
    try{
        const response = await fetch(UPDATE_USER_ENDPOINT, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
            },
            credentials:"include",
            body: JSON.stringify(data)
        })
        return await response.json();
    }catch(error){
        console.log(error);
        return null;
    }
}