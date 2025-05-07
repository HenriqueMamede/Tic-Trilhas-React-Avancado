import { HTMLProps, useRef } from "react";

type InputCustomizadoProps = HTMLProps<HTMLInputElement>;

const InputCustomizado = (props: InputCustomizadoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return <input ref={inputRef} type="text" {...props} />;
};

export default InputCustomizado;
