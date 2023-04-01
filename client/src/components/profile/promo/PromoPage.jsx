import React from 'react';
const PromoPage = () => {
	return (
		<div>
			<div className="container mx-auto bg-gray-50 min-h-screen p-8 antialiased" >
      <div className="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
							
               <h2 class="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                  Our Pricing Plan
               </h2>

            </div>

						
         </div>
				 
      </div>
			
				{/* Search */}

        <div class=" flex items-center p-6 space-x-6  rounded-xl  ">
						<div className="relative ">
							<div class="absolute top-0 bottom-0 left-0 flex items-center px-5">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
									</svg>
									
							</div>
							<input type="text" placeholder="Search for elixir..." class="pl-16 pr-4 py-4 rounded-md shadow-md bg-white border-0 w-full outline-none" />

						</div>
						<button class="w-10 h-10 border rounded-lg p-1 cursor-pointer transition duration-200 text-blue-800 hover:bg-blue-100">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
							</svg>
						</button>
						
			  </div>
									

				
				{/* Active Promo */}
				<ul class="   left-0 right-0 -bottom-18 mt-3 p-3">
            <li class="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
						Active
            </li>
					<div className=" shadow-lg  hover:shadow-xl transform hover: transition duration-500 bg-gray-100 mx-auto border-gray-500 border rounded-sm  text-gray-700 mb-0.5">
						<div className="flex p-3  border-l-8 border-green-600">
								<div className="space-y-1 border-r-2 pr-3">
									<div className="text-sm leading-5 font-semibold"><span className="text-xs leading-4 font-normal text-gray-500"> Release #</span> LTC08762304</div>
									<div className="text-sm leading-5 font-semibold"><span className="text-xs leading-4 font-normal text-gray-500 pr"> BOL #</span> 10937</div>
									<div className="text-sm leading-5 font-semibold">JUN 14. 9:30 PM</div>
								</div>
								<div className="flex-1">
									<div className="ml-3 space-y-1 border-r-2 pr-3">
											<div className="text-base leading-6 font-normal">KROGER MEMPHIS</div>
											<div className="text-sm leading-4 font-normal"><span className="text-xs leading-4 font-normal text-gray-500"> Carrier</span> PAPER TRANSPORT INC.</div>
											<div className="text-sm leading-4 font-normal"><span className="text-xs leading-4 font-normal text-gray-500"> Destination</span> WestRock Jacksonville - 9469 Eastport Rd, Jacksonville, FL 32218</div>
									</div>
								</div>
								<div className="border-r-2 pr-3">
									<div >
											<div className="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
												<div className="uppercase text-xs leading-4 font-medium">Trailer</div>
												<div className="text-center text-sm leading-4 font-semibold text-gray-800">89732</div>
											</div>
									</div>
								</div>

								<div>
									<button className=" rounded-sm  ml-2 ">
									<div className="ml-3 my-5 bg-green-600 p-1 w-20">
											<div className="uppercase text-xs leading-4 font-semibold text-center text-green-100">Picked UP</div>
									</div>
									</button>
								</div>
						</div>
					</div>
				</ul>
				{/* no active */}
				<ul class="   left-0 right-0 -bottom-18 mt-3 p-3">
            <li class="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
						NO Active
            </li>
						<div class="bg-gray-100 mx-auto border-gray-500 border rounded-sm  text-gray-700 mb-0.5">
							<div class="flex p-3  border-l-8 border-red-600">
									<div class="space-y-1 border-r-2 pr-3">
										<div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500"> Release #</span> LTC08762304</div>
										<div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500 pr"> BOL #</span> 10937</div>
										<div class="text-sm leading-5 font-semibold">JUN 14. 9:30 PM</div>
									</div>
									<div class="flex-1">
										<div class="ml-3 space-y-1 border-r-2 pr-3">
												<div class="text-base leading-6 font-normal">KROGER MEMPHIS</div>
												<div class="text-sm leading-4 font-normal"><span class="text-xs leading-4 font-normal text-gray-500"> Carrier</span> PAPER TRANSPORT INC.</div>
												<div class="text-sm leading-4 font-normal"><span class="text-xs leading-4 font-normal text-gray-500"> Destination</span> WestRock Jacksonville - 9469 Eastport Rd, Jacksonville, FL 32218</div>
										</div>
									</div>
									<div class="border-r-2 pr-3">
										<div >
												<div class="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
													<div class="uppercase text-xs leading-4 font-medium">Trailer</div>
													<div class="text-center text-sm leading-4 font-semibold text-gray-800">89732</div>
												</div>
										</div>
									</div>

									<div>
										<button class=" rounded-sm " >
											<div class="ml-3 my-5 bg-red-600 p-1 w-20">
													<div class="uppercase text-xs leading-4 font-semibold text-center text-red-100">Canceled</div>
											</div>
										</button>
									</div>
							</div>
						</div>
				</ul>
				<div class="flex flex-col items-center my-12">
    <div class="flex text-gray-700">
        <div class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <div class="flex h-12 font-medium rounded-full bg-gray-200">
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">1</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white ">2</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">3</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">...</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">13</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">14</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">15</div>
            <div class="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">2</div>
        </div>
        <div class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
    </div>
</div>

		</div>
	</div>	

		      
	);
}

export default PromoPage;