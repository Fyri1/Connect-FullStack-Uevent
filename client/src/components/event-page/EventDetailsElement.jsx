import React from 'react';


const EventDetailsElement = ({ eventData }) => {
  const unfoldButtonHandle = () => {
    console.log("pidorasa nado pokazat");
    const textElement = document.getElementsByClassName("text-retracted")[0];
    const textElementDiv = document.getElementsByClassName("main-event-content-retracted")[0];
    console.log(textElement);
    textElement.classList.remove("text-retracted");
    textElement.classList.add("text-unfolded");
    textElementDiv.classList.remove("main-event-content-retracted");
    textElementDiv.classList.add("main-event-content-unfolded");
  }

  return (
    <div className='lin2 back-fon-biographies'>
      <div className="md:flex shadow-lg h-64">
        <img className="object-cover rounded-lg rounded-r-none" src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag"/>

        {/* Main event content */}
        <div className="h-25 m-2 bg-white rounded-lg">
          <div className="child main-event-content-retracted bg-white rounded-lg">
            <p className="text-retracted text-sm text-gray-700 mt-4">
              Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam 
              reiciendis numquam tempore commodi ipsa suscipit laboriosam, 
              sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam
              tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
              Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam 
              reiciendis numquam tempore commodi ipsa suscipit laboriosam, 
              sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam
              tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
              Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam 
              reiciendis numquam tempore commodi ipsa suscipit laboriosam, 
              sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam
              tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
            </p>
            <div className="time-info-div">
              <div className='time2'>
                <a className="text-lg font-semibold text-white sm:text-slate-900 md:text-1xl dark:sm:text-white" > </a>
              </div>
            </div>

            {/* <div className="flex items-center justify-end mt-4 top-auto"></div> */}

            <div onClick={unfoldButtonHandle} >
              <button className="w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400" type="submit">Развернуть</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsElement;
