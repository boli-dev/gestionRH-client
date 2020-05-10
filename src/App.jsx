import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Default/Home";
import OfferDetails from "./pages/Default/OfferDetails";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/offre-emploi/:id" component={OfferDetails} />
    </Switch>
  );
};

export default App;
