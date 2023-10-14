/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function LoginBtn({ children, to, onClick }) {
  return (
    <Link
      className="flex h-8 w-24 items-center justify-center rounded-full border-2 border-lime-600 bg-white p-1 text-xl text-lime-700 shadow-inner shadow-lime-700/90 transition-all hover:scale-110 lg:h-12 lg:w-32"
      to={to}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default LoginBtn;
