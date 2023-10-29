import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 700 ? setShowTopBtn(true) : setShowTopBtn(false);
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <FaArrowUpLong
          className="fixed bottom-2 right-1 z-10 mx-auto h-12 w-12 animate-bounce cursor-pointer rounded-full border-4 border-black p-2 hover:border-red-700 hover:text-red-700 lg:right-8 lg:h-12 lg:w-12"
          onClick={goToTop}
        />
      )}
    </>
  );
}

export default ScrollToTop;
