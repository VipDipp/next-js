type RouteContext = {
  children?: React.ReactNode;
  router: Router;
}

import { Router } from 'next/router';
import { useUserContext } from './Context'
import React, { useEffect } from 'react';
import consts from '../consts/consts';

const RouteComponent = ({ children, router } : RouteContext) => {
  const { loggedIn, setLoggedIn } = useUserContext();
  let isPath
  useEffect(() => {
    isPath = consts.appRoutes.indexOf(window.location.pathname) === -1;
    if (typeof window !== "undefined") setLoggedIn(localStorage.getItem('loggedIn') === 'true')
    if (typeof window !== "undefined" && !loggedIn) router.push('/login');
    if (typeof window !== "undefined" && loggedIn && isPath) router.push('/');
  }, [router.asPath])
  
  return <>{children}</>;
};

export default RouteComponent;