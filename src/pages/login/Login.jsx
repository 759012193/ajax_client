import React from 'react'

import {Link} from 'react-router-dom'

// 引入组件
import TopNav from './../../components/TopNav'
import Footer from './../../components/Footer'

class Login extends React.Component{
    render() {
        return (
           <>
              {/*头部*/}
              <TopNav />
              {/*logo*/}
               <div id="headerbar">
                   <div className="clearfix" id="header">
                       <div className="logo">
                           <Link className="logo-img" to="/" />
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
                   <div className="login_bg">
                       <div className="dl-center">
                           <div className="dlc-right">
                               <ul className="sjyzm" id="pm">
                                   <form name="formLogin" method="post" action="/web/user/login">
                                       <dt id="sm" />
                                       <li>
                                           欢迎登录<Link to="/reg" className="reds2">立即注册</Link>
                                       </li>
                                       <dd>
                                           <input name="username" type="text" id="username" placeholder="手机号码" className="phone-num" />
                                       </dd>
                                       <dd>
                                           <input type="password" id="password" name="password" placeholder="登录密码" className="phone-mima" />
                                       </dd>
                                       <li>
                                           <input type="checkbox" name="cookietime" value="1" id="cookietime" checked="" className="zddl2" />
                                               <span className="zddl">&nbsp;&nbsp;记住我</span>
                                           <Link to="/" className="forgetpas">忘记密码?</Link>
                                       </li>
                                       <li>
                                           <button type="submit" name="submit" id="loginsubmit" value="立即登录"
                                                   className="ljdl">立即登录
                                           </button>
                                       </li>
                                   </form>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
              {/*尾部*/}
              <Footer />
           </>
        )
    }
}

export default Login;
