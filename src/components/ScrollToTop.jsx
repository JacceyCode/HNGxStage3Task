import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 750 ? setShowTopBtn(true) : setShowTopBtn(false);
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
        <FaAngleUp
          className="fixed bottom-2 right-1 z-10 mx-auto h-8 w-8 animate-bounce cursor-pointer rounded-full border-4 border-black bg-red-700 hover:border-red-700 hover:bg-black hover:text-red-700 lg:right-8 lg:h-12 lg:w-12"
          onClick={goToTop}
        />
      )}
    </>
  );
}

export default ScrollToTop;
