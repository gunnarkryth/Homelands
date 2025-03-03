import { useState } from "react";

function useApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // request function to perform any HTTP action
  const request = async (
    url,
    { method = "GET", body = null, headers = {} } = {}
  ) => {
    setLoading(true);
    setError(null);
    try {
      const options = {
        method,
        headers: { "Content-Type": "application/json", ...headers },
      };
      if (body) {
        options.body = JSON.stringify(body);
      }
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, request };
}

export default useApi;
