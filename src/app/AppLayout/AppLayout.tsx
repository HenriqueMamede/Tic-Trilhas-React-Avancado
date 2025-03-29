import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import { ApplicationRoutes } from "@/enums/ApplicationRoutesEnums";

import Layout from "./components/Layout/Layout";

import { useAppRoutes } from "./AppLayoutHooks";

const AppLayout = () => {
  const appRoutes = useAppRoutes();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ApplicationRoutes.HOME} element={<Layout />}>
        {appRoutes.map(({ Page, path }) => (
          <Route element={<Page />} path={path} key={path} />
        ))}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppLayout;
