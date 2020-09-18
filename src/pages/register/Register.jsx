import React from 'react'

import {Link} from 'react-router-dom'
import {message} from 'antd'

// 引入接口文件
import {getPhoneCode} from './../../api/userApi'
import {regNewUser}from './../../api/userApi'

// 引入组件
import TopNav from './../../components/TopNav'
import Footer from './../../components/Footer'

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowCodeBtn: true, // 是否显示获取验证码按钮
            countDown: 60 // 记录倒计时
        };

        // 创建ref
        this.userPhoneRef = React.createRef();
    }

    /*
     获取短信验证码
     */
    getPhoneCode = () => {
        // 1. 验证手机号码的合法性
        const user_phone = this.userPhoneRef.current.value;
        if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(user_phone)) {
           message.error('输入的手机号码不正确!');
           return;
        }

        // 2. 处理按钮的显示和隐藏
        this.setState({
            isShowCodeBtn: !this.state.isShowCodeBtn
        });

        // 3. 倒计时
        let tempCountDown = this.state.countDown;
        this.intervalId = setInterval(()=>{
            tempCountDown--;
            // 3.1 更新状态机
            this.setState({
                countDown: tempCountDown
            });
            // 3.2 倒计时结束
            if(tempCountDown === 0){
                // 清除定时器
                clearInterval(this.intervalId);
                // 更新状态机
                this.setState({
                    isShowCodeBtn: true,
                    countDown: 60
                })
            }
        }, 1000);

        // 4. 发起网络请求
        getPhoneCode(user_phone).then((result)=>{
            if(result && result.status ===1){
                message.success({
                    content: `[引擎计划] 短信验证码: ${result.data.code}, 30分钟内有效!`,
                    duration: 5
                })
            }
        }).catch((error)=>{
            console.log(error);
        });
    };
    

    render() {
        const {isShowCodeBtn, countDown} = this.state;
        return (
            <>
                {/*头部*/}
                <TopNav/>
                {/*logo*/}
                <div id="headerbar">
                    <div className="clearfix" id="header">
                        <div className="logo">
                            <Link className="logo-img" to={"/"}/>
                        </div>
                        <div className="search">
                        </div>
                        <div className="teltime">
                            <div className="work-tel">400-100-5678</div>
                            <div className="work-time">周一至周日 8:00-18:00</div>
                        </div>
                    </div>
                </div>
                {/*中间内容*/}
                <div className="mainwraper">
                    <div id="reg_bg">
                        <div className="zczx">
                            <form action="" method="post">
                                <ul className="user-zc">
                                    <dt>
                                        欢迎您注册网站会员，如果您已有账户，则直接
                                        <Link to={"/login"} className="bluefont">登录</Link>
                                    </dt>
                                    <li style={{borderBottom: '2px solid #3793f8'}}>
                                        <span className="zc-hm">会 员 名</span>
                                        <span className="SignFlow-accountSeperator">&nbsp;</span>
                                        <input name="user_name" id="user_name" type="text"
                                               placeholder="会员名应为小写字母(a-z)、数字(0-9)组合"
                                               className="zc-qsr" required/>
                                    </li>
                                    <li>
                                        <span className="zc-hm">登录密码</span>
                                        <span className="SignFlow-accountSeperator">&nbsp;</span>
                                        <input name="user_password" id="user_password" type="password"
                                               placeholder="请输入您的密码" className="zc-qsr2"/>
                                    </li>
                                    <li>
                                        <span className="zc-hm">确认密码</span>
                                        <span className="SignFlow-accountSeperator">&nbsp;</span>
                                        <input type="password" name="c_password" id="c_password"
                                               placeholder="请重复输入您的密码" className="zc-qsr2"/>
                                    </li>
                                    <li>
                                        <span className="zc-hm">手机号码</span>
                                        <span className="SignFlow-accountSeperator">&nbsp;</span>
                                        <input
                                            ref={this.userPhoneRef}
                                            name="user_phone"
                                            id="user_phone"
                                            type="text"
                                            placeholder="请输入手机号码"
                                            className="zc-qsr"
                                            required/>
                                    </li>
                                    <li>
                                        <span className="zc-hm">验 证 码</span>
                                        <span className="SignFlow-accountSeperator">&nbsp;</span>
                                        <input name="phone_code" id="phone_code" type="text"
                                               placeholder="请输入 6 位短信验证码" className="zc-qsr2 m-code"/>
                                        <span className="SignFlow-accountSeperator">&nbsp;</span>
                                        {/*获取短信验证码*/}
                                        <button
                                            type="button"
                                            id="send_scode"
                                            className="zphone"
                                            style={{display: isShowCodeBtn ? '' : 'none'}}
                                            onClick={this.getPhoneCode}
                                        >
                                            获取短信验证码
                                        </button>
                                        {/*倒计时*/}
                                        <button
                                            type="button"
                                            id="send_scode"
                                            className="zphone"
                                            disabled
                                            style={{color: 'gray', display: isShowCodeBtn ? 'none' : ''}}
                                        >
                                            剩余{countDown}S
                                        </button>
                                    </li>
                                    <dd style={{textAlign: "center"}}>
                                        <button type="submit" className="zc-rw" id="btn_submit" name="submit"
                                                value="立即注册" disabled="">立即注册
                                        </button>
                                    </dd>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
                {/*尾部*/}
                <Footer/>
            </>
        )
    }
}

export default Register;
