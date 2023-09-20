import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="text-2xl italic text-emerald-500 sm:text-3xl md:text-5xl"
    >
      MyImageA
    </Link>
  );
}

export default Logo;
