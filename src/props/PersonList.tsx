import React, { FC } from "react";

interface IPersonList {
  list: {
    first: string;
    last: string;
  }[];
}

export const PersonList: FC<IPersonList> = (props: IPersonList) => {
  return (
    <div>
      <h2>PersonList</h2>
      {props.list.map((user) => (
        <div key={user.first}>
          {user.first} {user.last}
        </div>
      ))}
    </div>
  );
};
