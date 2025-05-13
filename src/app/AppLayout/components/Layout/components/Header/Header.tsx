import LogoTicTrilhas from "@/assets/images/logo-tic-trilhas.svg";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import { useGetLayoutNavigationItems } from "../../LayoutHooks";
import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
    const navigationItems = useGetLayoutNavigationItems();
    const navigate = useNavigate();

    const handleGoHomePage = () => {
        navigate(RotasAplicacao.HOME);
    };

    return (
        <header className="max-w-36">
            <NavigationMenu className="justify-normal bg-[#0a0a0a] min-h-screen flex flex-col space-y-2 w-48 p-4 border-r rounded-tr-lg rounded-br-lg shadow-md">
                <div className="mb-4">
                    <img
                        src={LogoTicTrilhas}
                        alt="Tic Em Trilhas logo"
                        className="cursor-pointer w-16 h-auto"
                        onClick={handleGoHomePage}
                    />
                </div>

                <NavigationMenuList className="flex flex-col space-y-2 text-white gap-4">
                    {navigationItems.map((option, index) => (
                        <NavigationMenuItem key={index}>
                            <NavLink
                                className="px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-black"
                                to={option.link}>
                                {option.label}
                            </NavLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};

export default Header;
