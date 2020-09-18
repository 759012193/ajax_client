import React from 'react'

// 引入静态资源
import joblife_con_pic_1 from './../../../static/images/joblife_con_pic_1.jpg'
import joblife_con_other_avatar from './../../../static/images/joblife_con_other_avatar.png'

export default class HomeJob extends React.Component{
    render() {
        return (
            <div className="content content01 clearfix">
                <div className="mainbox clearfix">
                    <div className="lm_title">职场人生</div>
                    <div className="lm_desc" />
                    <div className="lm_more">
                        <span className="lm_more_ico" />
                        <span className="lm_mores">查看更多</span>
                    </div>
                    <div className="joblife_cons">
                        <div className="joblife_con">
                            <a href="#">
                                <div className="joblife_con_pic">
                                    <img src={joblife_con_pic_1} />
                                </div>
                                <div className="joblife_con_title">国家统计局权威发布统计信息</div>
                                <div className="joblife_con_other">
                                    <span className="joblife_con_other_avatar">
                                        <img src={joblife_con_other_avatar}/>
                                    </span>
                                    <span className="joblife_con_other_teacher">来自：刘晶波教授</span>
                                </div>
                            </a>
                        </div>
                        <div className="joblife_con">
                            <a href="#">
                                <div className="joblife_con_pic">
                                    <img src={joblife_con_pic_1} />
                                </div>
                                <div className="joblife_con_title">国家统计局权威发布统计信息</div>
                                <div className="joblife_con_other">
                                    <span className="joblife_con_other_avatar">
                                        <img src={joblife_con_other_avatar}/>
                                    </span>
                                    <span className="joblife_con_other_teacher">来自：刘晶波教授</span>
                                </div>
                            </a>
                        </div>
                        <div className="joblife_con">
                            <a href="#">
                                <div className="joblife_con_pic">
                                    <img src={joblife_con_pic_1} />
                                </div>
                                <div className="joblife_con_title">国家统计局权威发布统计信息</div>
                                <div className="joblife_con_other">
                                    <span className="joblife_con_other_avatar">
                                        <img src={joblife_con_other_avatar}/>
                                    </span>
                                    <span className="joblife_con_other_teacher">来自：刘晶波教授</span>
                                </div>
                            </a>
                        </div>
                        <div className="joblife_con">
                            <a href="#">
                                <div className="joblife_con_pic">
                                    <img src={joblife_con_pic_1} />
                                </div>
                                <div className="joblife_con_title">国家统计局权威发布统计信息</div>
                                <div className="joblife_con_other">
                                    <span className="joblife_con_other_avatar">
                                        <img src={joblife_con_other_avatar}/>
                                    </span>
                                    <span className="joblife_con_other_teacher">来自：刘晶波教授</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
