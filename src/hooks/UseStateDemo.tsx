import { FC, useState } from "react";

interface IUser {
  name?: string;
  email?: string;
}

export const UseStateDemo: FC<IUser> = (props: IUser) => {
  /*  const [user, setUser] = useState<IUser | null>(null); */
  const [user, setUser] = useState<IUser>({} as IUser);
  const handleLogIn = () => {
    setUser({
      name: "nuwan",
      email: "nuwan@gmail.com",
    });
  };

  const handleLogOut = () => {
    setUser({});
  };

  return (
    <div>
      <button onClick={handleLogIn}>Log-In</button>
      <button onClick={handleLogOut}>Log-Out</button>
      <hr />
      <p>Logged in user {user ? user.name : "Guest"}</p>
      <p> {user && user.email}</p>
    </div>
  );
};
