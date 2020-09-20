import React, {Component} from 'react';

import resource_con_pic_1 from './../../../static/images/resource_con_pic_1.jpg'
import activities_con_pic_1 from './../../../static/images/activities_con_pic_1.jpg'
import lives_con_pic_1 from './../../../static/images/lives_con_pic_1.jpg'
import subscribe_ico from './../../../static/images/subscribe_ico.png'
import joblife_con_other_avatar from './../../../static/images/joblife_con_other_avatar.png'

export default class UserFav extends Component{
    render() {
        return (
            <div className="member_right">
                <div className="member_right_title">
                    已收藏的资源
                </div>
                <div className="member_right_content">
                    <div className="resource_con">
                        <a href="#">
                            <div className="resource_con_pic">
                                <img src={resource_con_pic_1}/>
                            </div>
                            <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                        </a>
                    </div>
                </div>

                <div className="member_right_title">
                    已收藏的活动
                </div>
                <div className="member_right_content">
                    <div className="activities_con">
                        <a href="#">
                            <div className="activities_con_pic">
                                <img src={activities_con_pic_1}/>
                            </div>
                            <div className="activities_con_title">黄埔军校7天军事体验营（广州)</div>
                            <div className="activities_con_other">
                                <span className="activities_con_other_date">活动时间：2018年7月1日</span>
                                <span className="activities_con_other_price">￥199</span>
                            </div>
                            <div className="activities_con_tags">
                                <span className="activities_con_tag">体验军旅</span>
                                <span className="activities_con_tag">军事拓展</span>
                                <span className="activities_con_tag">实弹射击</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="member_right_title">
                    已收藏的直播
                </div>
                <div className="member_right_content">
                    <div className="lives_con">
                        <a href="#">
                            <div className="lives_con_pic">
                                <img src={lives_con_pic_1}/>
                            </div>
                            <div className="lives_con_title">母亲情绪平和是对孩子最好的教育</div>
                            <div className="lives_con_other">
                                <span className="lives_con_other_date">7月24日16:00直播</span>
                                <span className="lives_con_other_subscribe">订阅</span>
                                <span className="lives_con_other_subscribe_ico">
                                    <img src={subscribe_ico}/>
                                </span>
                            </div>
                            <div className="lives_con_tags">
                                <span className="lives_con_tags_avatar">
                                    <img src={joblife_con_other_avatar}/>
                                </span>
                                <span className="lives_con_tags_teacher">来自：刘晶波教授</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}