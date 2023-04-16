import React from 'react';
import '../../css/EventDetailsHead.css';
import { useTranslation } from 'react-i18next';
import 'react-mde/lib/styles/css/react-mde-all.css';
import ReactMde from 'react-mde';
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
  const [value, setValue] = React.useState(description);
  const [selectedTab, setSelectedTab] = React.useState('write');
  return (
    <div>
      <h1 className="text-center text-5xl pb-6 px-4 dark:text-dark-text-200">
        {title[0].toUpperCase() + title.slice(1)}
      </h1>

      <p className="text-3xl pb-1 dark:text-dark-text-200">Опис:</p>
      <div className="max-w-full">
        <ReactMde
          value={value}
          onChange={setValue}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={async (markdown) => {
            const textConvert = converter.makeHtml(markdown);
            console.log(textConvert);
            return textConvert;
          }}
          childProps={{
            writeButton: {
              tabIndex: -1,
            },
          }}
        />
      </div>
    </div>
  );
};

export default EventDetailsHead;
