import React from 'react';
import AccordionComponent from '../../../../common/Accordion.jsx';
import textTermUse from '../../../../../other/text-term-use.js';
import $api from '../../../../../../utils/api.js';
import apiClientRoutes from '../../../../../routes/api/apiClientRoutes.js';

const RenderItemAccordion = ({
  setReading,
  reading,
  head,
  body,
  setCompleteStep,
  completeStep,
  count,
  open,
  handleOpen,
}) => {
  const [read, setRead] = React.useState(false || completeStep.step1.isComplete);

  return (
    <div className="mb-4" key={count}>
      <AccordionComponent
        handleOpen={handleOpen}
        open={open}
        head={head}
        body={body}
        style={read ? 'bg-green-100' : 'bg-gray-100'}
        count={count + 1}
      >
        <div className="w-full flex justify-end">
          <button
            onClick={() => {
              if (reading.length === 5) {
                setCompleteStep((prev) => ({
                  ...prev,
                  step1: {
                    isComplete: true,
                  },
                }));
              }
              setRead(!read);
              setReading((prev) => [...prev, head]);
            }}
            disabled={read}
            className={`transition px-4 py-2 text-white 
                          ${
                            read
                              ? 'bg-green-600'
                              : 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-60 dark:hover:bg-primary-700'
                          } 
                          font-medium rounded-lg 
                          text-sm text-center 
                          dark:focus:ring-primary-800`}
          >
            {read ? 'Complete!' : 'I read'}
          </button>
        </div>
      </AccordionComponent>
    </div>
  );
};

const TermUse = ({ setCompleteStep, completeStep }) => {
  React.useEffect(() => {
    const fetch = async () => {
      try {
        const response = await $api.post(apiClientRoutes.createOrganization());
        console.log(response.data.values);
      } catch (err) {
        console.log(err);
      }
    };
    if (!completeStep['step1'].isComplete) {
      fetch();
      console.log('1');
    }
  }, [completeStep.step1.isComplete]);

  const [open, setOpen] = React.useState(0);
  const [reading, setReading] = React.useState([]);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="animate-active-page min-h-full">
      <section className="text-gray-700">
        <div className="container px-5 pt-16 mx-auto">
          <div className="text-center mb-14">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Frequently Asked Question
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div className="flex flex-wrap sm:mx-auto -mx-2">
            {textTermUse().map((item, i) => (
              <div key={i} className="w-full lg:w-1/2 lg:px-4 lg:py-2">
                {item[`text${i + 1}`].map(({ head, body, iter }) => {
                  return (
                    <RenderItemAccordion
                      reading={reading}
                      setReading={setReading}
                      key={iter}
                      head={head}
                      body={body}
                      setCompleteStep={setCompleteStep}
                      completeStep={completeStep}
                      count={iter}
                      open={open}
                      setOpen={setOpen}
                      handleOpen={handleOpen}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermUse;
