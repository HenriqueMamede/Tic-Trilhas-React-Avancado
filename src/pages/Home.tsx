const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-6">
      <div className="text-center text-white max-w-2xl p-8 bg-opacity-80 rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Bem-vindo ao Curso de React Avançado
        </h1>
        <p className="text-lg font-light mb-4">
          Parabéns por iniciar esta jornada no curso de React Avançado do
          programa TIC em Trilhas! Estamos empolgados em acompanhar seu
          progresso e ajudá-lo a se tornar um expert em React.
        </p>
        <p className="text-lg font-light">
          Prepare-se para aprender novos conceitos e técnicas avançadas. Vamos
          juntos nessa jornada!
        </p>
      </div>
    </div>
  );
};

export default Home;
