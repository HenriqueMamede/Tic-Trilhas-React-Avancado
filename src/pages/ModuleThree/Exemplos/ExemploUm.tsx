import ComponenteDemorado from "@/pages/ModuleThree/components/ComponenteDemorado.tsx";

function ExemploUm() {
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen'>
      <h1 className='text-2xl'>Exemplo sem React.lazy</h1>

      <div className='p-4 bg-gray-300 rounded-lg'>
        <ComponenteDemorado />
      </div>
    </div>
  );
}

export default ExemploUm;
