import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Painel } from "./pages/Painel";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/painel" exact component={Painel} />
  </>
);