import React from 'react';
import '../../css/EventDetailsHead.css';
import { useTranslation } from 'react-i18next';


const EventDetailsHead = ({ eventData }) => {
  const [t, i18n] = useTranslation('eventPage');


  return (
    <div>
      <h1 className="text-name pb-6   px-4 dark:text-dark-text-200" >{ eventData.title }</h1>
      <h1 className="pb-6  mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-4xl">ПРО ПОДIЮ</h1>

      <p className="text-event-description2 pb-1 dark:text-dark-text-200">ZОМУ ВАРТО ПІТИ НА ВИСТАВУ "ЖЕНИХИ"?</p>
      {/* Description */}
        <div className="max-w-full">
        
          <div class=" text-base py-6 pl-2text-gray-600 mt-1">
                                    <p>Hi John!</p>
                                    <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    <p class="mt-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p class="mt-4">Sed ut perspiciatis unde omnis iste natus error sit:</p>
                                    <ul class="ml-12 list-disc">
                                        <li>voluptatem accusantium</li>
                                        <li>doloremque laudantium</li>
                                        <li>totam rem aperiam</li>
                                        <li>eaque ipsa quae ab illo inventore veritatis</li>
                                        <li>quasi architecto</li>
                                    </ul>
                                    <p class="mt-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                                    <p class="mt-4">Regards,</p>
                                    <p>Betty Garmon</p>
                                </div>
          <p>До зустрічі!</p>
        </div>
    </div>
  )
}

export default EventDetailsHead;
