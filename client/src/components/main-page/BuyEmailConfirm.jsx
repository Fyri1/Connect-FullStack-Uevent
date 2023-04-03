import React from 'react';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';


const BuyEmailConfirm = () => {
  return (
    <Html lang="en">
      <Text>Hyi</Text>
      <section class="pt-16 bg-blueGray-50">
        <div class="w-full lg:w-4/12 px-4 mx-auto">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="flex-wrap md:flex">
                  <div class="">
                    <img class="mx-auto mt-12 h-80 w-80 rounded-lg border p-2 md:mt-0" src="https://i.imgur.com/FQS7fFC.png" alt="step" />
                    <div>
                      <p class="mt-2 text-center font-semibold text-gray-600">#KON4AVPIZDE</p>
                      <p class="mt-1 text-center font-medium text-red-500">040-12-00-01166166-001</p>
                    </div>
                  </div>
                </div>
              </div>
                
              <div class="text-center mt-12">
                <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Jenna Stones
                </h3>
                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  Los Angeles, California
                </div>
                <div class="mb-2 text-blueGray-600 ">
                  <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  Solution Manager - Creative Tim Officer
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  University of Computer Science
                </div>
                </div>
                <div class="mt-8 py-8 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <h1 class=" text-center text-xl font-bold">Time</h1>

                  <div class="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
                    <div class="px-4">
                      <div class="border-b pb-4 border-gray-400 border-dashed">
                        <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
                        <a tabindex="0" class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Zoom call with design team</a>
                        <p class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">Discussion on UX sprint and Wireframe review</p>
                      </div>

                      <div class="border-b pb-4 border-gray-400 border-dashed pt-5">
                        <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">10:00 AM</p>
                        <a tabindex="0" class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Orientation session with new hires</a>
                      </div>

                      <div class="border-b pb-4 border-gray-400 border-dashed pt-5">
                        <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
                        <a tabindex="0" class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Zoom call with design team</a>
                        <p class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">Discussion on UX sprint and Wireframe review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Html>
  );
}

export default BuyEmailConfirm;
