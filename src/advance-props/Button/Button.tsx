import { FC, MouseEvent } from "react";

interface IButton {
  handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
}
export const Button: FC<IButton> = ({ handleClick }: IButton) => {
  return (
    <div>
      <button onClick={(event) => handleClick(event, 1)}>Click Me</button>
    </div>
  );
};
