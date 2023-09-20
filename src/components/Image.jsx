import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

/* eslint-disable react/prop-types */
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
      className="h-64 w-72 cursor-grab"
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
