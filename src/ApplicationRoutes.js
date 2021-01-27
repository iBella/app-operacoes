import React from "react";
import { Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CheckExecucaoPage } from "./pages/CheckExecucaoPage";
import { PanelPage } from "./pages/PanelPage";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={HomePage} />
    <Route path="/painel" exact component={PanelPage} />
    <Route path="/checkExecucao" exact component={CheckExecucaoPage} />
  </>
);