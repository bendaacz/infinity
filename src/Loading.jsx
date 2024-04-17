import { useState, useEffect } from 'react';

function useLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1250);

    return () => clearTimeout(timer);
  }, []);

  return loading;
}

export default useLoading;
