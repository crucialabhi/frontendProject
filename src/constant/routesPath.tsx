import { lazy } from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';


const Home = lazy(() => import('../pages/Home/index'));
const Service = lazy(() => import('../pages/Service/index'));
const Gallery = lazy(() => import('../pages/Gallery/index')); 
const About = lazy(() => import('../pages/About/index'));
const Contact = lazy(() => import('../pages/Contact/index'));

export type RoutesType = {
  [key in
    | 'DEFAULT'
    | 'HOME'
    | 'Service'
    | 'Gallery'
    | 'About'
    | 'Contact'
    | 'NOT_FOUND']: {
    path: string;
    headerName?: string;
    routeType: 'public' | 'authenticate' | 'un-authenticate';
    element: RouteObject['element'];
  };
};

export const ROUTES: RoutesType = {
  DEFAULT: {
    path: '/',
    routeType: 'public',
    element: <Home />
  },
  HOME: {
    path: '/',
    routeType: 'public',
    headerName: 'Home',
    element: <Home />
  },
  Service: {
    path: '/service',
    routeType: 'public',
    headerName: 'service',
    element: <Service />
  },
  Gallery: {
    path: '/gallery',
    routeType: 'public',
    headerName: 'gallery',
    element: <Gallery />
  },
  About: {
    path: '/about',
    routeType: 'public',
    headerName: 'About',
    element: <About />,
   
  },
  Contact: {
    path: '/contact',
    routeType: 'public',
    headerName: 'Contact',
    element: <Contact />,
  },
  NOT_FOUND: {
    path: '*',
    routeType: 'public',
    element: <Navigate to={'/'} />
  }
} as const;
