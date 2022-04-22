type RouteContext = {
  children?: React.ReactNode;
  router: Router;
}

import { Router } from 'next/router';
import { useUserContext } from './Context'
import React from 'react';
import consts from '../consts/consts';

const RouteComponent = ({ children, router } : RouteContext) => {
  const { loggedIn, setLoggedIn } = useUserContext();
  const isPath = consts.appRoutes.indexOf(router.asPath) === -1;
  if (typeof window !== "undefined") setLoggedIn(localStorage.getItem('loggedIn') === 'true')
  if (typeof window !== "undefined" && !loggedIn && router.asPath != '/login') router.push('/login');
  if (typeof window !== "undefined" && loggedIn && !isPath) router.push('/ ');
  
  return <>{children}</>;
};

export default RouteComponent;