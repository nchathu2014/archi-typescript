import React from "react";

interface IProps {
  name: string;
  age: number;
  email?: string;
}

export const Person = (props: IProps) => {
  const { name, age, email } = props;
  return (
    <div>
      <div>
        {name}-{age}-{email}
      </div>
    </div>
  );
};
