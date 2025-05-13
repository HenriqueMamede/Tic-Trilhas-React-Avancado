import { lazy, Suspense } from "react";
import { useLocation } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";
import { LayoutProps } from "./Layout.types";

const Header = lazy(() => import("./components/Header"));

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();

    const isHomePage = location.pathname === RotasAplicacao.HOME;

    return (
        <Suspense fallback={<Skeleton className="h-32 w-full rounded-lg" />}>
            {!isHomePage && <Header />}

            <main
                className="relative h-full flex-1 overflow-hidden"
                id="main-content">
                {children}
            </main>
        </Suspense>
    );
};

export default Layout;
