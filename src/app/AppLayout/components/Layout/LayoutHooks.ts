import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";

export const useGetLayoutNavigationItems = () => {
  const moduloUm = {
    link: RotasAplicacao.MODULO_UM,
    label: "Módulo 1",
  };

  const moduloDois = {
    link: RotasAplicacao.MODULO_DOIS,
    label: "Módulo 2",
  };

  const moduloTres = {
    link: RotasAplicacao.MODULO_TRES,
    label: "Módulo 3",
  };

  const moduloQuatro = {
    link: RotasAplicacao.MODULO_QUATRO,
    label: "Módulo 4",
  };

  const moduloCinco = {
    link: RotasAplicacao.MODULO_CINCO,
    label: "Módulo 5",
  };

  const moduloSeis = {
    link: RotasAplicacao.MODULO_SEIS,
    label: "Módulo 6",
  };

  const moduloSete = {
    link: RotasAplicacao.MODULO_SETE,
    label: "Módulo 7",
  };

  const moduloOito = {
    link: RotasAplicacao.MODULO_OITO,
    label: "Módulo 8",
  };

  const navigationItems = [];

  navigationItems.push(
    moduloUm,
    moduloDois,
    moduloTres,
    moduloQuatro,
    moduloCinco,
    moduloSeis,
    moduloSete,
    moduloOito
  );

  return navigationItems;
};
