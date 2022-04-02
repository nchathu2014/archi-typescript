import { FC } from "react";

interface IChildrenOneDemo {
  children: string;
}
export const ChildrenOneDemo: FC<IChildrenOneDemo> = (
  props: IChildrenOneDemo
) => {
  return <div>{props.children}</div>;
};
