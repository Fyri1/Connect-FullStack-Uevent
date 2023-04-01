import $api from '../../../utils/api';
import apiClientRoutes from '../../routes/api/apiClientRoutes.js';

export default ({ eventItem, name }) => {
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
        className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
      >
        {name}
      </button>
    </>
  );
};
