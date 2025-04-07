function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-90 p-6 border border-solid border-neutral-300 bg-neutral-50  rounded-lg">
      <p
        className="text-lg font-medium text-neutral-700"
        data-testid="sem-dados"
      >
        Não há dados para serem exibidos
      </p>
    </div>
  );
}

export default EmptyState;
