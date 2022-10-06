import {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useState,
} from 'react';

const RouterContext = createContext();

export default function Router({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname);

  const push = useCallback((path) => {
    setPathname(path);
    const url = `${window.location.origin}${path}`;
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, null, url);
  }, [setPathname]);

  window.onpopstate = () => {
    setPathname(window.location.pathname);
  };

  const value = useMemo(() => ({
    pathname, push,
  }), [pathname, push]);

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);

  if (context === undefined) {
    throw new Error('useRouter should be used within Router');
  }

  return context;
}
