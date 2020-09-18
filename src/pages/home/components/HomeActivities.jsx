import React from 'react'

// 引入静态资源
import activitie_con_pic_1 from './../../../static/images/activitie_con_pic_1.jpg'
import like_ico from './../../../static/images/like_ico.png'
import signup_ico from './../../../static/images/signup_ico.png'

export default class HomeJob extends React.Component{
    render() {
        return (
            <div className="content content01 clearfix">
                <div className="mainbox clearfix">
                    <div className="lm_title">精彩活动</div>
                    <div className="lm_desc" />
                    <div className="lm_more">
                        <span className="lm_more_ico"/>
                        <span className="lm_mores">查看更多</span>
                    </div>
                    <div className="activitie_cons">
                        <div className="activitie_con">
                            <a href="#">
                                <div className="activitie_con_pic">
                                    <img src={activitie_con_pic_1}/>
                                </div>
                                <div className="activitie_con_title">黄埔军校7天军事体验营（广州 ）</div>
                                <div
                                    className="activitie_con_desc">塑造坚强、刚毅、守纪、紧张、服从的军人品质，培养讲形象、爱卫生、懂礼貌、自立能力，养成军人般良好的行为习惯及日常生活习惯。
                                </div>
                                <div className="activitie_con_other">
                                    <span className="resource_con_other_likeico">
                                        <img src={like_ico}/>
                                    </span>
                                    <span className="resource_con_other_like">关注</span>
                                    <span className="resource_con_other_signup">报名</span>
                                    <span className="resource_con_other_signupico">
                                        <img src={signup_ico}/></span>
                                </div>
                            </a>
                        </div>
                        <div className="activitie_con">
                            <a href="#">
                                <div className="activitie_con_pic">
                                    <img src={activitie_con_pic_1}/>
                                </div>
                                <div className="activitie_con_title">黄埔军校7天军事体验营（广州 ）</div>
                                <div
                                    className="activitie_con_desc">塑造坚强、刚毅、守纪、紧张、服从的军人品质，培养讲形象、爱卫生、懂礼貌、自立能力，养成军人般良好的行为习惯及日常生活习惯。
                                </div>
                                <div className="activitie_con_other">
                                    <span className="resource_con_other_likeico">
                                        <img src={like_ico}/>
                                    </span>
                                    <span className="resource_con_other_like">关注</span>
                                    <span className="resource_con_other_signup">报名</span>
                                    <span className="resource_con_other_signupico">
                                        <img src={signup_ico}/></span>
                                </div>
                            </a>
                        </div>
                        <div className="activitie_con">
                            <a href="#">
                                <div className="activitie_con_pic">
                                    <img src={activitie_con_pic_1}/>
                                </div>
                                <div className="activitie_con_title">黄埔军校7天军事体验营（广州 ）</div>
                                <div
                                    className="activitie_con_desc">塑造坚强、刚毅、守纪、紧张、服从的军人品质，培养讲形象、爱卫生、懂礼貌、自立能力，养成军人般良好的行为习惯及日常生活习惯。
                                </div>
                                <div className="activitie_con_other">
                                    <span className="resource_con_other_likeico">
                                        <img src={like_ico}/>
                                    </span>
                                    <span className="resource_con_other_like">关注</span>
                                    <span className="resource_con_other_signup">报名</span>
                                    <span className="resource_con_other_signupico">
                                        <img src={signup_ico}/></span>
                                </div>
                            </a>
                        </div>
                        <div className="activitie_con">
                            <a href="#">
                                <div className="activitie_con_pic">
                                    <img src={activitie_con_pic_1}/>
                                </div>
                                <div className="activitie_con_title">黄埔军校7天军事体验营（广州 ）</div>
                                <div
                                    className="activitie_con_desc">塑造坚强、刚毅、守纪、紧张、服从的军人品质，培养讲形象、爱卫生、懂礼貌、自立能力，养成军人般良好的行为习惯及日常生活习惯。
                                </div>
                                <div className="activitie_con_other">
                                    <span className="resource_con_other_likeico">
                                        <img src={like_ico}/>
                                    </span>
                                    <span className="resource_con_other_like">关注</span>
                                    <span className="resource_con_other_signup">报名</span>
                                    <span className="resource_con_other_signupico">
                                        <img src={signup_ico}/></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
