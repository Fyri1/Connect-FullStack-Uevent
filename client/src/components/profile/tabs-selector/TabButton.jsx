import React from 'react';


const TabButton = ({ id, slideNumber, current, name }) => {
  return (
    <li className="mr-2" role="presentation">
      <button
        className="inline-block p-4 border-b-2 rounded-t-lg"
        aria-current={current}
        data-carousel-slide-to={slideNumber}
        id={id + "-tab"}
        type="button">
          { name }
      </button>
    </li>
  )
}

export default TabButton;
