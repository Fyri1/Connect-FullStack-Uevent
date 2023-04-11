import React from 'react';

import TableHead from './common/TableHead.jsx';
import ActionsButtons from './common/ActionsButtons.jsx';

import editForms from '../../../../utils/editForms.jsx';


const EventsTable = ({ data, setPopupActive, setPopupContent }) => {
  const tableHeadColumnNames = {
    "Poster":"",
    "Title":"",
    "Description":"",
    "City":"",
    "Address":"",
    "Date":"",
    "Created at":"",
    "Price":"",
    "Tags":""
  };

  const editButtonClick = () => {
    console.log("edit");
    setPopupContent(editForms(dataElement)[dataCategory]);
    setPopupActive(true);
  }

  const deleteButtonClick = () => {
    console.log("delete");
  }

  const tableRowsElements = data.map((eventData) => {
    console.log(eventData);
    
    return (
      <tr>
        

        <ActionsButtons key={eventData.id} editButtonClick={editButtonClick} deleteButtonClick={deleteButtonClick} />
      </tr>
    );
  });

  return (
    <div>
      
    </div>
  );
}

export default EventsTable;
