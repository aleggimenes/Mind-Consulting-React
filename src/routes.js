import React from 'react';
import Footer from './footer';
import Header from './header';
import Login from './login/index';
import Home from './home/index';
import ListUsers from './dashboard/adm/listUsers/index';
import EditUser from './dashboard/user/editUser/index';
import EditUserId from './dashboard/adm/editUserId/index';
import DashBoardUser from './dashboard/user/dashBoardUser/index';
import DashBoardAdm from './dashboard/adm/dashBoardAdm/index';
import { Register } from './register';
import { AdminRoute, UserRoute } from './routesTypes';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/login" exact={true} component={Login} />
      <Route path="/register" exact={true} component={Register} />
      <Route path="/editarUser" exact={true} component={EditUser} />
      <Route path="/dashboardUser" exact={true} component={DashBoardUser} />
      <Route path="/dashboardAdm" exatc={true} component={DashBoardAdm} />
      <Route path="/editUserId" exatc={true} component={EditUserId} />
      <Route path="/list" exact={true} component={ListUsers} />
      <Route path="/" exact={true} component={Home} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
