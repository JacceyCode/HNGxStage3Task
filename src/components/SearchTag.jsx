import { useState } from "react";
import { imageList } from "../imageList/ImageList";

function SearchTag() {
  const [tag, setTag] = useState("");
  const [filteredImageList, setFilteredImageList] = useState([]);
  const [error, setError] = useState(false);

  function filterImage(e) {
    e.preventDefault();
    setError(false);
    const newTag = tag.trim().toLocaleLowerCase();
    const filteredList = imageList.filter((image) => image.tag === newTag);
    if (filteredList.length === 0) setError(true);
    setFilteredImageList(filteredList);
    setTag("");
  }

  console.log(filteredImageList);

  return (
    <section className="mb-2 flex flex-wrap items-center justify-center space-x-4">
      <form
        onSubmit={filterImage}
        className="relative flex h-6 w-48 items-center sm:h-8 sm:w-64 lg:h-12 lg:w-96"
      >
        <input
          className="absolute inline-flex h-full w-full rounded-full bg-yellow-300 p-1 outline-none placeholder:text-black focus:border-2 focus:border-black lg:p-4 lg:placeholder:text-lg"
          type="text"
          placeholder="Input tag name (e.g car, animal, house, nature)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          required
        />
        <button className="absolute right-2">🔍</button>
      </form>
      {error && <h3>Input Error will display here</h3>}
    </section>
  );
}

export default SearchTag;
