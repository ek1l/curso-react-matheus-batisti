import React, { useEffect, useState } from 'react';
// custom hook
export const useFetch = (url) => {
  const [data, setData] = React.useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [itemID, setItemID] = useState(null);

  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    } else if (method === 'DELETE') {
      setConfig({
        method,
        headers: {
          'content-type': 'application/json',
        },
      });
      setMethod(method);
      setItemID(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.log(error.message);
        setError('Houve algum erro ao carregar os dados!');
      }
      setLoading(false);
    };
    fetchData();
  }, [url, callFetch]);

  // 5 -  Refatorando POST

  React.useEffect(() => {
    const httpRequest = async () => {
      if (method === 'POST') {
        setLoading(true);
        let fetchOptions = [url, config];
        const rest = await fetch(...fetchOptions);
        const json = await rest.json();
        setCallFetch(json);
        setLoading(false);
      } else if (method === 'DELETE') {
        setLoading(true);
        const deleteUrl = `${url}/${itemID}`;
        const res = await fetch(deleteUrl, config);
        const json = await res.json();
        setCallFetch(json);
        setLoading(false);
      }
    };
    httpRequest();
  }, [config, method, url,itemID]);

  return { data, setData, httpConfig, loading, error };
};
