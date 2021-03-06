import { useState, useEffect } from 'react';

const useMediaQuery = (queryValue) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(matchMedia.matches);
    };
    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);
    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);
  return match;
};
export const Home = () => {
  const huge = useMediaQuery('(min-width: 980px)');
  const background = huge ? 'green' : null;
  return <div style={{ fontSize: '60px', background }}>Oi</div>;
};
