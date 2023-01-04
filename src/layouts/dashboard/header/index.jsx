import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header style={{ backgroundColor: "skyblue", padding: "1rem" }}>
      <h1>This is header</h1>

      <SearchBar />
    </header>
  );
}
