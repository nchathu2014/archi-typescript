import { FC } from "react";

type User = {
  id: number;
  first: string;
  last: string;
};

interface IListProps<T> {
  items: T[];
  onClick: (value: T) => void;
}

export const List = <T extends User | string | number>({
  items,
  onClick,
}: IListProps<T>) => {
  return (
    <div>
      <h2>List</h2>

      {items.map((item, key) => {
        if (typeof item === "object") {
          return (
            <div key={item.id} onClick={() => onClick(item)}>
              {item.first} {item.last}
            </div>
          );
        } else {
          return (
            <div key={item} onClick={() => onClick(item)}>
              {item}
            </div>
          );
        }
      })}
    </div>
  );
};
