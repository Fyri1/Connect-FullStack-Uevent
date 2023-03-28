import React from 'react';
import SearchInput from './SearchInput.jsx';
import Filter from './Filter.jsx';
import '../css/Sidebar.css';
import { useCategories } from '../../../hooks/useCategories.js'
import Categories from './filet-items/Categories.jsx';

const Sidebar = () => {
  const { isLoading, categories } = useCategories();

  return isLoading ? <></> :(
    <div className="container m-auto flex flex-col">
      <div className="flex justify-between w-full p-7">
        <Filter />

        {/* <DropdownButton id="dropDownElements">
          {CategoriesElements}
        </DropdownButton> */}

        <SearchInput />
      </div>
      <div className="ml-3 p-5 w-full shadow">
        <p className="text-2xl">Filters:</p>
        <div className="flex ml-10">
          <Categories categories={categories.data.values} />
        </div>
        </div>

    </div>
  );
};

export default Sidebar;
