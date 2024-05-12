import { useState } from 'react';

/**
 * Custom hook for handling data fetching with loading and error states.
 * @param {Function} callback - The callback function to perform the fetching.
 * @returns {[Function, boolean, any]} - A tuple containing fetchData function, isLoading state, and error state.
 */
export const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * Function to fetch data asynchronously.
   * @param  {...any} args - Arguments to pass to the callback function.
   */
  const fetchData = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, isLoading, error];
};
