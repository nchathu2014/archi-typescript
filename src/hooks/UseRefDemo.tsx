import { FC, useEffect, useRef } from "react";

export const UseRefDemo: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type={"text"} placeholder={"Enter something"} />
    </div>
  );
};
