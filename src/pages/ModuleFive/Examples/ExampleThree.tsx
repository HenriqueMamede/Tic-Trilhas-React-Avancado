import InputPersonalizado from "./components/InputPersonalizado";
import { Button } from "@/components/ui/button";

export interface IDadosFormulario {
  inputPersonalizado: string;
}

function FormularioUseController() {
  const onSubmit = (dadosDoFormulario: IDadosFormulario) => {
    console.log(dadosDoFormulario);
  };

  return (
    <div className="flex items-center justify-center h-screen gap-4">
      {/* Componente de input personalizado controlado pelo React Hook Form */}    
      <InputPersonalizado />
      <Button type="submit" className="cursor-pointer">Enviar</Button>
    </div>
  );
}

export default FormularioUseController;
