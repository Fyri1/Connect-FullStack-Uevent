import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StapperProgress from './partner-components/StapperProgress';
import PageProgress from './partner-components/PageProgress.jsx';
import Spinner from '../../common/Spinner.jsx';
import $api from '../../../../utils/api.js';
import apiClientRoutes from '../../../routes/api/apiClientRoutes';
export default () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setLoading] = React.useState(true);
  const [stepper, setStepper] = React.useState();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [completeStep, setCompleteStep] = React.useState({
    step1: { isComplete: false },
    step2: { isComplete: false },
    step3: { isComplete: false },
    step4: { isComplete: false },
  });

  React.useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await $api.get(apiClientRoutes.getStepComplete());

        Object.entries(response.data.values)
          .filter((item) => item[0] !== 'iter')
          .forEach(([key, value]) => {
            console.log({ [key]: value });
            setCompleteStep((prev) => ({
              ...prev,
              [key]: { isComplete: value },
            }));
          });
        setStepper(response.data.values);
        setCurrentStep(response.data.values.iter);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="container m-auto flex flex-col">
      <StapperProgress
        stepper={stepper}
        setStepper={setStepper}
        completeStep={completeStep}
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
      <PageProgress
        step={currentStep}
        completeStep={completeStep}
        setCompleteStep={setCompleteStep}
      />
    </div>
  );
};
