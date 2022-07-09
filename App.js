import "./App.css";
import FilterData from "./componenet/FilterData";

function App() {
  const filterDataSelectHandler = (filtervalue) => {
    console.log(filtervalue);
  };
  return (
    <div>
      <h1>Hello World</h1>
      <FilterData filterData={filterDataSelectHandler}></FilterData>
    </div>
  );
}

export default App;
