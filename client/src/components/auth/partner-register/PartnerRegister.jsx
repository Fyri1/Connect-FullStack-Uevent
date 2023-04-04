import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import StapperProgress from './partner-components/StapperProgress';
import PageProgress from './partner-components/PageProgress.jsx'
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
  console.log(stapper)
  React.useEffect(() => {
    navigate(location.pathname + '?stape=' + stapper.iter)
    // console.log(location.search.)
  }, [stapper.iter])

  return (
    <div className="container m-auto flex flex-col">
      <StapperProgress stapper={stapper} setStapper={setStaper}/>
      <PageProgress stape={stapper.iter}/>
    </div>
  );
};
