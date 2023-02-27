import React from 'react';

import '../../css/Profile.css';


const TabButton = ({ id, slideNumber, current, name }) => {
  const tabChangeAnimationHandle = () => {
    console.log('pizdec')
  }

  return (
    <li className="mr-2" role="presentation">
      <div className="tab-button-wrapper">
        <button
          className="tab-button group inline-block p-4 rounded-t-lg focus:text-blue-700"
          onClick={tabChangeAnimationHandle}
          aria-current={current}
          data-carousel-slide-to={slideNumber}
          id={id + "-tab"}
          type="button">
          { name }
        </button>
        <div className="tab-button-border"></div>
      </div>
    </li>
  )
}

export default TabButton;
