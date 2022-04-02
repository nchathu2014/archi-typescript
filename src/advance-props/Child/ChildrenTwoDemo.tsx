import { FC } from "react";

interface IChildrenTwoDemo {
  children: React.ReactNode;
}

export const ChildrenTwoDemo: FC<IChildrenTwoDemo> = (
  props: IChildrenTwoDemo
) => {
  return <div>{props.children}</div>;
};
