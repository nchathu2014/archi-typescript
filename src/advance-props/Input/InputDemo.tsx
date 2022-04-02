import React, { FC, ChangeEvent } from "react";

interface IInputDemo {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputDemo: FC<IInputDemo> = (props: IInputDemo) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={props.value}
        onChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
};
