import React from "react";
import './PayForm.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"/>

{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"/> */}


const MyTicket = () => {


  
  return (
	<div>
			<div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
						<div className="first-div w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
							<div className="w-full pt-1 pb-5">
									<div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
											<i className="mdi mdi-credit-card-outline text-3xl"></i>
									</div>
							</div>
							<div className="mb-10">
									<h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
							</div>
							<div className="mb-10">
									<h1 className="">Описание:</h1>
							</div>
							<div className="mb-10">
									<h1 className="">Всего:</h1>
							</div>
							<div className="mb-3 flex -mx-2">
									{/* <div className="px-2">
											<label for="type1" className="flex items-center cursor-pointer">
													<input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked></input>
													<img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3"></img>
											</label>
									</div> */}
									<div className="px-2">
											<label for="type2" className="flex items-center cursor-pointer">
													<input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"></input>
													<img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3"></img>
											</label>
									</div>
							</div>
							{/* <div className="mb-3">
									<label className="font-bold text-sm mb-2 ml-1">Name on card</label>
									<div>
											<input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
									</div>
							</div> */}
							<div className="card-div">
							<div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">Card number:</label>
            <div>
                <input class="w-50 px-3 py-2 mb-1 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
								<input class="w-50 " placeholder="MM/YY" type="text"/>

					  </div>
						
        </div>

								<div classname="mb-10">
										<label classname="font-bold text-sm mb-2 ml-1">Security code</label>
										<div>
												<input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
										</div>
								</div>
					</div>
							<div>
									<button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
							</div>
					</div>
		</div>

			{/* <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
			<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
					<div>
							<a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
									<img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
							</a>
					</div>
			</div>

	</div>
  );
}

export default MyTicket;
