import AsyncStorageLib from "@react-native-async-storage/async-storage";
import React, { useState } from "react";

type User = null | { username: string };

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const [user, setUser] = useState<User>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const user = { username: "John Doe" };
          setUser(user);
          AsyncStorageLib.setItem("user", JSON.stringify(user))
            .then(() => {
              console.log("user saved");
            })
            .catch((err) => {
              console.log(err);
            });
        },
        logout: () => {
          AsyncStorageLib.removeItem("user");
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
