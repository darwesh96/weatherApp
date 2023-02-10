import {useState} from 'react';
import Toast from 'react-native-toast-message';
import {APP_ID, BASE_URL} from '../../constants/baseurl';

/**
 * useCity custom hook is used to manage the api for fetching a city or it's details.
 * @return {object}
 * @public
 */
export const useCity = () => {
  // state goes here
  const [loading, setLoading] = useState(false); // loading state
  const [data, setData] = useState({}); // data state returned from the api

  /**
   * loadCityApi function is used to fetch a city with a particular name passed a a param.
   * @param {string} text
   * @public
   */
  const loadCityApi = async text => {
    return new Promise(function (resolve, reject) {
      // set loading true while fetching
      setLoading(true);

      // making the fetch request
      fetch(BASE_URL + text + `&units=metric&appid=` + APP_ID)
        .then(response => response.json())
        .then(response => {
          // set loading false after finishing the request
          setLoading(false);
          // set the response in the local state
          setData({...response, date: new Date()});
          // resolve the response if needed to be used locally in the calling method
          resolve(response);
        })
        .catch(error => {
          // catching an error here by showing a global toast
          Toast.show({
            type: 'error',
            text1: 'Something went wrong, Please try later.',
          });
          // setting loading to false
          setLoading(false);
          // rejecting the error
          reject(error);
        });
    });
  };

  // exporting the state and functions of the custom hook
  return {
    loadCityApi,
    loading,
    data,
  };
};
