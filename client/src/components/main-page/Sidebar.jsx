import React from 'react';
import SearchInput from './SearchInput.jsx';
import FilterButton from './FilterButton.jsx';
import '../css/Sidebar.css';
import { useCategories } from '../../../hooks/useCategories.js'
import Categories from './filet-items/Categories.jsx';

const Sidebar = () => {
  const { isLoading, categories } = useCategories();
  const [active, setActive] = React.useState(false);

  return isLoading ? <></> :(
    <div className="container m-auto flex flex-col">
      <div className="flex justify-between w-full py-7">
        <FilterButton setActive={setActive} active={active} />

        {/* <DropdownButton id="dropDownElements">
          {CategoriesElements}
        </DropdownButton> */}

        <SearchInput />
      </div>
      <div className={`p-5 w-full shadow ${active ? 'display' : 'hidden'}`}>
        <p className="text-2xl">Filters:</p>
        <div className="flex ml-10">
          <Categories categories={categories.data.values} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
