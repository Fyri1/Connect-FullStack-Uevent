import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StapperProgress from './partner-components/StapperProgress';
import PageProgress from './partner-components/PageProgress.jsx';
export default () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [stapper, setStaper] = React.useState({
    stape1: false,
    stape2: false,
    stape3: false,
    stape4: false,
    iter: 1,
  });
  const [completeStape, setCompleteStape] = React.useState({
    stape1: {
      reading: [],
      isComplete: false,
    },
    stape2: '',
    stape3: '',
    stape4: '',
  });

  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    const stapeIter = search.get('stape');
    setStaper((prev) => ({ ...prev, iter: stapeIter }));
  }, []);

  React.useEffect(() => {
    navigate(location.pathname + '?stape=' + stapper.iter);
    console.log(location.search);
  }, [stapper.iter]);

  return (
    <div className="container m-auto flex flex-col">
      <StapperProgress
        stapper={stapper}
        setStapper={setStaper}
        completeStape={completeStape}
      />
      <PageProgress stape={stapper.iter} setCompleteStape={setCompleteStape} />
    </div>
  );
};
