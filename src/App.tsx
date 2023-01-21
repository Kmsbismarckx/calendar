import { Layout } from "antd";
import React, { createContext, FC, useContext, useState } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import "./index.css";

export type AppContext = {
  modal: boolean;
  setModal: any;
};

export const useAppContext = () => useContext(appContext);
const appContext = createContext<AppContext>({} as AppContext);

const App: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const appContextInitialValue: AppContext = {
    modal: isModalOpen,
    setModal: setIsModalOpen,
  };

  return (
    <Layout className="main">
      <appContext.Provider value={appContextInitialValue}>
        <Navbar />
        <Layout.Content className="h100">
          <AppRouter />
        </Layout.Content>
      </appContext.Provider>
    </Layout>
  );
};

export default App;
