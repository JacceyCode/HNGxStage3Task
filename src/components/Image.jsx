/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Image({ image }) {
  const { url, tag, id } = image;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <img
      className="h-64 w-80 cursor-grab rounded-2xl shadow-lg shadow-slate-700/90 transition-all hover:-translate-y-6 hover:scale-105"
      ref={setNodeRef}
      {...attributes}
      style={style}
      {...listeners}
      src={url}
      alt={tag}
      // loading="lazy"
    />
  );
}

export default Image;
