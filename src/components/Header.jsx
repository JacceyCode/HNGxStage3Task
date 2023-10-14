import LoginBtn from "./LoginBtn";
import Logo from "./Logo";

function Header() {
  return (
    <header className="mb-2 flex flex-wrap items-center justify-between p-4">
      <Logo />

      <LoginBtn to="/login">Log In</LoginBtn>
    </header>
  );
}

export default Header;
