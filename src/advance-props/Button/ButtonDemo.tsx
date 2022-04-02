import { FC } from "react";
import { Button } from "./Button";

export const ButtonDemo: FC = () => {
  return (
    <div>
      <Button
        handleClick={(event, id) => console.log("Button Clicked", event, id)}
      />
    </div>
  );
};
