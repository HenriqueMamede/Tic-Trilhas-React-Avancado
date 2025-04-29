import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import { ApplicationRoutes } from "@/enums/ApplicationRoutesEnums";

import Layout from "./components/Layout/Layout";

import { useAppRoutes } from "./AppLayoutHooks";
import PaginaNaoEncontrada from "@/pages/PaginaNaoEncontrada";

const AppLayout = () => {
  const appRoutes = useAppRoutes();

  const router = createBrowserRouter([
    ...appRoutes.map(({ Page, path }) => ({
      path,
      element: <Layout><Page /></Layout>,
    })),
    {
      path: ApplicationRoutes.PAGINA_NAO_ENCONTRADA,
      element: <PaginaNaoEncontrada />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppLayout;
