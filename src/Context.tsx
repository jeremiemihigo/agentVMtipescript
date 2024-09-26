/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, ReactNode } from "react";
import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import { lien_socket } from "./Static/static";

// Types
interface User {
  codeAgent: string;
  nom: string;
}

interface AppState {
  user: {
    user: User;
  };
}

interface ContextProps {
  socket: Socket | null;
}

interface ContexteAllProps {
  children: ReactNode;
}

// Context
export const CreateContexte = createContext<ContextProps | undefined>(
  undefined
);

const ContexteAll: React.FC<ContexteAllProps> = ({ children }) => {
  const [socket, setSocket] = React.useState<Socket | null>(null);
  const user = useSelector((state: AppState) => state?.user.user);

  React.useEffect(() => {
    setSocket(io(lien_socket));
  }, []);

  React.useEffect(() => {
    if (socket && user) {
      const data = {
        codeAgent: user.codeAgent,
        nom: user.nom,
      };
      socket.emit("newUser", data);
    }
  }, [socket, user]);

  return (
    <CreateContexte.Provider value={{ socket }}>
      {children}
    </CreateContexte.Provider>
  );
};

export default ContexteAll;
