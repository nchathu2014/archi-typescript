import { FC } from "react";

type CustomButtonProps = {
  varient: "primary" | "secondary";
} & React.ComponentProps<"button">;

export const CustomButton: FC<CustomButtonProps> = ({
  varient,
  children,
  ...rest
}: CustomButtonProps) => {
  return (
    <div>
      <h2>Wrapping HTML Elements</h2>
      <button className={`class-${varient}`} {...rest}>
        {children}
      </button>
    </div>
  );
};
