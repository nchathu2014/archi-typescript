import { FC, createContext, useState } from "react";
import { AuthUser } from "./IUser";

interface IUserContext {
  children: React.ReactNode;
}

export interface UserContext {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

export const UserContextProvider = createContext<UserContext | null>(null);

export const UserContext: FC<IUserContext> = ({ children }: IUserContext) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContextProvider.Provider value={{ user, setUser }}>
      {children}
    </UserContextProvider.Provider>
  );
};
