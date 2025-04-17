import { ApplicationRoutes } from "@/enums/ApplicationRoutesEnums";

import Home from "@/pages/Home";
import ModuleOne from "@/pages/ModuleOne";
import ModuleTwo from "@/pages/ModuleTwo";
import ModuloDoisExemploUm from '@/pages/ModuleTwo/Exemplos/ExemploUm';
import ModuloDoisExemploDois from '@/pages/ModuleTwo/Exemplos/ExemploDois';
import ModuloDoisExemploTres from '@/pages/ModuleTwo/Exemplos/ExemploTres';
import ModuloDoisExemploQuatro from '@/pages/ModuleTwo/Exemplos/ExemploQuatro';
import ModuloDoisExemploCinco from '@/pages/ModuleTwo/Exemplos/ExemploCinco';
import ModuloDoisExemploUmCompleto from '@/pages/ModuleTwo/Completos/1-UseCallback';
import ModuloDoisExemploDoisCompleto from '@/pages/ModuleTwo/Completos/2-UseMemo';
import ModuloDoisExemploTresCompleto from '@/pages/ModuleTwo/Completos/3-UseDeferredValue';
import ModuloDoisExemploQuatroCompleto from '@/pages/ModuleTwo/Completos/4-UseTransition';
import ModuloDoisExemploCincoCompleto from '@/pages/ModuleTwo/Completos/5-forwardRefAndUseImperativeHandle';
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
      Page: ModuloDoisExemploUm,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_ONE,
    },
    {
      Page: ModuloDoisExemploDois,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_TWO,
    },
    {
      Page: ModuloDoisExemploTres,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_THREE,
    },
    {
      Page: ModuloDoisExemploQuatro,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_FOUR,
    },
    {
      Page: ModuloDoisExemploCinco,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_FIVE,
    },
    {
      Page: ModuloDoisExemploUmCompleto,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_ONE_COMPLETED,
    },
    {
      Page: ModuloDoisExemploDoisCompleto,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_TWO_COMPLETED,
    },
    {
      Page: ModuloDoisExemploTresCompleto,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_THREE_COMPLETED,
    },
    {
      Page: ModuloDoisExemploQuatroCompleto,
      path: ApplicationRoutes.MODULE_TWO_EXAMPLE_FOUR_COMPLETED,
    },
    {
      Page: ModuloDoisExemploCincoCompleto,
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
