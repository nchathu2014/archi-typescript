import React from "react";

type Props = {
  title: string;
  color?: string;
};
const Header = (props: Props) => {
  return (
    <div>
      <h1 style={{ color: props.color ? props.color : "blue" }}>
        {props.title}
      </h1>
    </div>
  );
};

export default Header;
