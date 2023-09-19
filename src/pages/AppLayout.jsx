import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <section className="relative min-h-screen bg-stone-300 pb-12">
      <Outlet />

      <Footer />
    </section>
  );
}

export default AppLayout;
