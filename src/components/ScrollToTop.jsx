import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Routers preserve scroll position across navigations; for a content site each
 * page should open at the top. Hash links keep their default anchor behaviour.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
