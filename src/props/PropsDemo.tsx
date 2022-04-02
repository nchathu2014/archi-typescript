import { FC } from "react";

interface IPropsDemo {
  name: string;
  count: number;
  isLogged: boolean;
}

export const PropsDemo: FC<IPropsDemo> = ({
  name,
  count,
  isLogged,
}: IPropsDemo) => {
  return (
    <div>
      <h2>
        {isLogged
          ? `Welcome! ${name}, ${count} times to TypeScript World :D`
          : `Welcome guest`}
      </h2>
    </div>
  );
};
