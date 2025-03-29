import LogoTicTrilhas from "@/assets/images/logo-tic-trilhas.svg";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useGetLayoutNavigationItems } from "../../LayoutHooks";
import { ApplicationRoutes } from "@/enums/ApplicationRoutesEnums";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigationItems = useGetLayoutNavigationItems();
  const navigate = useNavigate();

  const handleGoHomePage = () => {
    navigate(ApplicationRoutes.HOME);
  };

  return (
    <header>
      <NavigationMenu className="justify-normal bg-[#0a0a0a] min-h-screen flex flex-col space-y-2 w-48 p-4 border-t border-r rounded-tr-lg rounded-br-lg shadow-md">
        <div className="mb-4">
          <img
            src={LogoTicTrilhas}
            alt="Tic Em Trilhas logo"
            className="cursor-pointer w-16 h-auto"
            onClick={handleGoHomePage}
          />
        </div>

        <NavigationMenuList className="flex flex-col space-y-2 text-white">
          {navigationItems.map((option, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={option.link}
                className="px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                {option.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
