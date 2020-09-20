import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {message,  Modal} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';


import {getUser, checkLogout, removeUser} from '../api/userApi'

export default class TopNav extends Component{
    constructor(props){
        super(props);

        this.state = {
            is_show_xcx: false, // 小程序显示和隐藏
            is_show_chat: false, // 二维码显示和隐藏

            // 获取用户信息
            user_name: getUser().user_name
        }
    }

    // 退出登录
    logOut = (e)=>{
        e.preventDefault();
        Modal.confirm({
            title: '确认退出吗?',
            icon: <ExclamationCircleOutlined />,
            content: '不退出可以不可以?',
            okText: '确认',
            cancelText: '取消',
            onOk: ()=>{
                checkLogout().then((result)=>{
                    if(result && result.status === 1){
                        // 清空本地缓存
                        removeUser();
                        message.success(result.msg);
                        // 刷新页面
                        window.location.reload();
                    }else {
                        message.error('服务器内部出现问题~');
                    }
                }).catch((error)=>{
                    message.error(error.msg);
                })
            }
        });
    };

    render() {
        const {is_show_xcx, is_show_chat, user_name} = this.state;
        console.log(user_name);
        return (
            <div id="web-headbar">
                <div className="web-head">
                    <div className="mobile-app">
                        <div className="app_l">
                            <Link to={"/"} className="app">今日幼教</Link>
                        </div>
                        <div
                            className="app_l"
                            onMouseOver={()=>{this.setState({is_show_xcx: true})}}
                            onMouseOut={()=>{this.setState({is_show_xcx: false})}}
                        >
                            <a className="app">今日小记者小程序</a>
                            <div className="app-box" style={{display: is_show_xcx ? '' : 'none'}}>
                                <p>扫一扫，关注我吧！</p>
                                <div className="xcx-er" />
                            </div>
                        </div>
                        <div
                            className="app_r"
                            onMouseOver={()=>{this.setState({is_show_chat: true})}}
                            onMouseOut={()=>{this.setState({is_show_chat: false})}}
                        >
                            <a className="weixin">幼教三六五微信公众平台</a>
                            <div className="app-box weixin-box" style={{display: is_show_chat ? '' : 'none'}}>
                                <p>扫一扫，关注我吧！</p>
                                <div className="weixin-er" />
                            </div>
                        </div>
                    </div>
                    {
                        user_name ? (
                                <div className="head-tool">
                                    <div className="toolbox">
                                        <div className="toolbox-simple">
                                            欢迎 <span style={{color: 'red'}}>{user_name}</span>
                                        </div>
                                    </div>
                                    <div className="line">|</div>
                                    <div className="toolbox">
                                        <div className="toolbox-simple ">
                                            <a onClick={(e)=>this.logOut(e)} className="toolbox-one-link">退出登录</a>
                                        </div>
                                    </div>
                                </div>
                            ) :
                            (
                                <div className="head-tool">
                                    <div className="toolbox">
                                        <div className="toolbox-simple">
                                            <Link className="toolbox-one-link" to={"/login"}>登录</Link>
                                        </div>
                                    </div>
                                    <div className="line">|</div>
                                    <div className="toolbox">
                                        <div className="toolbox-simple ">
                                            <Link to={"/reg"} className="toolbox-one-link">免费注册</Link>
                                        </div>
                                    </div>
                                </div>
                        )
                    }

                </div>
            </div>
        )
    }
}