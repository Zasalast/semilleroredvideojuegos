import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../scenes/About";
import Contact from "../scenes/Contact";
import Home from "../scenes/Home/Home";
import Guide from "../scenes/Guide";
import MisionVision from "../scenes/misionvision/MisionVision";
import ServiceOffered from "../scenes/servicesOffered/ServicesOffered";
import Team from "../scenes/Team";
import Layouts from "./Layout";
import NotFound from "./NotFound";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layouts>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/guide" component={Guide} />
          <Route exact path="/mv" component={MisionVision} />
          <Route exact path="/services" component={ServiceOffered} />
          <Route exact path="/team" component={Team} />
          <Route component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layouts>
    </BrowserRouter>
  );
};
export default AppRouter;
