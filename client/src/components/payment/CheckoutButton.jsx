// import React from 'react';

// import './PayForm.css';
// <link
//   rel="stylesheet"
//   href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"
// />;
// import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
// {
//   /* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"/> */
// }
// const useQuery = () => {
//   const { search } = useLocation();

//   return React.useMemo(() => new URLSearchParams(search), [search]);
// };

// const MyTicket = () => {
//   const [crediteCardData, setrediteCardData] = React.useState({
//     numberCard: '',
//     dateCard: '',
//     cvvCard: '',
//   });

//   const query = useQuery();

//   return (
//     <div>
//       <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 pb-10 pt-16">
//         <div className="first-div w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
//           <div className="w-full pt-1 pb-5">
//             <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
//               <i className="mdi mdi-credit-card-outline text-3xl"></i>
//               <img src="https://free-png.ru/wp-content/uploads/2022/06/free-png.ru-441.png"></img>
//             </div>
//           </div>
//           <div className="mb-10">
//             <h1 className="text-center font-bold text-xl uppercase">
//               who launched the balls
//             </h1>
//           </div>
//           <div className=" mb-10">
//             <h1 className="leftstr-na ">Описание:</h1>
//             <p className="rightstr">Iphone 6 na mazy: </p>
//           </div>
//           <div className="mb-10">
//             <h1 className="leftstr-na ">Всего:</h1>
//             <p className="rightstr price">18 UAH</p>
//           </div>

//           <div className="card-plus">
//             <div className="mb-3 flex -mx-2">
//               <div className="px-2">
//                 <label htmlFor="type2" className="flex items-center cursor-pointer">
//                   <img
//                     src="data:image/png;base64,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"
//                     className="h-8 ml-3"
//                   ></img>
//                 </label>
//               </div>
//             </div>
//             <div className="card-div">
//               <div className="mb-3">
//                 <div className="grid gap-6 mb-6 lg:grid-cols-2">
//                   <div>
//                     <label
//                       htmlFor="number_card"
//                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                     >
//                       Номер карты:
//                     </label>
//                     <input
//                       type="text"
//                       id="number_card"
//                       onChange={(e) => setrediteCardData(e.target.value)}
//                       value={crediteCardData.numberCard}
//                       className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                       placeholder="XXXX XXXX XXXX XXXX"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="date_card"
//                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                     >
//                       Срок действия:
//                     </label>
//                     <input
//                       type="text"
//                       id="date_card"
//                       onChange={(e) => setrediteCardData(e.target.value)}
//                       value={crediteCardData.dateCard}
//                       className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
//                       placeholder="MM/ГГ"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="mb-10">
//                 <label className="font-bold text-sm mb-2 ml-1">Код CVV2:</label>
//                 <div>
//                   <input
//                     id="cvv_card"
//                     className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
//                     type="text"
//                     placeholder="000"
//                     onChange={(e) => setrediteCardData(e.target.value)}
//                     value={crediteCardData.cvvCard}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="email-phone-div grid gap-6 mb-6 lg:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="first_name"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Email:
//                 </label>
//                 <input
//                   type="text"
//                   id="first_name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="example@email.com"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           <div>
//             <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
//               <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}

//       <div className="footer footer-center  w-full p-4 bg-gray-300 text-gray-800">
//         <div className="text-center">
//           <p>
//             Copyright © 2022.02.24 -
//             <a className="font-semibold" href="mailto:m.sohanemon@gmail.com">
//               SohanEmon
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyTicket;
import React, { useEffect, useState } from 'react';
import $api from '../../../utils/api';
import apiClientRoutes from '../../routes/api/apiClientRoutes.js';

export default ({ eventItem }) => {
  const handleSubmit = async () => {
    try {
      const response = await $api.post(apiClientRoutes.payPath(), {
        item: eventItem
      });
      if (response.data.values.url) {
        window.location.href = response.data.values.url;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button
        onClick={handleSubmit}
        type="button"
        className="bg-indigo-600 text-white text-sm leading-7 font-medium py-2 px-4 rounded-lg"
      >
        Buy now
      </button>
    </>
  );
};
