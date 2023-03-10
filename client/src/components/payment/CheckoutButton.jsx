
import React, { useEffect, useState } from 'react';
import $api from '../../../utils/api';
import apiClientRoutes from '../../routes/api/apiClientRoutes.js';

export default ({ eventItem }) => {
  const handleSubmit = async () => {
    try {
      const response = await $api.post(apiClientRoutes.payPath(), {
        item: eventItem
      });
      if (response.data.values.url) {
        window.location.href = response.data.values.url;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button
        onClick={handleSubmit}
        type="button"
        className="bg-indigo-600 text-white text-sm leading-7 font-medium py-2 px-4 rounded-lg"
      >
        Buy now
      </button>
    </>
  );
};
