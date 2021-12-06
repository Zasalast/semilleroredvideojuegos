import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../scenes/About/About";
import Contact from "../scenes/Contact";
import Home from "../scenes/Home/Home";
import HomeWeb from "../scenes/W3d/Home/Home";
import LoginWeb from "../scenes/W3d/Login/Login";
import SignInWeb from "../scenes/W3d/SignIn/SignIn";
import GuideOnLook from "../scenes/Guide/GuideOnLook";
import GuideCreateUser from "../scenes/Guide/GuideCreateUser";
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
          <Route exact path="/guideonlook" component={GuideOnLook} />
          <Route exact path="/guidecreateuser" component={GuideCreateUser} />
          <Route exact path="/mv" component={MisionVision} />
          <Route exact path="/services" component={ServiceOffered} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/w3d" component={HomeWeb} />
          <Route exact path="/w3d/login" component={LoginWeb} />
          <Route exact path="/w3d/sign-in" component={SignInWeb} />
          <Route component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layouts>
    </BrowserRouter>
  );
};
export default AppRouter;
