import React, {Component} from 'react';
import {HashRouter, Switch, Route, NavLink} from 'react-router-dom'
import { message } from 'antd'

import TopNav from "../../components/top-nav";
import Footer from "../../components/footer";
import Share from "../../components/share";
import TopLink from "../../components/top-link";

import UserAccount from './pages/user-account'
import UserActivities from './pages/user-activities'
import UserFav from './pages/user-fav'
import UserLive from './pages/user-live'
import UserResource from './pages/user-resource'
import NotFound from './../not-found/not-found'

import UploadImg from './components/like-upload-img'

import {
    isLogin,
    getUser,
    getUserInfo,
    updateUserIcon,
    updateUserIntro
} from "../../api/userApi";



import vip_ico from "../../static/images/vip_ico.png";
import myresource_ico from "../../static/images/myresource_ico.png";
import myresource_ico_ing from "../../static/images/myresource_ico_ing.png";
import myactivity_ico from "../../static/images/myactivity_ico.png";
import myactivity_ico_ing from "../../static/images/myactivity_ico_ing.png";
import mylive_ico from "../../static/images/mylive_ico.png";
import mylive_ico_ing from "../../static/images/mylive_ico_ing.png";
import myfav_ico from "../../static/images/myfav_ico.png";
import myfav_ico_ing from "../../static/images/myfav_ico_ing.png";
import myaccount_ico from "../../static/images/myaccount_ico.png";
import myaccount_ico_ing from "../../static/images/myaccount_ico_ing.png";



export default class UserCenter extends Component{
    constructor(props) {
        super(props);

        this.state = {
             // tag
            matchUrl: '/user',

            user_name: '',
            user_count_money: 0,
            user_icon: '', // 用户的头像
            user_intro: '', // 个人简介
        }
    }

    componentDidMount() {
        if(!isLogin()){ // 没有登录
            this.props.history.replace('/login');
        }

        // 获取最新的用户信息
        this.loadNewUserInfo();
    }

    loadNewUserInfo(){
        getUserInfo(getUser().id).then((result)=>{
            if(result && result.status === 1){
                this.setState({
                    user_name: result.data[0].user_name,
                    user_count_money: result.data[0].user_count_money,
                    user_icon: result.data[0].user_icon,
                    user_intro: result.data[0].user_intro
                })
            }
        }).catch((error)=>{
            message.error(error.msg);
        })
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const pathname = this.props.history.location.pathname;
        // console.log(pathname);
        if(pathname !== nextState.matchUrl){
            this.setState({
                matchUrl:  pathname
            })
        }
    }


    render() {
        const {matchUrl, user_icon, user_intro, user_name, user_count_money} = this.state;
        return (
            <div>
                <TopNav/>
                <TopLink/>
                {/*个人介绍*/}
                <div className="member_bg">
                    <div className="member_top">
                        <div className="member_avatar">
                            <UploadImg
                                upLoadBtnTitle={'上传您的头像'}
                                upLoadName={'client_img'}
                                upImage={user_icon}
                                upLoadAction={'/web/upload_img'}
                                successCallBack={(url)=>{
                                    // 更新头像的存储信息
                                   //  console.log(url);
                                    updateUserIcon(getUser().id, url).then((result)=>{
                                        console.log(result);
                                    }).catch((error)=>{
                                        message.error(error.msg)
                                    });
                                }}
                            />
                            <img src={vip_ico} className="vip_ico" alt=""/>
                        </div>
                        <div className="member_div_one">
                            <div className="member_name">{user_name}</div>
                            <div className="member_money">学习币：{user_count_money}</div>
                            <div className="member_desc">
                                <input style={{color:"red"}}
                                   type="text"
                                   name="user_intro"
                                   placeholder={"一句话介绍一下自己吧，让别人更了解你"}
                                   value={user_intro}
                                   onChange={(e)=>{
                                       this.setState({
                                           [e.target.name]: e.target.value
                                       })
                                   }}
                                   onBlur={()=>{
                                       updateUserIntro(getUser().id, user_intro).then((result)=>{
                                           console.log(result);
                                       }).catch((error)=>{
                                           message.error(error.msg)
                                       })
                                   }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="member_nav">
                    <div className="member_nav_content"/>
                </div>
                <div className="member_content">
                    <div className="member_menus">
                        <NavLink to={"/user"}>
                            <div className={matchUrl === "/user" ? "member_menu_on": "member_menu"}>
                                <img src={matchUrl === "/user" ? myresource_ico_ing: myresource_ico}/>
                                <span className="member_menu_name">我的资源</span>
                                <span className="member_menu_ico">&gt;</span>
                            </div>
                        </NavLink>
                        <NavLink to={"/user/activities"}>
                            <div className={matchUrl === "/user/activities" ? "member_menu_on": "member_menu"}>
                                <img src={matchUrl === "/user/activities" ? myactivity_ico_ing: myactivity_ico}/>
                                <span className="member_menu_name">我的活动</span><span
                                className="member_menu_ico">&gt;</span>
                            </div>
                        </NavLink>
                        <NavLink to={"/user/live"}>
                            <div className={matchUrl === "/user/live" ? "member_menu_on": "member_menu"}>
                                <img src={matchUrl === "/user/live" ? mylive_ico_ing: mylive_ico}/>
                                <span className="member_menu_name">我的直播</span>
                                <span className="member_menu_ico">&gt;</span>
                            </div>
                        </NavLink>
                        <NavLink to={"/user/fav"}>
                            <div className={matchUrl === "/user/fav" ? "member_menu_on": "member_menu"}>
                                <img src={matchUrl === "/user/fav" ? myfav_ico_ing: myfav_ico}/>
                                <span className="member_menu_name">我的收藏</span>
                                <span className="member_menu_ico">&gt;</span>
                            </div>
                        </NavLink>
                        <NavLink to={"/user/account"}>
                            <div  className={matchUrl === "/user/account" ? "member_menu_on": "member_menu"}>
                                <img src={matchUrl === "/user/account" ? myaccount_ico_ing: myaccount_ico} />
                                <span className="member_menu_name">我的账户</span>
                                <span className="member_menu_ico">&gt;</span>
                            </div>
                        </NavLink>
                    </div>
                    {/*中间的主题内容*/}
                     <HashRouter>
                         <Switch>
                             <Route path={"/user/account"} component={UserAccount}/>
                             <Route path={"/user/activities"} component={UserActivities}/>
                             <Route path={"/user/fav"} component={UserFav}/>
                             <Route path={"/user/live"} component={UserLive}/>
                             <Route path={"/user"} component={UserResource}/>
                             <Route component={NotFound}/>
                         </Switch>
                     </HashRouter>
                </div>
                <Footer/>
                <Share/>
            </div>
    )
    }
    }