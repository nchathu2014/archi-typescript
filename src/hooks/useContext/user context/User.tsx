import { FC, useContext } from "react";
import { UserContextProvider, UserContext } from "./UserContext";

export const User: FC = () => {
  const contextData = useContext<UserContext | null>(UserContextProvider);

  const handleLogIn = () => {
    if (contextData)
      contextData.setUser({
        name: "Nuwan",
        email: "nuwan@gmail.com",
      });
  };

  const handleLogOut = () => {
    if (contextData) contextData.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      <hr />
      {contextData?.user ? (
        <div>
          <div>NAME:{contextData?.user?.name}</div>
          <div>EMAIL:{contextData?.user?.email}</div>
        </div>
      ) : (
        <div>Guest User</div>
      )}
    </div>
  );
};
