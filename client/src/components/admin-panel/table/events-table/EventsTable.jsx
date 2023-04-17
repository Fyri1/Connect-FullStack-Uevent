import React from 'react';

import TableHead from '../common/TableHead.jsx';
import EventsTableRows from './EventsTableRows.jsx';

import editForms from '../../../../../utils/editForms.jsx';
import Popup from '../../../common/popup/Popup.jsx';


const EventsTable = ({ data }) => {
  const [dataReviewPopupActive, setDataReviewPopupActive] = React.useState();
  const [dataCreatePopupActive, setDataCreatePopupActive] = React.useState();
  const [popupContent, setPopupContent] = React.useState();

  const tableHeadColumnNames = [{
    "Poster":"",
    "Title":"",
    "City":"",
    "Address":"",
    "Date":"",
    "Created at":"",
    "Price":"",
    "Tags":""
  }];

  return (
    <div>
      {/* Data review Popup */}
      <Popup active={dataReviewPopupActive} setActive={setDataReviewPopupActive}>
        { popupContent }
      </Popup>

      {/* Data create Popup */}
      <Popup active={dataCreatePopupActive} setActive={setDataCreatePopupActive}>
        { popupContent }
      </Popup>

      {/* Controls and table itself */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHead data={tableHeadColumnNames} dataCategory={"events"} setPopupContent={setPopupContent} setPopupActive={setDataReviewPopupActive} />
          <EventsTableRows data={data} dataCategory={"events"} setPopupActive={setDataReviewPopupActive} setPopupContent={setPopupContent} />
        </table>
      </div>
    </div>
  );
}

export default EventsTable;
