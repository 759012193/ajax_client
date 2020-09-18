import React from 'react'

// 引入路由组件
import {Switch, Route} from 'react-router-dom'

// 引入公共组件
import TopNav from './../../components/TopNav'
import TopLink from './../../components/TopLink'
import Footer from './../../components/Footer'

// 引入路由页面
import ResourceList from './pages/ResourceList'
import ResourceDetail from './pages/ResourceDetail'

class Resource extends React.Component{
    render() {
        return (
            <>
               <TopNav />
               <TopLink />
                <Switch>
                    <Route path={"/res/detail"} component={ResourceDetail}/>
                    <Route path={"/res"} component={ResourceList}/>
                </Switch>
               <Footer />
            </>
        )
    }
}

export default Resource;
