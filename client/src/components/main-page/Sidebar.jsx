import React from "react";

import CategoryDropdownElement from "./CategoryDropdownElement.jsx";
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
      <CategoryDropdownElement key={category.id} id={category.id} name={category.name} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
    );
  });

  return (
    <div className="sidebar">
        <button id="dropdownToggleButton" data-dropdown-toggle="dropdownToggle" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown toggle <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <div id="dropdownToggle" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-72 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownToggleButton">
            { CategoriesElements }
          </ul>
        </div>
        <SearchInput placeholder="Enter event name" setSearchInput={setSearchInput} />
    </div>
  );
}

export default Sidebar;
