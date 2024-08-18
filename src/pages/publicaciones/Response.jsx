import React from "react";
import PropTypes from "prop-types";

const Response = ({ response }) => {
  const { username, content, createdAt } = response;

  return (
    <div className="response">
      <h2>{username}</h2>
      <p>{content}</p>
      <small>{new Date(createdAt).toLocaleString()}</small>
    </div>
  );
};

Response.propTypes = {
  response: PropTypes.shape({
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Response;
