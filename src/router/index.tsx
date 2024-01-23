import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  ScrollRestoration,
} from "react-router-dom";

import { Home } from "@pages/Home";

import { Counter } from "@components/Counter";


const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Counter />} />
      <Route path="*" element={<h1> Oops! This page does not exist</h1>} />
    </Route>
  )
);
