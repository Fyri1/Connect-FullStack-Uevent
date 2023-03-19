import React from 'react';
import getQuary from '../../../utils/useQuary.js';
import $api from '../../../utils/api.js';

const Success = () => {
  const query = getQuary();
  const sessionId = query.get('session_id');
  const eventId = query.get('event_id');
  React.useEffect(() => {
    $api
      .post('http://localhost:8080/api/pay/create-session-retrieve', {
        sessionId,
		eventId
      })
      .then((response) => response.data)
	  .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div class="h-screen flex items-center justify-center">
          <card class="flex flex-col rounded-lg shadow-lg w-1/2 p-10 bg-white">

            {/* <!-- Logo --> */}
            <div class="flex justify-center">
              <img src="https://ipio-books.com/wp-content/uploads/2018/03/success-icon.png" class="w-20 h-20"/>
            </div>

            {/* <!-- Title --> */}
            <p class="text-center text-gray-800 text-4xl mt-8"> Success! </p>

            {/* <!-- Description --> */}
            <p class="text-center text-gray-700 font-light mt-5"> Your order has been successfully completed go nagyi! </p>

            <div class='flex items-center justify-center  '>
                <div class="p-10">
                  <button type="button" class="flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white" disabled>
                    <svg class="-ml-1 mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span class="font-medium subpixel-antialiased">Processing...</span>
                  </button>
                </div>

            </div>

            {/* <!-- Buttons --> */}
            <div class=" flex justify-center flex-row-reverse mt-14 items-end gap-5">

            <button type="button" class="text-blue-700 font-normal py-2 px-4 
            rounded transition duration-300 ease-in-out focus:outline-none 
            focus:shadow-outline border border-blue-700 hover:bg-blue-700 hover:text-white">Выйти НАХУЙ</button>


    


            </div>

          </card>

        </div>

      {/* <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
        <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
          <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
            Success!{' '}
          </p>
          <div className="bg-green-100 rounded-md p-3 flex">
            <svg
              className="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <circle cx="12" cy="12" r="9" />
              <path d="M9 12l2 2 4-4" />
            </svg>

            <div className="text-green-700">
              <div className="font-bold text-xl">
                Your settings has been saved!
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                facilisis sollicitudin dui vel gravida. Fusce faucibus, elit sit
                amet porttitor vehicula, urna nisi dapibus tellus, a tincidunt
                velit mi quis nulla.
              </div>
            </div>
          </div>
          <a
            href="#"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
            title="Return Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Return Home</span>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Success;
