import { FC } from "react";

type CustomInputProps = {} & React.ComponentProps<"input">;

export const CustomInput: FC = (props: CustomInputProps) => {
  return <input {...props} />;
};
