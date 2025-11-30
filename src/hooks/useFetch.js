import { useState, useEffect } from "react";

const useData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const req = await fetch(url);
      const res = await req.json();
      setData(res);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [url]);

  const refetch = () => getData();
  return { data, error, loading, refetch };
};
export default useData;
