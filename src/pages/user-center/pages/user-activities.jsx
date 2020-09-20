import React, {Component} from 'react';

import activities_con_pic_1 from './../../../static/images/activitie_con_pic_1.jpg'

export default class UserActivities extends Component{
    render() {
        return (
            <div className="member_right">
                <div className="member_right_title">
                    已购买的活动
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
                    <div
                        className="page-boxs clearfix"
                        style={{marginLeft: '290px', marginBottom: '50px'}}
                    >
                        <div className="page-listx">
                            <ul id="yw0" className="yiiPager">
                                <li className="page"><a href="#">首页</a></li>
                                <li className="page"><a href="#">上一页</a></li>
                                <li className="page selected"><b>1</b></li>
                                <li className="page"><a href="#">2</a></li>
                                <li className="page"><a href="#">3</a></li>
                                <li className="page"><a href="#">4</a></li>
                                <li className="page"><a href="#">5</a></li>
                                <li className="page"><a href="#">下一页</a></li>
                                <li className="page"><a href="#">末页</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}