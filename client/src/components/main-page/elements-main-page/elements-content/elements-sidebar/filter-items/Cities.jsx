import React, { useEffect } from 'react';
import Select from 'react-select';
import _ from 'lodash';

const Cities = ({ cities, filter, setFilter }) => {
  const [target, setTarget] = React.useState('');
  const [currentCities, setCities] = React.useState([]);
  const currentLang = localStorage.getItem('i18nextLng');
  const sortCities = _.sortBy(cities, (o) => {
    return o.name[currentLang];
  });
  useEffect(() => {
    setFilter((prev) => ({
      categories: { ...prev.categories },
      cities: {},
    }));
    const findCities = sortCities.find(
      (item) => item.name[currentLang] === target
    );
    setCities(
      findCities
        ? _.sortBy(findCities.cities, (o) => {
            return o.name[currentLang];
          })
        : []
    );
    if (findCities) {
      findCities.cities.forEach((item) => {
        setFilter((prev) => ({
          categories: { ...prev.categories },
          cities: { ...prev.cities, [item.name.en]: false },
        }));
      });
    }
  }, [target]);
  console.log(filter);

  return (
    <div className="mt-5 w-1/2 flex flex-col items-start">
      <div className="flex items-center w-full">
        <p className="text-lg mr-5">Region: </p>
        <div className="flex w-1/2 flex-col pt-1">
          <Select
            className="w-full"
            isClearable={true}
            onChange={(event) => setTarget(event?.value ? event.value : '')}
            options={sortCities.map((city) => ({
              label: city.name[currentLang].split(' ')[0],
              value: city.name[currentLang],
            }))}
          />
        </div>
      </div>
      <div className="flex pt-10 flex-wrap">
        {currentCities.length === 0 ? (
          <></>
        ) : (
          currentCities.map((city, i) => (
            <div key={i} className={`flex items-center mb-4 ml-4 ${''}`}>
              <input
                id={city.name[currentLang]}
                type="checkbox"
                checked={filter.cities[city.name.en] || false}
                onChange={() =>
                  setFilter((prev) => ({
                    categories: { ...prev.categories },
                    cities: {
                      ...prev.cities,
                      [city.name.en]: !filter[city.name.en],
                    },
                  }))
                }
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={city.name[currentLang]}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {city.name[currentLang]}
              </label>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cities;
