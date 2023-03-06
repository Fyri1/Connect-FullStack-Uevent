import React from 'react';

import PageNumber from './PageNumber.jsx';
import PageArrorSelector from './PageArrorSelector.jsx';


const PaginationElement = () => {
  return (
    <nav className="h-[13%] fixed bottom-0" aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <PageArrorSelector><svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></PageArrorSelector>
        <PageNumber pageNumber={1} isSelected={true} />
        <PageNumber pageNumber={2} isSelected={false} />
        <PageNumber pageNumber={3} isSelected={false} />
        <PageNumber pageNumber={4} isSelected={false} />
        <PageNumber pageNumber={5} isSelected={false} />
        <PageNumber pageNumber={6} isSelected={false} />
        <PageArrorSelector><svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></PageArrorSelector>
      </ul>
    </nav>
  )
}

export default PaginationElement;
