import React from "react";
<link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"/>;
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"/>


import '../css/event-card.css';


const TicketItem = () => {
  return (
<div className=" Ticket">
    <div className=" " >


      <div className="">
        <div class=" bg-blue-900">
            <div class="absolute  opacity-80 inset-0 z-0"></div>
            <div class="max-w-md w-full h-full mx-auto z-10  rounded-3xl">
                <div class="flex flex-col">
                    <div class="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                        <div class="flex-none sm:flex">
                            <div class=" relative h-32 w-32   sm:mb-0 mb-3 hidden">
                                <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" w-32 h-32 object-cover rounded-2xl"></img>
                                <a href="#"
                                    class="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="h-4 w-4">
                                        <path
                                            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div class="flex-auto justify-evenly">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center  my-1">
                                        <span class="mr-3 rounded-full bg-white w-8 h-8">
                                            <img src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1" class="h-8 p-1"></img>
                                        </span>
                                        <h2 class="font-medium">Airindia</h2>
                                    </div>
                                    <div class="ml-auto text-blue-800">A380</div>
                                </div>  
                                <div class="  my-5"></div>

                                    <div class="border-b border-dashed border-b-2 my-5 pt-5">
                                        <div class="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
                                        <div class="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
                                    </div>
                                    <div class="flex items-center mb-5 p-5 text-sm">
                                        <div class="flex flex-col">
                                            <span class="text-sm">Flight</span>
                                            <div class="font-semibold">Airbus380</div>

                                        </div>
                                        <div class="flex flex-col ml-auto">
                                            <span class="text-sm">Gate</span>
                                            <div class="font-semibold">B3</div>

                                        </div>
                                    </div>
                                    <div class="flex items-center mb-4 px-5">
                                        <div class="flex flex-col text-sm">
                                            <span class="">Board</span>
                                            <div class="font-semibold">11:50AM</div>

                                        </div>
                                        <div class="flex flex-col mx-auto text-sm">
                                            <span class="">Departs</span>
                                            <div class="font-semibold">11:30Am</div>

                                        </div>
                                        <div class="flex flex-col text-sm">
                                            <span class="">Arrived</span>
                                            <div class="font-semibold">2:00PM</div>

                                        </div>
                                    </div>
                                    <div class="border-b border-dashed border-b-2 my-5 pt-5">
                                        <div class="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
                                        <div class="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
                                    </div>
                                    <div class="flex items-center px-5 pt-3 text-sm">
                                        <div class="flex flex-col">
                                            <span class="">Passanger</span>
                                            <div class="font-semibold">Ajimon</div>

                                        </div>
                                        <div class="flex flex-col mx-auto">
                                            <span class="">Class</span>
                                            <div class="font-semibold">Economic</div>

                                        </div>
                                        <div class="flex flex-col">
                                            <span class="">Seat</span>
                                            <div class="font-semibold">12 E</div>

                                        </div>
                                    </div>
                                    <div class="flex flex-col py-5  justify-center text-sm ">
                                        <h6 class="font-bold text-center">Boarding Pass</h6>
                                        {/* Код тут рисуется кссом , но я сюда доавлю картинку  */}

                                        {/* <div class="barcode h-14 w-0 inline-block mt-4 relative left-auto"></div> */}
                                        <img src="http://qrcoder.ru/code/?https%3A%2F%2Fmil.ru%2F&4&0" alt="aji" class="Tiket-code w-32 h-32 object-cover rounded-2xl"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>




      </div>
      
    </div>
</div>
  );
}

export default TicketItem;
