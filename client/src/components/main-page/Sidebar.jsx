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
    // <div className="sidebar">
    //   <DropdownButton name="categories">
    //     {CategoriesElements}
    //   </DropdownButton>
    //   <SearchInput placeholder="Enter event name" setSearchInput={setSearchInput} />
    // </div>

    <div className="max-w-21xl mx-auto">
    <div id="default-carousel" className="relative" data-carousel="static">
      {/* <!-- Carousel wrapper --> */}
      <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."></img>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."></img>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."></img>
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>

      {/* <p className="mt-5">This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn
        more
        by going to the official <a className="text-blue-600 hover:underline"
          href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite Documentation</a>.
      </p>
        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script> */}
    </div>
  );
}

export default Sidebar;
