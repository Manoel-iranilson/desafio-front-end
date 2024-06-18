"use client";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchForm() {
  return (
    <form className="bg-gray flex w-1/2 gap-4 items-center p-4 rounded-xl">
      <SearchIcon style={{ fill: "#6b6df0" }} fontSize="large" />
      <input
        type="text"
        className=" h-full w-full bg-gray focus:border-none focus:outline-none"
        placeholder="Pesquisar informações"
      />
    </form>
  );
}
