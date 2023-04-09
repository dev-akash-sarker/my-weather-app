import "./App.css";
import Search from "./components/search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log("ase", searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
