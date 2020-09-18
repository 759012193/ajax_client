import React from 'react'
import {Link} from 'react-router-dom'

export default class TopNav extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            is_show_xcx: false, // 是否展示小程序
            is_show_chat: false, // 是否展示公众号
        }
    }


    render() {
        const {is_show_xcx, is_show_chat} = this.state;
        return(
            <div id="web-headbar">
                <div className="web-head">
                    <div className="mobile-app">
                        <div className="app_l">
                            <Link to={"/"} className="app">今日幼教</Link>
                        </div>
                        <div className="app_l"
                             onMouseOver={()=>{this.setState({is_show_xcx: true})}}
                             onMouseOut={()=>{this.setState({is_show_xcx: false})}}
                        >
                            <a href="javascript:void(0)" className="app">今日小记者小程序</a>
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
                            <a href="javascript:void(0)" className="weixin">幼教三六五微信公众平台</a>
                            <div className="app-box weixin-box" style={{display: is_show_chat ? '' : 'none'}}>
                                <p>扫一扫，关注我吧！</p>
                                <div className="weixin-er" />
                            </div>
                        </div>
                    </div>
                    <div className="head-tool">
                        <div className="toolbox">
                            <div className="toolbox-simple">
                                <Link className="toolbox-one-link" to={"/login"}>登录</Link>
                            </div>
                        </div>
                        <div className="line">|</div>
                        <div className="toolbox">
                            <div className="toolbox-simple ">
                                <Link className="toolbox-one-link"  to={"/reg"}>免费注册</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
