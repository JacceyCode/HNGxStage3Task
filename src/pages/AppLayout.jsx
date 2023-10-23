import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function AppLayout() {
  return (
    <section className="bg-[#d4d4d4]">
      <section className="mx-auto flex min-h-screen max-w-[120rem] flex-col items-center justify-center gap-4">
        <Outlet />

        <ScrollToTop />

        <Footer />
      </section>
    </section>
  );
}

export default AppLayout;
