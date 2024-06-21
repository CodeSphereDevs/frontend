const UPDATE_USER_ENDPOINT = `${import.meta.env.VITE_SERVER_URI}/api/users/update`;

export const updateUser = async () => {
    try{
        const response = await fetch(UPDATE_USER_ENDPOINT, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
            },
            credentials:"include",
            body: JSON.stringify()
        })
        return await response.json();
    }catch(error){
        console.log(error);
        return null;
    }
}