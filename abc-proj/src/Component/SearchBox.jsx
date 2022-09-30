import "./SearchBox.css";
import { useState } from "react";

const SearchBox = () => {

    const list = ["realme 9i","iphone 9", "iphone 11", "iphone 12", "pixel 8"]

    const [filterList, setFilterList] = useState(list);

    const handleSearch = (event) => {
  
      if (event.target.value === "") {
        setFilterList(list);
        return;
      }
      const filteredValues = list.filter(
        (item) =>
          item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
      );
      setFilterList(filteredValues);
    };
    return (
      <div className="app">
        <div>
          Search: <input name="query" type="text" onChange={handleSearch} />
        </div>
        {filterList &&
          filterList.map((item, index) => (
            <div key={index}>{item}</div> //Display each item
          ))}
      </div>
    );
}

export default SearchBox;