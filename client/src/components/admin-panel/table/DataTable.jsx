import React from 'react';

import TableHead from './TableHead.jsx';
import TableRows from './TableRow.jsx';
import Popup from '../../common/popup/Popup.jsx';
import DropdownButton from '../../common/dropdown-menu/DropdownButton.jsx';
import ToggleSwitchDropdownElement from '../../common/dropdown-menu/ToggleSwitchDropdownElement.jsx';
import RadioDropdownElement from '../../common/dropdown-menu/RadioDropdownElement.jsx';


const DataTable = ({ data, dataCategory }) => {
  const timePeriods = {
    day: {
      name: "Last day",
      value: 1
    },
    week: {
      name: "Last 7 days",
      value: 7
    },
    month: {
      name: "Last month",
      value: 30
    },
    year: {
      name: "Last year",
      value: 365
    }
  }
  const [selectedTimePeriod, setSelectedTimePeriod] = React.useState(timePeriods.week);
  const [dataReviewPopupActive, setDataReviewPopupActive] = React.useState();
  const [popupContent, setPopupContent] = React.useState();

  return (
    <div>
      {/* Data review Popup */}
      <Popup active={dataReviewPopupActive} setActive={setDataReviewPopupActive}>
        { popupContent }
      </Popup>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-4">
          {/* <!-- Dropdown menu PIDORASINA EBANAYA HYLI TI BLYAT NE RABOTAESH --> */}
          <div>
            <DropdownButton name={selectedTimePeriod.name} id="eblan">
              <RadioDropdownElement key="eblannn1" id="eblannn1" name={timePeriods.day.name} selectedElement={selectedTimePeriod} setSelectedElement={setSelectedTimePeriod}/>
              <RadioDropdownElement key="eblannn2" id="eblannn2" name={timePeriods.week.name} selectedElement={selectedTimePeriod} setSelectedElement={setSelectedTimePeriod}/>
              <RadioDropdownElement key="eblannn3" id="eblannn3" name={timePeriods.month.name} selectedElement={selectedTimePeriod} setSelectedElement={setSelectedTimePeriod}/>
              <RadioDropdownElement key="eblannn4" id="eblannn4" name={timePeriods.year.name} selectedElement={selectedTimePeriod} setSelectedElement={setSelectedTimePeriod}/>
            </DropdownButton>
          </div>
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search htmlFor items"></input>
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHead data={data} />
          <tbody>
            <TableRows data={data} dataCategory={dataCategory} setPopupActive={setDataReviewPopupActive} setPopupContent={setPopupContent} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
