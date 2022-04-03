import { FC } from "react";

export interface IProfileProps {
  name: string;
}
export const Profile: FC<IProfileProps> = ({ name }: IProfileProps) => {
  return <div>Private Profile Component | {name}</div>;
};
