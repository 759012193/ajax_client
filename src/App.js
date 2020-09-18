import React from 'react';

import {HashRouter, Switch, Route} from 'react-router-dom'

// 引入一级页面
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import Resource from './pages/resource/Resource'
import LifeJob from './pages/lifejob/LifeJob'
import Activities from './pages/activities/Activities'
import Live from './pages/live/Live'
import UserCenter from './pages/user-center/UserCenter'
import NotFound from './pages/notFound/NotFound'


class App extends React.Component{
   render() {
      return (
          <HashRouter>
             <Switch>
                <Route  path={"/login"} component={Login}/>
                <Route  path={"/reg"} component={Register}/>
                <Route  path={"/res"} component={Resource}/>
                <Route  path={"/job"} component={LifeJob}/>
                <Route  path={"/activities"} component={Activities}/>
                <Route  path={"/live"} component={Live}/>
                <Route  path={"/user"} component={UserCenter}/>
                <Route exact path={"/"} component={Home}/>
                <Route component={NotFound}/>
             </Switch>
          </HashRouter>
      )
   }
}

export default App;
