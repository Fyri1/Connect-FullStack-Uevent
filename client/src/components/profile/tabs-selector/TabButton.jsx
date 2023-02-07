import React from 'react';


const TabButton = ({ id, name }) => {
  return (
    <li className="mr-2" role="presentation">
      <button className="inline-block p-4 border-b-2 rounded-t-lg" id={id + "-tab"} data-tabs-target={"#" + id} type="button" role="tab" aria-controls={id} aria-selected="false">{ name }</button>
    </li>
  )
}

export default TabButton;
