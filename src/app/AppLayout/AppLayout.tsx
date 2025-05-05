import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";

import Layout from "./components/Layout/Layout";

import { useAppRoutes } from "./AppLayoutHooks";

const AppLayout = () => {
  const appRoutes = useAppRoutes();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={RotasAplicacao.HOME} element={<Layout />}>
        {appRoutes.map(({ Pagina, caminho }) => (
          <Route element={<Pagina />} path={caminho} key={caminho} />
        ))}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppLayout;
