/* eslint-disable react/prop-types */
function Image({ image }) {
  const { url, tag } = image;
  return (
    <img className="h-64 w-72 cursor-grab" src={url} alt={tag} loading="lazy" />
  );
}

export default Image;
