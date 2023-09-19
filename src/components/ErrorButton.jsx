/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function ErrorButton({ children }) {
  const navigate = useNavigate();

  return (
    <button
      className="rounded-full border-4 bg-red-400 p-4 duration-200 hover:scale-110"
      onClick={() => navigate(-1)}
    >
      {children}
    </button>
  );
}

export default ErrorButton;
