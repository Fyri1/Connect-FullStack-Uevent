import React from 'react';
import '../../css/EventDetailsHead.css';
import { useTranslation } from 'react-i18next';

import Showdown from 'showdown';
const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const EventDetailsHead = ({ eventData, setEdit, edit, }) => {
  const { title, description, categories, poster } = eventData;
  const [t, i18n] = useTranslation('eventPage');
  return (
    <div>
      <h1 className="text-center text-5xl pb-6 px-4 dark:text-dark-text-200">
        {title[0].toUpperCase() + title.slice(1)}
      </h1>
      <div className="Map">
        <div className="flex flex-row items-center ml-6">
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-[#8e5f27] h-4 w-8 rounded-t-md'></div>
            <div className='w-12 h-72 bg-[#0c2e41] rounded-t-md'></div>
            <div className='w-12 h-2 bg-yellow-600 rounded-t-full -mt-2'></div>
            <div className='bg-[#8e5f27] h-4 w-8 rounded-t-md'></div>
          </div>
          <div
            className=' box-content relative h-full w-full relative border-[#0c2e41] border-8 slide-ltr sliding-ltr flex flex-row ease '> 
            <img className='h-full object-fit'src="https://london.thecomedystore.co.uk/wp-content/uploads/sites/2/2022/03/SUFU-ukraine-header.png"></img>
        
          </div>
        </div>
      </div>

      <p className="text-3xl pb-1 dark:text-dark-text-200 ml-6">Опис:</p>
        <div className="max-w-full">
        <p className="text-event-description2 pb-1 dark:text-dark-text-200 ml-6">ЧОМУ ВАРТО ПІТИ НА СТЕНДАП "UNDERGROUND STANDUP FOR THREE"?</p>
        {/* Description */}
          <div className="max-w-full ml-7">
            <div class=" text-base py-7 pl-2text-gray-600 mt-1 dark:text-dark-text-300">
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
            <p className='dark:text-dark-text-300'>До зустрічі!</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsHead;
