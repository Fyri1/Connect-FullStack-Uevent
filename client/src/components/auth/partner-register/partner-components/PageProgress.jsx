import React from 'react';
import FormPartner from './page-componenrs/FormPartner';
import TermUse from './page-componenrs/TermUse.jsx';
import Finish from './page-componenrs/Finish.jsx';
import FormPay from './page-componenrs/FormPay.jsx';
import Agreement from './page-componenrs/Agreement.jsx';
const getPageStape = (setter, completeStep) => {
  return {
    1: <FormPartner />,
    2: <FormPay setCompleteStep={setter} completeStep={completeStep}/>,
    3: <TermUse setCompleteStep={setter} completeStep={completeStep} />,
    4: <Agreement />,
    5: <Finish />,
  };
};

const PageProgress = ({ step, setCompleteStep, completeStep }) => {
  return <div className='mb-7'>{getPageStape(setCompleteStep, completeStep)[step]}</div>
};

export default PageProgress;
