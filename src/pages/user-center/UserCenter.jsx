import React from 'react'
// 引入路由组件
import {Switch, Route, NavLink} from 'react-router-dom'

// 引入公共组件
import TopNav from './../../components/TopNav'
import TopLink from './../../components/TopLink'
import Footer from './../../components/Footer'

// 引入页面组件
import UserAccount from './pages/UserAccount'
import UserActivities from './pages/UserActivities'
import UserFav from './pages/UserFav'
import UserLive from './pages/UserLive'
import UserResource from './pages/UserResource'
import NotFound from './../../pages/notFound/NotFound'

// 引入静态资源
import member_avatar from './../../static/images/member_avatar.png'
import vip_ico from './../../static/images/vip_ico.png'

import myresource_ico_ing from './../../static/images/myresource_ico_ing.png'
import myresource_ico from './../../static/images/myresource_ico.png'
import myactivity_ico from './../../static/images/myactivity_ico.png'
import myactivity_ico_ing from './../../static/images/myactivity_ico_ing.png'
import mylive_ico from './../../static/images/mylive_ico.png'
import mylive_ico_ing from './../../static/images/mylive_ico_ing.png'
import myfav_ico from './../../static/images/myfav_ico.png'
import myfav_ico_ing from './../../static/images/myfav_ico_ing.png'
import myaccount_ico from './../../static/images/myaccount_ico.png'
import myaccount_ico_ing from './../../static/images/myaccount_ico_ing.png'

class UserCenter extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            // 标记选中的菜单url
            matchUrl: '/user'
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        // 获取路由对应的路径
        const pathName = this.props.history.location.pathname;
        // console.log(pathName, nextState);
        // 更新状态机
       if(pathName !== nextState.matchUrl){
            this.setState({
                matchUrl: pathName
            })
       }
    }

    render() {
        const {matchUrl} = this.state;
        return (
            <>
                <TopNav/>
                <TopLink/>
                {/*个人介绍*/}
                <div className="mainwraper">
                    <div className="member_bg">
                        <div className="member_top">
                            <div className="member_avatar">
                                <img src={member_avatar} className="member_avatar_img"/>
                                <img src={vip_ico} className="vip_ico"/>
                            </div>
                            <div className="member_div_one">
                                <div className="member_name">D_Chow</div>
                                <div className="member_money">学习币：88</div>
                                <div className="member_desc">一句话介绍一下自己吧，让别人更了解你</div>
                            </div>
                        </div>
                    </div>
                    <div className="member_nav">
                        <div className="member_nav_content"/>
                    </div>
                    <div className="member_content">
                        <div className="member_menus">
                            <NavLink to={"/user"}>
                                <div className={matchUrl === "/user" ? "member_menu_on" : "member_menu"}>
                                    <img src={matchUrl === "/user" ? myresource_ico_ing: myresource_ico}/>
                                    <span className="member_menu_name">我的资源</span>
                                    <span className="member_menu_ico">></span>
                                </div>
                            </NavLink>
                            <NavLink to={"/user/activities"}>
                                <div className={matchUrl === "/user/activities" ? "member_menu_on" : "member_menu"}>
                                    <img src={matchUrl === "/user/activities" ? myactivity_ico_ing : myactivity_ico}/>
                                    <span className="member_menu_name">我的活动</span>
                                    <span className="member_menu_ico">></span>
                                </div>
                            </NavLink>
                            <NavLink to={"/user/live"}>
                                <div className={matchUrl === "/user/live" ? "member_menu_on" : "member_menu"}>
                                    <img src={matchUrl === "/user/live" ? mylive_ico_ing : mylive_ico} />
                                    <span className="member_menu_name">我的直播</span>
                                    <span className="member_menu_ico">></span>
                                </div>
                            </NavLink>
                            <NavLink to={"/user/fav"}>
                                <div className={matchUrl === "/user/fav" ? "member_menu_on" : "member_menu"}>
                                    <img src={matchUrl === "/user/fav" ? myfav_ico_ing: myfav_ico} />
                                    <span className="member_menu_name">我的收藏</span>
                                    <span className="member_menu_ico">></span>
                                </div>
                            </NavLink>
                            <NavLink  to={"/user/account"}>
                                <div className={matchUrl === "/user/account" ? "member_menu_on" : "member_menu"}>
                                    <img src={matchUrl === "/user/account" ? myaccount_ico_ing: myaccount_ico} />
                                    <span className="member_menu_name">我的账户</span>
                                    <span className="member_menu_ico">></span>
                                </div>
                            </NavLink>
                        </div>

                        {/*中间的内容*/}
                        <Switch>
                            <Route path={"/user/account"} component={UserAccount}/>
                            <Route path={"/user/activities"} component={UserActivities}/>
                            <Route path={"/user/fav"} component={UserFav}/>
                            <Route path={"/user/live"} component={UserLive}/>
                            <Route path={"/user"} component={UserResource}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </>
    )
    }
    }

    export default UserCenter;
