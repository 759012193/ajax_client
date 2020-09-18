import React from 'react'

import {NavLink} from 'react-router-dom'

// 引入静态文件
import new_ico from './../static/images/new_ico.png'

export default class TopLink extends React.Component{
    render() {
        return(
            <div id="headerbar">
                <div className="clearfix" id="header">
                    <div className="logo">
                        <NavLink className="logo-img" to={"/"} />
                    </div>
                    <div className="menu_nav">
                        <ul className="navs clearfix">
                            <li><NavLink to={"/"}>首页</NavLink></li>
                            <li><NavLink to={"/res"} activeClassName="on">幼教资源</NavLink></li>
                            <li><NavLink to={"/job"} activeClassName="on">职场人生</NavLink></li>
                            <li><NavLink to={"/activities"}  activeClassName="on">活动专区</NavLink></li>
                            <li>
                                <NavLink to={"/live"}  activeClassName="on">直播课堂</NavLink>
                                <img src={new_ico} className="new_nav" alt={""}/>
                            </li>
                            <li><NavLink to={"/user"}  activeClassName="on">个人中心</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
