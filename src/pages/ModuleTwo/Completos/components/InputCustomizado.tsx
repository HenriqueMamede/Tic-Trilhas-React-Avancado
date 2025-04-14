import { forwardRef, HTMLProps, useImperativeHandle, useRef } from "react";

type InputCustomizadoProps = HTMLProps<HTMLInputElement>

export interface InputCustomizadoHandle {
  focusInput: () => void;
  limparInput: () => void;
}

const InputCustomizado = forwardRef<InputCustomizadoHandle, InputCustomizadoProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Expondo os métodos para o componente pai
  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current?.focus();
    },
    limparInput() {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },
  }));

  return <input ref={inputRef} type="text" {...props} />;
});

export default InputCustomizado;
