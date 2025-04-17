import { useForm, FormProvider } from 'react-hook-form';
import InputEmail from './InputEmail';
import InputSenha from './InputSenha';
import {Button} from "@/components/ui/button.tsx";

interface IDadosFormulario {
  email: string;
  senha: string;
}

function Cadastro() {
  const methods = useForm<IDadosFormulario>();

  const onSubmit = (dadosDoFormulario: IDadosFormulario) => {
    console.log(dadosDoFormulario);
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col items-center justify-center h-screen">
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 items-center justify-center w-[500px] p-5 border-2 border-solid border-gray-100 rounded-2xl"
          >
          <h1>Exemplo com useFormContext</h1>
          <InputEmail />
          <InputSenha />
          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </FormProvider>
  );
}

export default Cadastro;
