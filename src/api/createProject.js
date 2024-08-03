const CREATEPOST_ENDPOINT = `${import.meta.env.VITE_SERVER_URI}/api/projects/`;

export const createProject = async ({
  projectName,
  details,
  technologies,
  numMembers,
}) => {
  try {
    const response = await fetch(CREATEPOST_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ projectName, details, technologies, numMembers }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to create project:", error);
    return null;
  }
};
