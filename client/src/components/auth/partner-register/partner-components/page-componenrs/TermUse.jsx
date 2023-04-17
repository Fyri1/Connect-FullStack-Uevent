import React from 'react';
import AccordionComponent from '../../../../common/Accordion.jsx';
import textTermUse from '../../../../../other/text-term-use.js';
import $api from '../../../../../../utils/api.js';
import apiClientRoutes from '../../../../../routes/api/apiClientRoutes.js';
import { AccordionBody } from '@material-tailwind/react';

const RenderItemAccordion = ({
  setReading,
  head,
  body,
  completeStep,
  count,
  open,
  handleOpen,
}) => {
  const [read, setRead] = React.useState(
    false || completeStep.step1.isComplete
  );

  return (
    <div className="mb-4 " key={count} >
      <AccordionComponent 
        handleOpen={handleOpen}
        open={open}
        head={head}
        style={read ? 'bg-green-100 ' : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-200'}
        count={count + 1}
      >
        <AccordionBody  >
          <p className='dark:text-gray-200'>
          {
            body
          }
          </p>
          </AccordionBody>
        <div className="w-full flex justify-end ">
          <button
            onClick={() => {
              setRead(!read);
              setReading((prev) => [...prev, head]);
            }}
            disabled={read}
            className={`transition px-4 py-2 text-white 
                          ${
                            read
                              ? 'bg-green-600'
                              : 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-60 dark:hover:bg-primary-700 '
                          } 
                          font-medium rounded-lg 
                          text-sm text-center 
                          dark:focus:ring-primary-800 `}
          >
            {read ? 'Complete!' : 'I read'}
          </button>
        </div>
      </AccordionComponent>
    </div>
  );
};

const TermUse = ({ setCompleteStep, completeStep }) => {
  const [open, setOpen] = React.useState(0);
  const [reading, setReading] = React.useState([]);

  const handleForm = async (e) => {
    e.preventDefault();
    if (reading.length === 6) {
      try {
        const response = await $api.post(apiClientRoutes.createOrganization(1));
        setCompleteStep((prev) => ({
          ...prev,
          step1: {
            isComplete: true,
          },
        }));
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="animate-active-page min-h-full  ">
      <section className="text-gray-700">
        <div className="container px-5 pt-16 mx-auto">
          <div className="text-center mb-14">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4  dark:text-gray-200">
              Frequently Asked Question
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto dark:text-gray-400">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <form
            onSubmit={handleForm}
            className="flex flex-wrap sm:mx-auto -mx-2 "
          >
            {textTermUse().map((item, i) => (
              <div key={i} className="w-full lg:w-1/2 lg:px-4 lg:py-2 ">
                {item[`text${i + 1}`].map(({ head, body, iter }) => {
                  return (
                    <RenderItemAccordion
                      setReading={setReading}
                      key={iter}
                      head={head}
                      body={body}
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
          </form>
        </div>
      </section>
    </div>
  );
};

export default TermUse;
