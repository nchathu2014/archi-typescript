import { FC, ProfilerProps } from "react";
import { Login } from "./Login";
import { IProfileProps } from "./Profile";

interface IPrivateProps {
  isLoggedIn: boolean;
  component: React.ComponentType<IProfileProps>;
}

export const Private: FC<IPrivateProps> = ({
  isLoggedIn,
  component: Component,
}: IPrivateProps) => {
  if (isLoggedIn) {
    return <Component name={"Nuwan"} />;
  } else {
    return <Login />;
  }
};
