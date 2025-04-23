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
import ExampleOneCompleted from "@/pages/ModuleFive/Completed/1-LoginYup.tsx";
import ExampleTwoCompleted from "@/pages/ModuleFive/Completed/2-FormularioCadastro.tsx";
import ExampleThreeCompleted from "@/pages/ModuleFive/Completed/3-LoginUserController.tsx";
import ExampleFourCompleted from "@/pages/ModuleFive/Completed/4-ListaDeParticipantes";
import ExampleUseFormContext from "@/pages/ModuleFive/Completed/UseFormContext-Pai.tsx";

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
      Page: ExampleOneCompleted,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_ONE_COMPLETED,
    },
    {
      Page: ExampleTwoCompleted,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_TWO_COMPLETED,
    },
    {
      Page: ExampleThreeCompleted,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_THREE_COMPLETED,
    },
    {
      Page: ExampleFourCompleted,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_FOUR_COMPLETED,
    },
    {
      Page: ExampleUseFormContext,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_USEFORMCONTEXT,
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
