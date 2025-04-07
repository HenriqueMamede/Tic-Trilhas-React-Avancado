import { lazy, Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import { ApplicationRoutes } from "@/enums/ApplicationRoutesEnums";

const Header = lazy(() => import("./components/Header"));

function Layout() {
  const location = useLocation();

  const isHomePage = location.pathname === ApplicationRoutes.HOME;

  return (
    <Suspense fallback={<Skeleton className="h-32 w-full rounded-lg" />}>
      {!isHomePage && <Header />}

      <main
        className="relative h-full flex-1 overflow-hidden p-5"
        id="main-content"
      >
        <Outlet />
      </main>
    </Suspense>
  );
}

export default Layout;
