import React, { useEffect } from 'react';
import StapperLine from './steppet-components/StapperLine.jsx';
import CompliteLine from './steppet-components/CompliteLine.jsx';
import svgStep from '../../../../other/svg-step.jsx';


import { Menu, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

const StapperProgress = ({
  completeStep,
  stepper,
  setStepper,
  setCurrentStep,
  currentStep
}) => {

  const [ t, i18n ] = useTranslation('header');
  const handleClick = () => {
    
    if (stepper.iter === 5) {
      setStepper((prev) => ({
        ...prev,
        ['step' + stepper.iter]: true,
      }));
      return;
    }
    setCurrentStep(currentStep + 1);
    setStepper((prev) => ({
      ...prev,
      ['step' + stepper.iter]: !stepper['step' + stepper.iter],
      iter: stepper.iter + 1,
    }));
  };
  

  return (
    <>
      <div className="flex justify-between items-center mt-20">
        
        <div className="w-[90%]">
          <ol className="flex items-center w-full">
            {svgStep.map(({ start, end, isEnd }, iter) => {
              return (
              <>
                {!stepper['step' + (iter + 1)] ? (
                  <StapperLine  setCurrentStep={setCurrentStep} currentStep={currentStep} iter={iter + 1} step={stepper.iter} isEnd={isEnd}> {start} </StapperLine>
                ) : (
                  <CompliteLine  setCurrentStep={setCurrentStep} step={iter + 1} isEnd={isEnd}> {end} </CompliteLine>
                )}
              </>
            )})}
          </ol>
        </div>


        <button
          className="transition p-10 text-white bg-primary-600 hover:bg-primary-700 
        focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700
        disabled:opacity-80"
          // disabled={!completeStep['step' + stepper.iter].isComplete}
          onClick={handleClick}
        >
          {stepper.iter <= 3 ? 'next' : 'finish'}
        </button>

{/* я хочу по чтобы вылезало окно в правом верхнем углу при нажатии на кнопку . получилсоь у меня хуево . помогите */}
        
        {/* <Menu class="flex min-h-screen w-full items-center justify-center bg-gray-100">
           <div>
              <Menu.Button  class="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
                  Hover me!
                  <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                  </div>
              </Menu.Button >
            </div>
            
            <Transition as={React.Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute right-0 w-12 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div   class="rounded-md bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-600">Launch toast</div>

              </Menu.Items>
            </Transition>


        </Menu> */}

      </div>
    </>
  );
};

export default StapperProgress;
