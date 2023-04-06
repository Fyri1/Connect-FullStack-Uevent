import React from 'react';
import FormPartner from './page-componenrs/FormPartner';
import TermUse from './page-componenrs/TermUse.jsx';
import Finish from './page-componenrs/Finish.jsx';
import FormPay from './page-componenrs/FormPay.jsx';
import Agreement from './page-componenrs/Agreement.jsx';
const getPageStape = (setter) => {
  return {
    1: <TermUse setCompleteStape={setter} />,
    2: <FormPay />,
    3: <FormPartner />,
    4: <Agreement />,
    5: <Finish />,
  };
};

const PageProgress = ({ stape, setCompleteStape }) => {
  return getPageStape(setCompleteStape)[stape];
};

export default PageProgress;
