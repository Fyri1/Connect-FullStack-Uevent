
import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import $api from '../../../utils/api';
import apiClientRoutes from '../../routes/api/apiClientRoutes.js';
import '../css/PayForm.css';

export default ({ eventItem }) => {
  const handleSubmit = async () => {
    try {
      const response = await $api.post(apiClientRoutes.payPath(), {
        item: eventItem,
      });
      if (response.data.url) {
        window.location.href = response.data.url;
      }
      console.log(eventItem);
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
