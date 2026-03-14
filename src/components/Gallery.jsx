import { useState, useReducer, useMemo, useCallback } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouritesReducer, initialState } from "../reducers/favouritesReducer";
import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";

export default function Gallery() {

  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    initialState
  );

  // useCallback for search handler
  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  // useMemo for filtered photos
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  if (loading) {
    return <p className="text-center mt-10">Loading photos...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">
        {error}
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <SearchBar
        search={search}
        setSearch={handleSearch}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            favourites={favourites}
            dispatch={dispatch}
          />
        ))}

      </div>

    </div>
  );
}