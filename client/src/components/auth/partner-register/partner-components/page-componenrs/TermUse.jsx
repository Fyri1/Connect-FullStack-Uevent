import { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

const info1 = [
  {
    head: 'как пососал?',
    body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus minus, veritatis, voluptatem ex fugit unde rem quasi doloribus consectetur ducimus quis molestias esse cum nemo eveniet maxime, debitis voluptatum nam!`,
  },
  {
    head: 'как поесть говна?',
    body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus minus, veritatis, voluptatem ex fugit unde rem quasi doloribus consectetur ducimus quis molestias esse cum nemo eveniet maxime, debitis voluptatum nam!`,
  },
  {
    head: 'как обосрать админа?',
    body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus minus, veritatis, voluptatem ex fugit unde rem quasi doloribus consectetur ducimus quis molestias esse cum nemo eveniet maxime, debitis voluptatum nam!`,
  },
];
const info2 = [
  {
    head: 'как правльно копировать формы?',
    body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus minus, veritatis, voluptatem ex fugit unde rem quasi doloribus consectetur ducimus quis molestias esse cum nemo eveniet maxime, debitis voluptatum nam!`,
  },
  {
    head: 'как не писать кнопку в ссылке?',
    body: `Берешь и не пишешь :D`,
  },
  {
    head: 'как захватить Украину за 3 дня?',
    body: `Спросить у Макса.`,
  },
]

const AccordionComponent = ({ head, body }) => {
  const [open, setOpen] = useState(false);

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <Accordion open={open} icon={svg} className='bg-gray-100'>
      <AccordionHeader onClick={() => setOpen(!open)} className='border-none'>{head}</AccordionHeader>
      <AccordionBody>{body}</AccordionBody>
    </Accordion>
  );
};

const TermUse = () => {
  return (
    <div className="animate-active-page min-h-full">
        <section className="text-gray-700 h-1/2">
          <div className="container px-5 py-16 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                {info1.map(({ head, body }) => (
                    <div className="mb-4">
                    <AccordionComponent head={head} body={body} />
                    </div>
                ))}
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                {info2.map(({ head, body }) => (
                    <div className="mb-4">
                    <AccordionComponent head={head} body={body} />
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default TermUse;
