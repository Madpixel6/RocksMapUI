import * as React from "react";
import { Route, Switch } from "react-router-dom";

export const Routes = (
    <Switch>
        <Route exact={true} path="/signin" component={SignIn} />
        <Route exact={true} path="/logout" component={Logout} />
        <Route exact={true} path="/logout/callback" component={LogoutCallback} />
        <Route exact={true} path="/register" component={Register} />
        <Route path="/" component={PublicPage} />
    </Switch>
);