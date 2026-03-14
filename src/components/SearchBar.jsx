export default function SearchBar({ search, setSearch }) {

  return (
    <div className="mb-6">

      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

    </div>
  );

}