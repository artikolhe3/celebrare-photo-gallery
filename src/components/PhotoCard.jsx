export default function PhotoCard({ photo, favourites, dispatch }) {

  const isFavourite = favourites.some((p) => p.id === photo.id);

  const handleToggle = () => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: photo
    });
  };

  return (
    <div className="border rounded-lg shadow overflow-hidden">

      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-60 object-cover"
      />

      <div className="flex justify-between items-center p-3">

        <p className="text-sm font-semibold">
          {photo.author}
        </p>

        <button onClick={handleToggle}>
          {isFavourite ? "❤️" : "🤍"}
        </button>

      </div>

    </div>
  );
}