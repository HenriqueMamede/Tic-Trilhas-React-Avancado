function InputPersonalizado() {
  return (
    <div className="flex flex-col gap-2 w-[300px]">
      <label className="text-gray-800">
        Nome <span className="text-red-500">*</span>
      </label>
      <input
        className="h-10 w-full p-2 rounded-md border border-gray-400"
      />
      <p className="text-red-500 text-sm">error</p>
    </div>
  );
}

export default InputPersonalizado;