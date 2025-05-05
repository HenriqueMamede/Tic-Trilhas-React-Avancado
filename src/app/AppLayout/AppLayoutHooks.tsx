import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";

import Home from "@/pages/Home";
import ModuloUm from "@/pages/Modulo1";
import ModuloDois from "@/pages/Modulo2";
import ModuloDoisExemploUm from '@/pages/Modulo2/Exemplos/Exemplo1';
import ModuloDoisExemploDois from '@/pages/Modulo2/Exemplos/Exemplo2';
import ModuloDoisExemploTres from '@/pages/Modulo2/Exemplos/Exemplo3';
import ModuloDoisExemploQuatro from '@/pages/Modulo2/Exemplos/Exemplo4';
import ModuloDoisExemploCinco from '@/pages/Modulo2/Exemplos/Exemplo5';
import ModuloTres from "@/pages/Modulo3";
import ModuloTresExemploUm from "@/pages/Modulo3/Exemplos/Exemplo1";
import ModuloTresExemploDois from "@/pages/Modulo3/Exemplos/Exemplo2";
import ModuloTresExemploTres from "@/pages/Modulo3/Exemplos/Exemplo3";
import ModuloTresExemploQuatro from "@/pages/Modulo3/Exemplos/Exemplo4";
import ModuloQuatro from "@/pages/Modulo4";
import ModuloQuatroExemploUm from "@/pages/Modulo4/Exemplos/Exemplo1";
import ModuloQuatroExemploDois from "@/pages/Modulo4/Exemplos/Exemplo2";
import ModuloCinco from "@/pages/Modulo5";
import ModuloCincoExemploUm from "@/pages/Modulo5/Examples/Exemplo1";
import ModuloCincoExemploDois from "@/pages/Modulo5/Examples/Exemplo2";
import ModuloCincoExemploTres from "@/pages/Modulo5/Examples/Exemplo3";
import ModuloCincoExemploQuatro from "@/pages/Modulo5/Examples/Exemplo4";
import ModuloSeis from "@/pages/Modulo6";
import ModuloSete from "@/pages/Modulo7";


export function useAppRoutes() {
  const rotas = [
    {
      Pagina: Home,
      caminho: RotasAplicacao.HOME,
    },
    {
      Pagina: ModuloUm,
      caminho: RotasAplicacao.MODULO_UM,
    },
    {
      Pagina: ModuloDois,
      caminho: RotasAplicacao.MODULO_DOIS,
    },
    {
      Pagina: ModuloDoisExemploUm,
      caminho: RotasAplicacao.MODULO_DOIS_EXEMPLO_UM,
    },
    {
      Pagina: ModuloDoisExemploDois,
      caminho: RotasAplicacao.MODULO_DOIS_EXEMPLO_DOIS,
    },
    {
      Pagina: ModuloDoisExemploTres,
      caminho: RotasAplicacao.MODULO_DOIS_EXEMPLO_TRES,
    },
    {
      Pagina: ModuloDoisExemploQuatro,
      caminho: RotasAplicacao.MODULO_DOIS_EXEMPLO_QUATRO,
    },
    {
      Pagina: ModuloDoisExemploCinco,
      caminho: RotasAplicacao.MODULO_DOIS_EXEMPLO_CINCO,
    },
    {
      Pagina: ModuloTres,
      caminho: RotasAplicacao.MODULO_TRES,
    },
    {
      Pagina: ModuloTresExemploUm,
      caminho: RotasAplicacao.MODULO_TRES_EXEMPLO_UM,
    },
    {
      Pagina: ModuloTresExemploDois,
      caminho: RotasAplicacao.MODULO_TRES_EXEMPLO_DOIS,
    },
    {
      Pagina: ModuloTresExemploTres,
      caminho: RotasAplicacao.MODULO_TRES_EXEMPLO_TRES,
    },
    {
      Pagina: ModuloTresExemploQuatro,
      caminho: RotasAplicacao.MODULO_TRES_EXEMPLO_QUATRO,
    },
    {
      Pagina: ModuloQuatro,
      caminho: RotasAplicacao.MODULO_QUATRO,
    },
    {
      Pagina: ModuloQuatroExemploUm,
      caminho: RotasAplicacao.MODULO_QUATRO_EXEMPLO_UM,
    },
    {
      Pagina: ModuloQuatroExemploDois,
      caminho: RotasAplicacao.MODULO_QUATRO_EXEMPLO_DOIS,
    },
    {
      Pagina: ModuloCinco,
      caminho: RotasAplicacao.MODULO_CINCO,
    },
    {
      Pagina: ModuloCincoExemploUm,
      caminho: RotasAplicacao.MODULO_CINCO_EXEMPLO_UM,
    },
    {
      Pagina: ModuloCincoExemploDois,
      caminho: RotasAplicacao.MODULO_CINCO_EXEMPLO_DOIS,
    },
    {
      Pagina: ModuloCincoExemploTres,
      caminho: RotasAplicacao.MODULO_CINCO_EXEMPLO_TRES,
    },
    {
      Pagina: ModuloCincoExemploQuatro,
      caminho: RotasAplicacao.MODULO_CINCO_EXEMPLO_QUATRO,
    },
    {
      Pagina: ModuloSeis,
      caminho: RotasAplicacao.MODULO_SEIS,
    },
    {
      Pagina: ModuloSete,
      caminho: RotasAplicacao.MODULO_SETE,
    },
  ];

  return rotas;
}
