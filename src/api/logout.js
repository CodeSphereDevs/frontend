const LOGOUT_ENDPOINT = `${import.meta.env.VITE_SERVER_URI}/api/auth/logout`;

export const logout = async () => {
  try {
    await fetch(LOGOUT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
