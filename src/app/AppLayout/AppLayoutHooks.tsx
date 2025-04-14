import { ApplicationRoutes } from "@/enums/ApplicationRoutesEnums";

import Home from "@/pages/Home";
import ModuleOne from "@/pages/ModuleOne";
import ModuleTwo from "@/pages/ModuleTwo";
import ModuleTwoExampleOne from '@/pages/ModuleTwo/Exemplos/ExemploUm';
import ModuleTwoExampleTwo from '@/pages/ModuleTwo/Exemplos/ExemploDois';
import ModuleTwoExampleThree from '@/pages/ModuleTwo/Exemplos/ExemploTres';
import ModuleTwoExampleFour from '@/pages/ModuleTwo/Exemplos/ExemploQuatro';
import ModuleTwoExampleFive from '@/pages/ModuleTwo/Exemplos/ExemploCinco';
import ModuleTwoExampleOneCompleted from '@/pages/ModuleTwo/Completos/1-UseCallback';
import ModuleTwoExampleTwoCompleted from '@/pages/ModuleTwo/Completos/2-UseMemo';
import ModuleTwoExampleThreeCompleted from '@/pages/ModuleTwo/Completos/3-UseDeferredValue';
import ModuleTwoExampleFourCompleted from '@/pages/ModuleTwo/Completos/4-UseTransition';
import ModuleTwoExampleFiveCompleted from '@/pages/ModuleTwo/Completos/5-forwardRefAndUseImperativeHandle';
import ModuleThree from "@/pages/ModuleThree";
import ModuleFour from "@/pages/ModuleFour";
import ModuleFive from "@/pages/ModuleFive";
import ModuleSix from "@/pages/ModuleSix";
import ModuleSeven from "@/pages/ModuleSeven";
import ExampleOne from "@/pages/ModuleFive/Examples/ExampleOne";
import ExampleTwo from "@/pages/ModuleFive/Examples/ExampleTwo.tsx";
import ExampleThree from "@/pages/ModuleFive/Examples/ExampleThree.tsx";
import ExampleFour from "@/pages/ModuleFive/Examples/ExampleFour.tsx";

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
      Page: ModuleTwoExampleOne,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_ONE,
    },
    {
      Page: ModuleTwoExampleTwo,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_TWO,
    },
    {
      Page: ModuleTwoExampleThree,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_THREE,
    },
    {
      Page: ModuleTwoExampleFour,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_FOUR,
    },
    {
      Page: ModuleTwoExampleFive,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_FIVE,
    },
    {
      Page: ModuleTwoExampleOneCompleted,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_ONE_COMPLETED,
    },
    {
      Page: ModuleTwoExampleTwoCompleted,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_TWO_COMPLETED,
    },
    {
      Page: ModuleTwoExampleThreeCompleted,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_THREE_COMPLETED,
    },
    {
      Page: ModuleTwoExampleFourCompleted,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_FOUR_COMPLETED,
    },
    {
      Page: ModuleTwoExampleFiveCompleted,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_FIVE_COMPLETED,
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
