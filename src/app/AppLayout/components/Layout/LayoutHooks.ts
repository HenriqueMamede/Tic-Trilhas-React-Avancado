import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";

export const useGetLayoutNavigationItems = () => {
  const moduleOne = {
    link: RotasAplicacao.MODULE_ONE,
    label: "Módulo 1",
  };

  const moduleTwo = {
    link: RotasAplicacao.MODULE_TWO,
    label: "Módulo 2",
  };

  const moduleThree = {
    link: RotasAplicacao.MODULE_THREE,
    label: "Módulo 3",
  };

  const moduleFour = {
    link: RotasAplicacao.MODULE_FOUR,
    label: "Módulo 4",
  };

  const moduleFive = {
    link: RotasAplicacao.MODULE_FIVE,
    label: "Módulo 5",
  };

  const moduleSix = {
    link: RotasAplicacao.MODULE_SIX,
    label: "Módulo 6",
  };

  const moduleSeven = {
    link: RotasAplicacao.MODULE_SEVEN,
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
