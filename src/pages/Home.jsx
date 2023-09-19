import Header from "../components/Header";
import Image from "../components/Image";
import { imageList } from "../imageList/ImageList";

function Home() {
  return (
    <section className="p-2">
      <Header />

      <section className="grid grid-cols-1 place-items-center gap-6 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {imageList.map((image) => (
          <Image image={image} key={image.id} />
        ))}
      </section>
    </section>
  );
}

export default Home;
