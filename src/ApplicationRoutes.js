import React from "react";
import { Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ExecutionCheckPage } from "./pages/ExecutionCheckPage";
import { PanelPage } from "./pages/PanelPage";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={HomePage} />
    <Route path="/panel" exact component={PanelPage} />
    <Route path="/checkExecucao" exact component={ExecutionCheckPage} />
  </>
);