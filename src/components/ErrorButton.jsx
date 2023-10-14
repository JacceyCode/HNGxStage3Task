/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function ErrorButton({ children }) {
  const navigate = useNavigate();

  return (
    <button
      className="rounded-full border-4 border-lime-400 bg-lime-600 p-4 shadow-inner shadow-lime-300/90 duration-200 hover:scale-110"
      onClick={() => navigate(-1)}
    >
      {children}
    </button>
  );
}

export default ErrorButton;
