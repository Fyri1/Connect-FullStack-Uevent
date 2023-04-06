import React, { useEffect } from 'react';
import StapperLine from './steppet-components/StapperLine.jsx';
import CompliteLine from './steppet-components/CompliteLine.jsx';
import svgStep from '../../../../other/svg-step.jsx';
const StapperProgress = ({
  completeStep,
  stepper,
  setStepper,
  setCurrentStep,
  currentStep
}) => {
  const handleClick = () => {
    if (stepper.iter === 5) {
      setStepper((prev) => ({
        ...prev,
        ['step' + stepper.iter]: true,
      }));
      return;
    }
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
                  <StapperLine setCurrentStep={setCurrentStep} currentStep={currentStep} iter={iter + 1} step={stepper.iter} isEnd={isEnd}> {start} </StapperLine>
                ) : (
                  <CompliteLine setCurrentStep={setCurrentStep} step={iter + 1} isEnd={isEnd}> {end} </CompliteLine>
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
          disabled={!completeStep['step' + stepper.iter].isComplete}
          onClick={handleClick}
        >
          {stepper.iter <= 3 ? 'next' : 'finish'}
        </button>
      </div>
    </>
  );
};

export default StapperProgress;
