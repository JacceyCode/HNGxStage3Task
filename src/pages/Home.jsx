import Header from "../components/Header";
import Image from "../components/Image";
import { imageList } from "../imageList/ImageList";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Loading effect
  useEffect(function () {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <section className="p-2">
      <Header />

      {isLoading ? (
        <Loader />
      ) : (
        <section className="grid grid-cols-1 place-items-center gap-6 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {imageList.map((image) => (
            <Image image={image} key={image.id} />
          ))}
        </section>
      )}
    </section>
  );
}

export default Home;
