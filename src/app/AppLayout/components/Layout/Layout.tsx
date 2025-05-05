import { lazy, Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";

const Header = lazy(() => import("./components/Header"));

function Layout() {
  const location = useLocation();

  const isHomePage = location.pathname === RotasAplicacao.HOME;

  return (
    <Suspense fallback={<Skeleton className="h-32 w-full rounded-lg" />}>
      {!isHomePage && <Header />}

      <main
        className="relative h-full flex-1 overflow-hidden"
        id="main-content"
      >
        <Outlet />
      </main>
    </Suspense>
  );
}

export default Layout;
