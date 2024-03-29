import React from "react";

const RulesUser = () => {
  return (
  <div>

{/* <div className="font-sans antialiased bg-gray-50 dark:bg-gray-900">
	<div className="container w-full md:max-w-3xl mx-auto">
		<div className="p-4 md:pt-32">
			<div className="md:shadow-xl md:rounded-lg">

				<div className="bg-gray-50 md:bg-white md:shadow-lg dark:bg-gray-900 md:dark:bg-gray-800 px-8">

					<div className="relative hidden md:block">
						<div className="block md:hidden flex justify-center">
							<img className="overflow-hidden w-32 h-32 rounded mr-4" src="https://ahampriyanshu.com/blog/logo.png" alt="author's image"/></div>

							<div className="pt-8 pb-2">
								<h1 className="text-2xl font-bold text-gray-900 dark:text-white">Priyanshu Tiwari</h1>
								<p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Contribututing since
									23 Aug, 2021</p>
								<div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
									<p className="mt-2">
										<p>I'm an undergrad student and full-stack web developer based in India. On my
											blog I usually write about tech, finance, history, cinema, politics and
											comedy.</p>
									</p>
								</div>
								<div className="my-3">

									<a className=" h-8 w-8 rounded-full outline-none focus:outline-none"
										href='#'
										type="button">
										<svg width="24" height="24"
											className="transition duration-300 ease-in-out fill-current cursor-pointer text-gray-700 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500"
											xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"
											>
											<g>
												<g>
													<path d="M257,210c-24.814,0-45,20.186-45,45c0,24.814,20.186,45,45,45c24.814,0,45-20.186,45-45C302,230.186,281.814,210,257,210z
                                                                           " />
												</g>
											</g>
											<g>
												<g>
													<path d="M255,0C114.39,0,0,114.39,0,255s114.39,257,255,257s257-116.39,257-257S395.61,0,255,0z M362,330
                                                                           c-20.273,0-38.152-10.161-49.017-25.596C299.23,319.971,279.354,330,257,330c-41.353,0-75-33.647-75-75c0-41.353,33.647-75,75-75
                                                                           c16.948,0,32.426,5.865,45,15.383V195c0-8.291,6.709-15,15-15c8.291,0,15,6.709,15,15c0,33.36,0,41.625,0,75
                                                                           c0,16.538,13.462,30,30,30c16.538,0,30-13.462,30-30c0-100.391-66.432-150-135-150c-74.443,0-135,60.557-135,135
                                                                           s60.557,135,135,135c30,0,58.374-9.609,82.061-27.803c15.822-12.078,33.94,11.765,18.281,23.789
                                                                           C328.353,408.237,293.665,420,257,420c-90.981,0-165-74.019-165-165S166.019,90,257,90c82.897,0,165,61.135,165,180
                                                                           C422,303.091,395.091,330,362,330z" />
												</g>
											</g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
											<g></g>
										</svg>
									</a>
									<a className="h-8 w-8 rounded-full outline-none focus:outline-none" type="button"
										href="#">
										<svg className="fill-current transition duration-300 ease-in-out text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
											role="img" width="24" height="24" viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<title>LinkedIn</title>
											<path
												d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
										</svg>
									</a>
									<a className="h-8 w-8 rounded-full outline-none focus:outline-none" type="button"
										href="#">
										<svg className="fill-current transition duration-300 ease-in-out text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
											role="img" width="24" height="24" viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<title>Twitter</title>
											<path
												d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
										</svg>
									</a>
									<a className="h-8 w-8 rounded-full outline-none focus:outline-none" type="button"
										href="#">
										<svg className="fill-current transition duration-300 ease-in-out text-gray-700 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600"
											role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24">
											<title>Youtube</title>
											<path
												d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
										</svg>
									</a>
									<a className="h-8 w-8 rounded-full outline-none focus:outline-none" type="button"
										href="#">
										<svg className="feather feather-chrome h-6 transition duration-300 ease-in-out text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-black"
											role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
											strokeLinecap="round" strokeLinejoin="round"
											<title>Website</title>
											<circle cx="12" cy="12" r="10"></circle>
											<circle cx="12" cy="12" r="4"></circle>
											<line x1="21.17" y1="8" x2="12" y2="8"></line>
											<line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
											<line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
										</svg>
									</a>
									<a className="h-8 w-8 rounded-full outline-none focus:outline-none" type="button" >
										<svg className="fill-current transition duration-300 ease-in-out text-gray-700 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600"
											role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24">
											<title>Reddit</title>
											<path
												d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" />
										</svg>
									</a>
									<a className="h-8 w-8 rounded-full outline-none focus:outline-none" type="button"
										href="#">
										<svg className="fill-current transition duration-300 ease-in-out text-gray-700 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-600"
											role="img" width="24" height="24" viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<title>Instagram</title>
											<path
												d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
										</svg>
									</a>
									<a className="h-8 w-8 rounded-full outline-none focus:outline-none" type="button"
										href="#">
										<svg className="fill-current transition duration-300 ease-in-out text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-black"
											role="img" width="24" height="24" viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<title>Github</title>
											<path
												d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
										</svg>
									</a>
									<a className="h-8 w-8 rounded-full outline-none focus:outline-none" type="button"
										href="#">
										<svg className="fill-current transition duration-300 ease-in-out text-gray-700 dark:text-gray-400 hover:text-yellow-700 dark:hover:text-yellow-700"
											role="img" width="24" height="24" viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<title>Gitlab</title>
											<path
												d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z">
											</path>
										</svg>
									</a>
									<a className="h-8 w-8 rounded-full outline-none focus:outline-none" type="button"
										href="#">
										<svg className="fill-current transition duration-300 ease-in-out text-gray-700 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-600"
											width="24" height="24" viewBox="0 0 100 100" fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<title>Dribble</title>
											<path fillRule="evenodd" clipRule="evenodd"
												d="M50 0C22.397 0 0 22.397 0 50C0 77.603 22.397 100 50 100C77.5488 100 100 77.603 100 50C100 22.397 77.5488 0 50 0ZM83.026 23.0477C88.9913 30.3145 92.5705 39.5879 92.679 49.6204C91.269 49.3492 77.1692 46.4751 62.961 48.2646C62.6356 47.5597 62.3644 46.8004 62.0391 46.0412C61.1714 43.9805 60.1952 41.8655 59.2191 39.859C74.9458 33.4599 82.1041 24.2408 83.026 23.0477ZM50 7.37527C60.846 7.37527 70.7701 11.4425 78.308 18.1128C77.5488 19.1974 71.0954 27.82 55.9111 33.5141C48.9154 20.6616 41.1605 10.141 39.9675 8.5141C43.167 7.75488 46.5293 7.37527 50 7.37527ZM31.833 11.3883C32.9718 12.9067 40.564 23.4816 47.6681 36.0629C27.7115 41.3774 10.0868 41.269 8.18872 41.269C10.9544 28.0369 19.9024 17.0282 31.833 11.3883ZM7.26681 50.0542C7.26681 49.6204 7.26681 49.1866 7.26681 48.7527C9.11063 48.8069 29.8265 49.0781 51.1388 42.679C52.3861 45.0651 53.5249 47.5054 54.6095 49.9458C54.0672 50.1085 53.4707 50.2712 52.9284 50.4338C30.9111 57.538 19.1974 76.9523 18.2213 78.5792C11.4425 71.0412 7.26681 61.0087 7.26681 50.0542ZM50 92.7332C40.1302 92.7332 31.0195 89.3709 23.8069 83.731C24.5662 82.1584 33.243 65.4555 57.321 57.0499C57.4295 56.9957 57.4837 56.9957 57.5922 56.9414C63.6117 72.5054 66.0521 85.5748 66.7028 89.3167C61.551 91.5401 55.9111 92.7332 50 92.7332ZM73.807 85.4122C73.3731 82.8091 71.0955 70.3362 65.5098 54.9892C78.9046 52.8742 90.6182 56.3449 92.0824 56.833C90.2386 68.7093 83.4056 78.9588 73.807 85.4122Z" />
										</svg>
									</a>
									<a className="h-8 w-8 rounded-full outline-none focus:outline-none" type="button"
										href="#">
										<svg className="fill-current transition duration-300 ease-in-out text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-black"
											width="24px" height="24px" viewBox="0 0 24 24" role="img"
											xmlns="http://www.w3.org/2000/svg">
											<title>Unsplash</title>
											<path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>


				<p
					className="mb-5 font-bold text-xl md:text-5xl md:mt-6 text-center text-gray-900 dark:text-white">
					More from
					Priyanshu Tiwari</p>


				<div className="mx-auto px-4 py-4 max-w-xl my-auto">
					<div className="bg-gray-50 md:bg-white md:shadow-xl md:rounded-lg mb-6">
						<a href='#'>
							<div className="">


                            </div>
						</a>
						<div className="bg-gray-50 md:bg-white md:shadow-lg dark:bg-gray-900 md:dark:bg-gray-800">
							<a href='#'>
								<div className="p-4">
									<p
										className="truncate font-bold mb-2 md:mt-2 text-2xl text-gray-600 dark:text-gray-200 tracking-normal">
										Figuring Out NFT and DeFi</p>
									<div className="break-words text-sm text-gray-600 dark:text-gray-400 ">
										<p>
											<p>&nbsp;</p>

											<p>NFT or &ldquo;Non Fungible Token&rdquo; is a token that exists on a
												distributed
												ledger/blockchain and is non-fungible in nature, meaning it can&rsquo;t
												be replaced by
												another item or interchanged. One can buy NFTs using cryptocurrencies
												such as Bitcoin,
												Ethereum, …</p>
										</p>
									</div>
								</div>
							</a>
							<div className="flex items-center justify-between p-2 md:p-4 mx-2 md:mx-4">
								<a href='#'>
									<div className="flex items-center ml-2">
										<img className="overflow-hidden object-cover w-10 h-10 md:w-12 md:h-12 rounded " src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="author image"/>
										<div className="text-xs ml-2 text-left text-gray-600 dark:text-gray-400">
											<p>ahampriyanshu@gmail.com</p>
											<p>23 Aug, 2021</p>
										</div>
									</div>
								</a>
								<div className="text-sm md:text-base text-left text-gray-600 dark:text-gray-400 px-8 py-2">
									<p>
										1 min read
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> */}
  </div>




  );
}

export default RulesUser;
