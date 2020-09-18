import React from 'react'

// 引入路由组件
import {Switch, Route} from 'react-router-dom'

// 引入公共组件
import TopNav from './../../components/TopNav'
import TopLink from './../../components/TopLink'
import Footer from './../../components/Footer'

// 引入路由页面
import LifeJobList from './pages/LifeJobList'
import LifeJobDetail from './pages/LifeJobDetail'

class LifeJob extends React.Component{
    render() {
        return (
            <>
                <TopNav />
                <TopLink />
                <Switch>
                    <Route path={"/job/detail"} component={LifeJobDetail}/>
                    <Route path={"/job"} component={LifeJobList}/>
                </Switch>
                <Footer />
            </>
        )
    }
}

export default LifeJob;
