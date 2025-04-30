import { ApplicationRoutes } from "@/enums/ApplicationRoutesEnums";

import Home from "@/pages/Home";
import ModuleOne from "@/pages/ModuleOne";
import ModuleTwo from "@/pages/ModuleTwo";
import ModuloDoisExemploUm from '@/pages/ModuleTwo/Exemplos/ExemploUm';
import ModuloDoisExemploDois from '@/pages/ModuleTwo/Exemplos/ExemploDois';
import ModuloDoisExemploTres from '@/pages/ModuleTwo/Exemplos/ExemploTres';
import ModuloDoisExemploQuatro from '@/pages/ModuleTwo/Exemplos/ExemploQuatro';
import ModuloDoisExemploCinco from '@/pages/ModuleTwo/Exemplos/ExemploCinco';
import ModuleThree from "@/pages/ModuleThree";
import ModuloTresExemploUm from "@/pages/ModuleThree/Exemplos/ExemploUm";
import ModuloTresExemploDois from "@/pages/ModuleThree/Exemplos/ExemploDois";
import ModuloTresExemploTres from "@/pages/ModuleThree/Exemplos/ExemploTres";
import ModuloTresExemploQuatro from "@/pages/ModuleThree/Exemplos/ExemploQuatro";
import ModuleFour from "@/pages/ModuleFour";
import ModuloCinco from "@/pages/ModuleFive";
import ModuloCincoExemploUm from "@/pages/ModuleFive/Exemplos/ExemploUm";
import ModuloCincoExemploDois from "@/pages/ModuleFive/Exemplos/ExemploDois";
import ModuloCincoExemploTres from "@/pages/ModuleFive/Exemplos/ExemploTres";
import ModuloCincoExemploQuatro from "@/pages/ModuleFive/Exemplos/ExemploQuatro";
import ModuleSix from "@/pages/ModuleSix";
import ModuleSeven from "@/pages/ModuleSeven";
import ModuloQuatroPrimeiroExemplo from "@/pages/ModuleFour/Exemplos/PrimeiroExemplo";
import ModuloQuatroSegundoExemplo from "@/pages/ModuleFour/Exemplos/SegundoExemplo";

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
      Page: ModuleThree,
      path: ApplicationRoutes.MODULE_THREE,
    },
    {
      Page: ModuloTresExemploUm,
      path: ApplicationRoutes.MODULE_THREE_EXAMPLE_ONE,
    },
    {
      Page: ModuloTresExemploDois,
      path: ApplicationRoutes.MODULE_THREE_EXAMPLE_TWO,
    },
    {
      Page: ModuloTresExemploTres,
      path: ApplicationRoutes.MODULE_THREE_EXAMPLE_THREE,
    },
    {
      Page: ModuloTresExemploQuatro,
      path: ApplicationRoutes.MODULE_THREE_EXAMPLE_FOUR,
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
      Page: ModuloCinco,
      path: ApplicationRoutes.MODULE_FIVE,
    },
    {
      Page: ModuloCincoExemploUm,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_ONE,
    },
    {
      Page: ModuloCincoExemploDois,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_TWO,
    },
    {
      Page: ModuloCincoExemploTres,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_THREE,
    },
    {
      Page: ModuloCincoExemploQuatro,
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
