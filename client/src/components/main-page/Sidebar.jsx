import React from "react";

import DropdownButton from "../common/dropdown-menu/DropdownButton.jsx";
import ToggleSwitchDropdownElement from "../common/dropdown-menu/ToggleSwitchDropdownElement.jsx";
import SearchInput from "./SearchInput.jsx";

import "../css/sidebar.css";
import data from "../../temp/categories.json";


const Sidebar = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  // Change to read from API response
  const [categoriesData, setCategoriesData] = React.useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState();
  const [searchInput, setSearchInput] = React.useState('');

  React.useEffect(() => {
    try {
      console.log("loading");
      setCategoriesData(data);
      
      const temp = {};
      data.map((category) => {
        temp[category.id] = false;
      });
      setSelectedCategories(temp);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [isLoading]);
  
  React.useEffect(() => {
    // console.log(categoriesData);
    // console.log(selectedCategories);
  }, [selectedCategories]);

  const CategoriesElements = categoriesData.map((category) => {
    return (
      <ToggleSwitchDropdownElement key={category.id} id={category.id} name={category.name} selectedElements={selectedCategories} setSelectedElements={setSelectedCategories} />
    );
  });

  return (
    <div className="sidebar">
      <DropdownButton id="dropDownElements" name="categories">
        {CategoriesElements}
      </DropdownButton>
      <SearchInput placeholder="Enter event name" setSearchInput={setSearchInput} />
    </div>
  );
}

export default Sidebar;
