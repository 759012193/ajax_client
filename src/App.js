import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/login/login'
import Register from './pages/register/register'
import Home from './pages/home/home'
import Resource from './pages/resource/resource'
import LifeJob from './pages/lifejob/lifeJob'
import Activities from './pages/activities/Activities'
import Live from './pages/live/live'
import UserCenter from './pages/user-center/user-center'
import NotFound from './pages/not-found/not-found'
import Forget from './pages/forget/forget'

class App extends React.Component{
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/reg"} component={Register}/>
                    <Route path={"/forget"} component={Forget}/>
                    <Route path={"/resource"} component={Resource}/>
                    <Route path={"/job"} component={LifeJob}/>
                    <Route path={"/activities"} component={Activities}/>
                    <Route path={"/live"} component={Live}/>
                    <Route path={"/user"} component={UserCenter}/>
                    <Route path={"/"} component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        )
    }
}


export default App;
