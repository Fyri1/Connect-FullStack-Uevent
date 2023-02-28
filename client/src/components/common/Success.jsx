

import clientRoutes from '../../routes/client/clientRoutes.js';


const Success = () => {
  const navigate = useNavigate();
	return (
	<div>
		<div class="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
			<div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
				<p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">Success! </p>
				<div class="bg-green-100 rounded-md p-3 flex">
					<svg
						class="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
						viewBox="0 0 24 24"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round">

						<path d="M0 0h24v24H0z" stroke="none" />
						<circle cx="12" cy="12" r="9" />
						<path d="M9 12l2 2 4-4" />
					</svg>

					<div class="text-green-700">
						<div class="font-bold text-xl">Your settings has been saved!</div>
							<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis sollicitudin dui vel gravida. Fusce faucibus, elit sit amet porttitor vehicula, urna nisi dapibus tellus, a tincidunt velit mi quis nulla.</div>
					</div>
				</div>
				<a href="#" class="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
					</svg>
					<span>Return Home</span>
				</a>
			</div>
		</div>
	</div>
  );
}


    
export default Success;