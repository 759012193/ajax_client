import React from 'react'

// 引入路由组件
import {Switch, Route} from 'react-router-dom'

// 引入公共组件
import TopNav from './../../components/TopNav'
import TopLink from './../../components/TopLink'
import Footer from './../../components/Footer'

// 引入路由页面
import ActivitiesList from './pages/ActivitiesList'
import ActivitiesDetail from './pages/ActivitiesDetail'

class LifeJob extends React.Component{
    render() {
        return (
            <>
                <TopNav />
                <TopLink />
                <Switch>
                    <Route path={"/activities/detail"} component={ActivitiesDetail}/>
                    <Route path={"/activities"} component={ActivitiesList}/>
                </Switch>
                <Footer />
            </>
        )
    }
}

export default LifeJob;
