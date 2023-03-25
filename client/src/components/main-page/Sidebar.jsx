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


//   <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//   <path clipRule="evenodd" fillRule="evenodd currentColor" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"></path>
// </svg>

  return (
    <div className=" sidebar">
      <div className="search-div flex z-10">
        <DropdownButton id="dropDownElements">
          {CategoriesElements}
        </DropdownButton>

        <DropdownButton id=" dropDownElements">
          {CategoriesElements}
        </DropdownButton>
      </div>
      

      <div className="search-div">
        <SearchInput placeholder="Enter event name" setSearchInput={setSearchInput} />
      
      </div>

    </div>
    
  );
}

export default Sidebar;
