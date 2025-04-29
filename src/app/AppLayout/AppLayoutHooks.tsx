import { ApplicationRoutes } from "@/enums/ApplicationRoutesEnums";

import Home from "@/pages/Home";
import ModuleOne from "@/pages/ModuleOne";
import ModuleTwo from "@/pages/ModuleTwo";
import ModuleThree from "@/pages/ModuleThree";
import ModuleFour from "@/pages/ModuleFour";
import ModuloCinco from "@/pages/ModuleFive";
import ModuloCincoExemploUm from "@/pages/ModuleFive/Exemplos/ExemploUm";
import ModuloCincoExemploDois from "@/pages/ModuleFive/Exemplos/ExemploDois";
import ModuloCincoExemploTres from "@/pages/ModuleFive/Exemplos/ExemploTres";
import ModuloCincoExemploQuatro from "@/pages/ModuleFive/Exemplos/ExemploQuatro";
import ModuloCincoExemploUmCompleto from "@/pages/ModuleFive/Completos/1-LoginYup";
import ModuloCincoExemploDoisCompleto from "@/pages/ModuleFive/Completos/2-FormularioCadastro";
import ModuloCincoExemploTresCompleto from "@/pages/ModuleFive/Completos/3-LoginUserController";
import ModuloCincoExemploQuatroCompleto from "@/pages/ModuleFive/Completos/4-ListaDeParticipantes";
import ModuloCincoExamploUseFormContext from "@/pages/ModuleFive/Completos/5-UseFormContext-Pai";
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
      Page: ModuloCincoExemploUmCompleto,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_ONE_COMPLETED,
    },
    {
      Page: ModuloCincoExemploDoisCompleto,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_TWO_COMPLETED,
    },
    {
      Page: ModuloCincoExemploTresCompleto,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_THREE_COMPLETED,
    },
    {
      Page: ModuloCincoExemploQuatroCompleto,
      path: ApplicationRoutes.MODULE_FIVE_EXAMPLE_FOUR_COMPLETED,
    },
    {
      Page: ModuloCincoExamploUseFormContext,
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
