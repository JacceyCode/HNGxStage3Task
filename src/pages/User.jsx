import { useEffect, useState } from "react";
import Image from "../components/Image";
import { imageList } from "../imageList/ImageList";
import Logo from "../components/Logo";
import LoginBtn from "../components/LoginBtn";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { supabase } from "../supabaseClient";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

function User() {
  const [tag, setTag] = useState("");
  const [filteredImageList, setFilteredImageList] = useState(imageList);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Loading effect
  useEffect(function () {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Search functionality
  function filterImage(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const newTag = tag.trim().toLocaleLowerCase();
    const filteredList = imageList.filter((image) => image.tag === newTag);
    filteredList.length === 0
      ? setError(true)
      : setFilteredImageList(filteredList);
    setTag("");
    setLoading(false);
  }

  // drag and drop functionality
  function onDragEnd(event) {
    const { active, over } = event;
    if (active.id === over.id) return;
    setFilteredImageList((filteredImageList) => {
      const oldIndex = filteredImageList.findIndex(
        (image) => image.id === active.id,
      );
      const newIndex = filteredImageList.findIndex(
        (image) => image.id === over.id,
      );
      return arrayMove(filteredImageList, oldIndex, newIndex);
    });
  }

  //Sign-Out functionality
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (!error) navigate("/");
    return error;
  }

  return (
    <>
      <header className="mb-2 flex flex-wrap items-center justify-between px-8 py-4">
        <Logo />

        <LoginBtn onClick={signOut}>Log Out</LoginBtn>
      </header>

      {loading ? (
        <Loader />
      ) : (
        <section className="mb-8 p-2 text-black">
          <section className="mb-2 flex flex-wrap items-center justify-center space-x-4">
            <section>
              <form
                onSubmit={filterImage}
                className="relative mb-1 flex h-8 w-80 items-center lg:h-12 lg:w-96"
              >
                <input
                  className="absolute inline-flex h-full w-full rounded-full bg-yellow-300 p-1 outline-none placeholder:text-black focus:border-2 focus:border-black lg:p-4 lg:placeholder:text-lg"
                  type="text"
                  placeholder="Input tag name"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  required
                />
                <button className="absolute right-2">🔍</button>
              </form>
              <p>Search with tag names like Car, House, Nature or Animal.</p>
            </section>
            {error && (
              <h3 className="text-lg text-red-400">
                Wrong tag name, please try again.
              </h3>
            )}
          </section>

          <section className="grid grid-cols-1 place-items-center gap-6 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={onDragEnd}
            >
              <SortableContext
                items={
                  filteredImageList.length > 0 ? filteredImageList : imageList
                }
                strategy={verticalListSortingStrategy}
              >
                {filteredImageList.map((image) => (
                  <Image image={image} key={image.id} />
                ))}
              </SortableContext>
            </DndContext>
          </section>
        </section>
      )}
    </>
  );
}

export default User;
