import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <section className="bg-[#d4d4d4]">
      <section className="mx-auto flex min-h-screen max-w-[120rem] flex-col items-center justify-center gap-4">
        <Outlet />

        <Footer />
      </section>
    </section>
  );
}

export default AppLayout;
