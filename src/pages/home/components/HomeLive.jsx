import React from 'react'

// 引入静态资源
import live_con_pic_1 from './../../../static/images/live_con_pic_1.jpg'
import live_con_other_avatar from './../../../static/images/live_con_other_avatar.png'
import subscribe_ico from './../../../static/images/subscribe_ico.png'

export default class HomeLive extends React.Component{
    render() {
        return (
            <div className="content content01 clearfix">
                <div className="mainbox clearfix">
                    <div className="lm_title">直播课堂</div>
                    <div className="lm_desc" />
                    <div className="lm_more">
                        <span className="lm_more_ico"/>
                        <span className="lm_mores">查看更多</span>
                    </div>
                    <div className="live_cons">
                        <div className="live_con">
                            <a href="#">
                                <div className="live_con_pic">
                                    <img src={live_con_pic_1}/>
                                    <div className="live_con_top">
                                        <div className="live_con_title">7月24日16:00直播</div>
                                        <div className="live_con_desc">母亲情绪平和是对孩子最好的教育</div>
                                        <div className="live_con_other">
                                    <span className="live_con_other_avatar">
                                        <img src={live_con_other_avatar}/></span>
                                            <span className="live_con_other_teacher">刘晶波教授</span>
                                        </div>
                                    </div>
                                    <div className="live_con_bottom">
                                        <span className="live_con_bottom_subscribe_ico">
                                            <img src={subscribe_ico}/></span>
                                        <span className="live_con_bottom_subscribe">订&nbsp;&nbsp;阅</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="live_con">
                            <a href="#">
                                <div className="live_con_pic">
                                    <img src={live_con_pic_1}/>
                                    <div className="live_con_top">
                                        <div className="live_con_title">7月24日16:00直播</div>
                                        <div className="live_con_desc">母亲情绪平和是对孩子最好的教育</div>
                                        <div className="live_con_other">
                                    <span className="live_con_other_avatar">
                                        <img src={live_con_other_avatar}/></span>
                                            <span className="live_con_other_teacher">刘晶波教授</span>
                                        </div>
                                    </div>
                                    <div className="live_con_bottom">
                                        <span className="live_con_bottom_subscribe_ico">
                                            <img src={subscribe_ico}/></span>
                                        <span className="live_con_bottom_subscribe">订&nbsp;&nbsp;阅</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="live_con">
                            <a href="#">
                                <div className="live_con_pic">
                                    <img src={live_con_pic_1}/>
                                    <div className="live_con_top">
                                        <div className="live_con_title">7月24日16:00直播</div>
                                        <div className="live_con_desc">母亲情绪平和是对孩子最好的教育</div>
                                        <div className="live_con_other">
                                    <span className="live_con_other_avatar">
                                        <img src={live_con_other_avatar}/></span>
                                            <span className="live_con_other_teacher">刘晶波教授</span>
                                        </div>
                                    </div>
                                    <div className="live_con_bottom">
                                        <span className="live_con_bottom_subscribe_ico">
                                            <img src={subscribe_ico}/></span>
                                        <span className="live_con_bottom_subscribe">订&nbsp;&nbsp;阅</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="live_con">
                            <a href="#">
                                <div className="live_con_pic">
                                    <img src={live_con_pic_1}/>
                                    <div className="live_con_top">
                                        <div className="live_con_title">7月24日16:00直播</div>
                                        <div className="live_con_desc">母亲情绪平和是对孩子最好的教育</div>
                                        <div className="live_con_other">
                                    <span className="live_con_other_avatar">
                                        <img src={live_con_other_avatar}/></span>
                                            <span className="live_con_other_teacher">刘晶波教授</span>
                                        </div>
                                    </div>
                                    <div className="live_con_bottom">
                                        <span className="live_con_bottom_subscribe_ico">
                                            <img src={subscribe_ico}/></span>
                                        <span className="live_con_bottom_subscribe">订&nbsp;&nbsp;阅</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
