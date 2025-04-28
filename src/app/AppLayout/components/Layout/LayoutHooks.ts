import { ApplicationRoutes } from "@/enums/ApplicationRoutesEnums";

export const useGetLayoutNavigationItems = () => {
  const moduleOne = {
    link: ApplicationRoutes.MODULE_ONE,
    label: "Módulo 1",
  };

  const moduleTwo = {
    link: ApplicationRoutes.MODULE_TWO,
    label: "Módulo 2",
  };

  const moduleThree = {
    link: ApplicationRoutes.MODULE_THREE,
    label: "Módulo 3",
  };

  const moduleFour = {
    link: ApplicationRoutes.MODULE_FOUR,
    label: "Módulo 4",
  };

  const moduleFive = {
    link: ApplicationRoutes.MODULE_FIVE,
    label: "Módulo 5",
  };

  const moduleSix = {
    link: ApplicationRoutes.MODULE_SIX,
    label: "Módulo 6",
  };

  const moduleSeven = {
    link: ApplicationRoutes.MODULO_SETE,
    label: "Módulo 7",
  };

  const navigationItems = [];

  navigationItems.push(
    moduleOne,
    moduleTwo,
    moduleThree,
    moduleFour,
    moduleFive,
    moduleSix,
    moduleSeven
  );

  return navigationItems;
};
