import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");
    navigate("/user");
  }

  return (
    <section className="p-8">
      <Logo />
      <section className="flex flex-col items-center justify-center p-4">
        <h2 className="p-2 font-mono text-4xl italic text-lime-600">SIgn In</h2>
        <form
          onSubmit={handleLogin}
          className="flex w-96 flex-col items-start justify-center gap-2 rounded-2xl border-4 border-lime-500 p-4"
          action=""
        >
          <label className="p-1 text-lg font-medium" htmlFor="email">
            Email:
          </label>
          <input
            className="focus:outline-solid w-full rounded-2xl p-2 outline-none focus:outline-2 focus:outline-offset-4 focus:outline-lime-500"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="p-1 text-lg font-medium" htmlFor="password">
            Password:
          </label>
          <input
            className="focus:outline-solid w-full rounded-2xl p-2 outline-none focus:outline-2 focus:outline-offset-4 focus:outline-lime-500"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-20 rounded-full bg-lime-500 p-1 text-lg font-medium">
            Login
          </button>
        </form>
      </section>
    </section>
  );
}

export default Login;
