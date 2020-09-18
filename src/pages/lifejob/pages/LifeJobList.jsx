import React from 'react'

import {Link} from 'react-router-dom'

import focus022 from "../../../static/images/focus022.jpg";
import joblife_con_pic_1 from "../../../static/images/joblife_con_pic_1.jpg";
import joblife_con_other_avatar from "../../../static/images/joblife_con_other_avatar.png";

class LifeJobList extends React.Component {
    render() {
        return (
            <>
                {/*顶部图片*/}
                <div className="mainWrap clearfix">
                    <div className="banner_pagex">
                        <ul className="banner_box">
                            <li className="one" style={{background: `url(${focus022}) no-repeat top center`}}>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*内容*/}
                <div className="mainwraper">
                    <div className="content content01x clearfix">
                        <div className="mainbox clearfix">
                            <div className="catalog__category-container--3Wcuj">
                                <ul>
                                    <li className="catalog__category-item--1xiWA">
                                        <div className="catalog__category-name-container--31pkW w100">
                                            <span>学前教师培训：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW w1180">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="catalog__active--LrCRX">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">学前教育发展最新趋势</a>
                                                </li>
                                                <li>
                                                    <a className="">学前教育基础理论</a>
                                                </li>
                                                <li>
                                                    <a className="">教育活动设计主要策略</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="catalog__category-item--1xiWA bottom-border">
                                        <div className="catalog__category-name-container--31pkW w100">
                                            <span>家园共育培训：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW w1180">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="catalog__active--LrCRX">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">幼小衔接</a>
                                                </li>
                                                <li>
                                                    <a className="">亲子活动案例</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="content content01y clearfix">
                        <div className="mainbox clearfix">
                            <div className="sort_title">
                                <span>排序：</span>
                            </div>
                            <div className="sort_conts">
                                <ul className="sort_conts_ul">
                                    <li>
                                        <a className="">最新</a>
                                    </li>
                                    <li>
                                        <a className="">人气</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sort_right">共有<span className="lm_desc_num">6594</span>篇文章，供您选择浏览</div>
                            <div className="joblife_cons no_top">
                                <div className="joblife_con">
                                    <Link to={"/job/detail"}>
                                        <div className="joblife_con_pic">
                                            <img src={joblife_con_pic_1}/>
                                        </div>
                                        <div className="joblife_con_title">国家统计局权威发布统计信息</div>
                                        <div className="joblife_con_other">
                                            <span className="joblife_con_other_avatar">
                                                <img src={joblife_con_other_avatar}/></span>
                                            <span className="joblife_con_other_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="joblife_con">
                                    <a href="resources_content.html">
                                        <div className="joblife_con_pic">
                                            <img src={joblife_con_pic_1}/>
                                        </div>
                                        <div className="joblife_con_title">国家统计局权威发布统计信息</div>
                                        <div className="joblife_con_other">
                                            <span className="joblife_con_other_avatar">
                                                <img src={joblife_con_other_avatar}/></span>
                                            <span className="joblife_con_other_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="joblife_con">
                                    <a href="resources_content.html">
                                        <div className="joblife_con_pic">
                                            <img src={joblife_con_pic_1}/>
                                        </div>
                                        <div className="joblife_con_title">国家统计局权威发布统计信息</div>
                                        <div className="joblife_con_other">
                                            <span className="joblife_con_other_avatar">
                                                <img src={joblife_con_other_avatar}/></span>
                                            <span className="joblife_con_other_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="joblife_con">
                                    <a href="resources_content.html">
                                        <div className="joblife_con_pic">
                                            <img src={joblife_con_pic_1}/>
                                        </div>
                                        <div className="joblife_con_title">国家统计局权威发布统计信息</div>
                                        <div className="joblife_con_other">
                                            <span className="joblife_con_other_avatar">
                                                <img src={joblife_con_other_avatar}/></span>
                                            <span className="joblife_con_other_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="joblife_con">
                                    <a href="resources_content.html">
                                        <div className="joblife_con_pic">
                                            <img src={joblife_con_pic_1}/>
                                        </div>
                                        <div className="joblife_con_title">国家统计局权威发布统计信息</div>
                                        <div className="joblife_con_other">
                                            <span className="joblife_con_other_avatar">
                                                <img src={joblife_con_other_avatar}/></span>
                                            <span className="joblife_con_other_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="joblife_con">
                                    <a href="resources_content.html">
                                        <div className="joblife_con_pic">
                                            <img src={joblife_con_pic_1}/>
                                        </div>
                                        <div className="joblife_con_title">国家统计局权威发布统计信息</div>
                                        <div className="joblife_con_other">
                                            <span className="joblife_con_other_avatar">
                                                <img src={joblife_con_other_avatar}/></span>
                                            <span className="joblife_con_other_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="joblife_con">
                                    <a href="resources_content.html">
                                        <div className="joblife_con_pic">
                                            <img src={joblife_con_pic_1}/>
                                        </div>
                                        <div className="joblife_con_title">国家统计局权威发布统计信息</div>
                                        <div className="joblife_con_other">
                                            <span className="joblife_con_other_avatar">
                                                <img src={joblife_con_other_avatar}/></span>
                                            <span className="joblife_con_other_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="joblife_con">
                                    <a href="resources_content.html">
                                        <div className="joblife_con_pic">
                                            <img src={joblife_con_pic_1}/>
                                        </div>
                                        <div className="joblife_con_title">国家统计局权威发布统计信息</div>
                                        <div className="joblife_con_other">
                                            <span className="joblife_con_other_avatar">
                                                <img src={joblife_con_other_avatar}/></span>
                                            <span className="joblife_con_other_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="joblife_con">
                                    <a href="resources_content.html">
                                        <div className="joblife_con_pic">
                                            <img src={joblife_con_pic_1}/>
                                        </div>
                                        <div className="joblife_con_title">国家统计局权威发布统计信息</div>
                                        <div className="joblife_con_other">
                                            <span className="joblife_con_other_avatar">
                                                <img src={joblife_con_other_avatar}/></span>
                                            <span className="joblife_con_other_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="page-boxs clearfix">
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
                </div>
            </>
        )
    }
}

export default LifeJobList;
