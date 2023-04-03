import React from 'react';

const CompliteLine = ({ children, isEnd = false }) => {
  return (
    <li
    // w-full text-blue-600 dark:text-blue-500 before:content-[''] before:h-1 before:border-b before:border-blue-100 before:border-4 before:inline-block dark:before:border-blue-800
      class={`flex items-center w-full
      ${
        isEnd
        ? '': "text-blue-600 dark:text-blue-500 after:content-[''] after:animate-liner after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800"
        }`}
    >
      <span class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
        {children}
      </span>
    </li>
  );
};

export default CompliteLine;
