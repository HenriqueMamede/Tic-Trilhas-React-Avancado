import { createBrowserRouter, RouterProvider } from "react-router";

import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";

import Layout from "./components/Layout/Layout";

import { useAppRoutes } from "./AppLayoutHooks";
import PaginaNaoEncontrada from "@/pages/PaginaNaoEncontrada";

const AppLayout = () => {
    const appRoutes = useAppRoutes();

    const router = createBrowserRouter([
        ...appRoutes.map(({ Pagina, caminho }) => ({
            path: caminho,
            element: (
                <Layout>
                    <Pagina />
                </Layout>
            )
        })),
        {
            path: RotasAplicacao.PAGINA_NAO_ENCONTRADA,
            element: <PaginaNaoEncontrada />
        }
    ]);

    return <RouterProvider router={router} />;
};

export default AppLayout;
