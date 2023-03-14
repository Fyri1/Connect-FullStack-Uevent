import React from 'react';

import CheckoutButton from '../../payment/CheckoutButton.jsx';


const TicketBuySection = ({ eventData }) => {
  return (
    <div className="">
      <div className="shadow overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="mt-1 text-lg font-semibold text-white md:text-2xl dark:sm:text-white">Who buy?</th>
              <th className="mt-1 text-lg font-semibold text-white md:text-2xl dark:sm:text-white">When?</th>
              <th className="mt-1 text-lg font-semibold text-white md:text-2xl dark:sm:text-white">Prise</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm"></th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            <tr>
              <td className="w-1/3 text-left py-3 px-4">17.03.2023</td>
              <td className="w-1/3 text-left py-3 px-4">Hamburg Barclaycard Arena, Sylvesterallee 10, 22525</td>
              <td className="mt-1 text-lg font-semibold text-white sm:text-slate-800 md:text-2xl dark:sm:text-white">56$</td>
              <td className="text-left py-3 px-4"><CheckoutButton eventItem={eventData}/></td>
            </tr>
            <tr className="bg-gray-100">
              <td className="w-1/3 text-left py-3 px-4">17.03.2023</td>
              <td className="w-1/3 text-left py-3 px-4">Hamburg Barclaycard Arena, Sylvesterallee 10, 22525</td>
              <td className="price-td mt-1 text-lg font-semibold text-white sm:text-slate-800 md:text-2xl dark:sm:text-white">56$</td>
              <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662"><button type="button" className="bg-indigo-600 text-white text-sm leading-7 font-medium py-2 px-4 rounded-lg">Buy now</button></a></td>
            </tr>
            <tr>
              <td className="w-1/3 text-left py-3 px-4">17.03.2023</td>
              <td className="w-1/3 text-left py-3 px-4">Hamburg Barclaycard Arena, Sylvesterallee 10, 22525</td>
              <td className="mt-1 text-lg font-semibold text-white sm:text-slate-800 md:text-2xl dark:sm:text-white">56$</td>
              <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662"><button type="button" className="bg-indigo-600 text-white text-sm leading-7 font-medium py-2 px-4 rounded-lg">Buy now</button></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TicketBuySection;
