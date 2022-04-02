import React, { FC } from "react";

interface IStatusDemo {
  status: "loading" | "success" | "error";
}

export const StatusDemo: FC<IStatusDemo> = ({ status }: IStatusDemo) => {
  let message: string | null = null;
  if (status === "loading") message = "Loading...";
  if (status === "success") message = "Successful :)";
  if (status === "error") message = "Error :(";
  return (
    <div>
      <p>MESSAGE: {message}</p>
    </div>
  );
};
