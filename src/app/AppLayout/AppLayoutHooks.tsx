import { ApplicationRoutes } from "@/enums/ApplicationRoutesEnums";

import Home from "@/pages/Home";
import ModuleOne from "@/pages/ModuleOne";
import ModuleTwo from "@/pages/ModuleTwo";
import ModuleThree from "@/pages/ModuleThree";
import ModuleFour from "@/pages/ModuleFour";
import ModuleFive from "@/pages/ModuleFive";
import ModuleSix from "@/pages/ModuleSix";
import ModuleSeven from "@/pages/ModuleSeven";
import ExampleOne from "@/pages/ModuleFive/Examples/ExampleOne";
import ExampleTwo from "@/pages/ModuleFive/Examples/ExampleTwo.tsx";
import ExampleThree from "@/pages/ModuleFive/Examples/ExampleThree.tsx";
import ExampleFour from "@/pages/ModuleFive/Examples/ExampleFour.tsx";
import ModuloQuatroPrimeiroExemplo from "@/pages/ModuleFour/Exemplos/PrimeiroExemplo";
import ModuloQuatroSegundoExemplo from "@/pages/ModuleFour/Exemplos/SegundoExemplo";
import ModuloQuatroTresExemplo from "@/pages/ModuleFour/Exemplos/TerceiroExemplo";
import ModuloQuatroPrimeiroExemploCompleto from "@/pages/ModuleFour/Completos/PrimeiroExemplo";
import ModuloQuatroSegundoExemploCompleto from "@/pages/ModuleFour/Completos/SegundoExemplo";
import ModuloQuatroTresExemploCompleto from "@/pages/ModuleFour/Completos/TerceiroExemplo";

export function useAppRoutes() {
  const routes = [
    {
      Page: Home,
      path: ApplicationRoutes.HOME,
    },
    {
      Page: ModuleOne,
      path: ApplicationRoutes.MODULE_ONE,
    },
    {
      Page: ModuleTwo,
      path: ApplicationRoutes.MODULE_TWO,
    },
    {
      Page: ModuleThree,
      path: ApplicationRoutes.MODULE_THREE,
    },
    {
      Page: ModuleFour,
      path: ApplicationRoutes.MODULE_FOUR,
    },
    {
      Page: ModuloQuatroPrimeiroExemplo,
      path: ApplicationRoutes.MODULE_FOUR_EXAMPLE_ONE,
    },
    {
      Page: ModuloQuatroSegundoExemplo,
      path: ApplicationRoutes.MODULE_FOUR_EXAMPLE_TWO,
    },
    {
      Page: ModuloQuatroTresExemplo,
      path: ApplicationRoutes.MODULE_FOUR_EXAMPLE_THREE,
    },
    {
      Page: ModuloQuatroPrimeiroExemploCompleto,
      path: ApplicationRoutes.MODULE_FOUR_EXAMPLE_ONE_COMPLETED,
    },
    {
      Page: ModuloQuatroSegundoExemploCompleto,
      path: ApplicationRoutes.MODULE_FOUR_EXAMPLE_TWO_COMPLETED,
    },
    {
      Page: ModuloQuatroTresExemploCompleto,
      path: ApplicationRoutes.MODULE_FOUR_EXAMPLE_THREE_COMPLETED,
    },
    {
      Page: ModuleFive,
      path: ApplicationRoutes.MODULE_FIVE,
    },
    {
      Page: ExampleOne,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_ONE,
    },
    {
      Page: ExampleTwo,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_TWO,
    },
    {
      Page: ExampleThree,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_THREE,
    },
    {
      Page: ExampleFour,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_FOUR,
    },
    {
      Page: ModuleSix,
      path: ApplicationRoutes.MODULE_SIX,
    },
    {
      Page: ModuleSeven,
      path: ApplicationRoutes.MODULE_SEVEN,
    },
  ];

  return routes;
}
