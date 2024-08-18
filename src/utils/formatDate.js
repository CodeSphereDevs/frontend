export const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  return date.toLocaleDateString("es-ES", options);
};
