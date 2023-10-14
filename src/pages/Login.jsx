import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { supabase } from "../supabaseClient";
import Loader from "../components/Loader";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Login functionality
  async function handleLogin(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      if (!error) {
        navigate("/user");
        setEmail("");
        setPassword("");
      }
      return data;
    } catch (error) {
      alert(
        error.error_description ||
          error.message ||
          "Error signing in with email and password",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="p-8">
      <Logo />
      {loading ? (
        <Loader />
      ) : (
        <section className="mx-auto mt-12 flex w-fit flex-col items-center justify-center rounded-2xl bg-lime-600/60 shadow-xl shadow-lime-500 sm:gap-8">
          <h2 className="border-b-2 border-lime-500 p-2 font-mono text-4xl italic text-black">
            SIgn In
          </h2>
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-start justify-center gap-6 p-4 sm:w-96"
          >
            <section className="w-full space-y-2">
              <label className="p-1 text-lg font-medium" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full rounded-2xl bg-[#d4d4d4] p-4 outline-none"
                type="email"
                id="email"
                placeholder="Input email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className="text-sm">Email: user@example.com</p>
            </section>
            <section className="w-full space-y-2">
              <label className="p-1 text-lg font-medium" htmlFor="password">
                Password:
              </label>
              <input
                className="w-full rounded-2xl bg-[#d4d4d4] p-4 outline-none"
                type="password"
                id="password"
                value={password}
                placeholder="Input password here"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-sm">Password: 1Password</p>
            </section>
            <button className="mx-auto w-32 rounded-full bg-lime-500 p-1 text-xl font-medium shadow-inner shadow-lime-800 transition-all hover:scale-110">
              Login
            </button>
          </form>
        </section>
      )}
    </section>
  );
}

export default Login;
