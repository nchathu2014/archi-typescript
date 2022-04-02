import { FC, useState, ChangeEvent, useContext } from "react";
import { AppContext, IAppContext } from "./../App";

export enum Status {
  Good = "I am in Good",
  Better = "I am Better",
  Best = "I am the Best",
}

/* interface IProps {
  name?: string;
  age?: number;
  email?: string;
  status?: Status;
} */

export const Product: FC = () => {
  const contextData: IAppContext = useContext(AppContext);
  const { age, email, name, status } = contextData;

  const [country, setCountry] = useState<string | null>("Sri Lanka");

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>
    setCountry(event.target.value);

  //Type
  type Name = "Nuwan" | "Chathuranga";
  const nameForTypes: Name = "Nuwan";

  return (
    <div>
      {name}-{age}-{email}
      <input type={"text"} onChange={handleOnChange} />
      <h2>
        {country}-{status}
      </h2>
    </div>
  );
};
