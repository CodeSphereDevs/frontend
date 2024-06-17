import { updateUser } from "../../api/updateUser";

export default function Edit() {
  const handleClick = () => {
    updateUser();
  }

  return (
    <button
      onClick={handleClick}
      className="editButton"
    >
      <svg
        width="18px"
        height="18px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#22c55e"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.144"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title></title>{" "}
          <g id="Complete">
            {" "}
            <g id="edit">
              {" "}
              <g>
                {" "}
                <path
                  d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                  fill="none"
                  stroke="#22c55e"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>{" "}
                <polygon
                  fill="none"
                  points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                  stroke="currentStroke"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
               
                ></polygon>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
      <span> Editar perfil</span>
    </button>
  );
}
