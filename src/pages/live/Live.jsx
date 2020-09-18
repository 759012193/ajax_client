import React from 'react'

// 引入公共组件
import TopNav from './../../components/TopNav'
import TopLink from './../../components/TopLink'
import Footer from './../../components/Footer'

import lives_con_pic_1 from './../../static/images/lives_con_pic_1.jpg'
import subscribe_ico from './../../static/images/subscribe_ico.png'
import joblife_con_other_avatar from './../../static/images/joblife_con_other_avatar.png'


class LifeJob extends React.Component{
    render() {
        return (
            <>
                <TopNav />
                <TopLink />
                <div className="mainwraper">
                    <div className="content content01x clearfix">
                        <div className="mainbox clearfix">
                            <div className="catalog__category-container--3Wcuj">
                                <ul>
                                    <li className="catalog__category-item--1xiWA">
                                        <div className="catalog__category-name-container--31pkW w100">
                                            <span>直播时间：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW w1180">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="catalog__active--LrCRX">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">即将播出</a>
                                                </li>
                                                <li>
                                                    <a className="">正在播出</a>
                                                </li>
                                                <li>
                                                    <a className="">已经播出</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="catalog__category-item--1xiWA">
                                        <div className="catalog__category-name-container--31pkW w100">
                                            <span>适用人群：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW w1180">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="">全部</a>
                                                </li>
                                                <li>
                                                    <a className="catalog__active--LrCRX">园长</a>
                                                </li>
                                                <li>
                                                    <a className="">教师</a>
                                                </li>
                                                <li>
                                                    <a className="">家长</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="catalog__category-item--1xiWA bottom-border">
                                        <div className="catalog__category-name-container--31pkW w100">
                                            <span>内容主题：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW w1180">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="catalog__active--LrCRX">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">园所管理</a>
                                                </li>
                                                <li>
                                                    <a className="">园所理念</a>
                                                </li>
                                                <li>
                                                    <a className="">园所发展</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="catalog__category-item--1xiWA bottom-border" style={{display: 'none'}}>
                                        <div className="catalog__category-name-container--31pkW w100">
                                            <span>内容主题：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW w1180">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="catalog__active--LrCRX">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">教学经验</a>
                                                </li>
                                                <li>
                                                    <a className="">职业发展</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="catalog__category-item--1xiWA bottom-border" style={{display: 'none'}}>
                                        <div className="catalog__category-name-container--31pkW w100">
                                            <span>内容主题：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW w1180">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="catalog__active--LrCRX">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">科学育儿</a>
                                                </li>
                                                <li>
                                                    <a className="">家园合力解决突出问题</a>
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
                                        <a className="">免费</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sort_right">共有<span className="lm_desc_num">6594</span>堂直播课程，供您选择学习</div>
                            <div className="lives_cons no_top">
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
                                                <img src={subscribe_ico}/></span>
                                        </div>
                                        <div className="lives_con_tags">
                                            <span className="lives_con_tags_avatar">
                                                <img src={joblife_con_other_avatar}/>
                                            </span>
                                            <span className="lives_con_tags_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
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
                                                <img src={subscribe_ico}/></span>
                                        </div>
                                        <div className="lives_con_tags">
                                            <span className="lives_con_tags_avatar">
                                                <img src={joblife_con_other_avatar}/>
                                            </span>
                                            <span className="lives_con_tags_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
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
                                                <img src={subscribe_ico}/></span>
                                        </div>
                                        <div className="lives_con_tags">
                                            <span className="lives_con_tags_avatar">
                                                <img src={joblife_con_other_avatar}/>
                                            </span>
                                            <span className="lives_con_tags_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
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
                                                <img src={subscribe_ico}/></span>
                                        </div>
                                        <div className="lives_con_tags">
                                            <span className="lives_con_tags_avatar">
                                                <img src={joblife_con_other_avatar}/>
                                            </span>
                                            <span className="lives_con_tags_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
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
                                                <img src={subscribe_ico}/></span>
                                        </div>
                                        <div className="lives_con_tags">
                                            <span className="lives_con_tags_avatar">
                                                <img src={joblife_con_other_avatar}/>
                                            </span>
                                            <span className="lives_con_tags_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
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
                                                <img src={subscribe_ico}/></span>
                                        </div>
                                        <div className="lives_con_tags">
                                            <span className="lives_con_tags_avatar">
                                                <img src={joblife_con_other_avatar}/>
                                            </span>
                                            <span className="lives_con_tags_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
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
                                                <img src={subscribe_ico}/></span>
                                        </div>
                                        <div className="lives_con_tags">
                                            <span className="lives_con_tags_avatar">
                                                <img src={joblife_con_other_avatar}/>
                                            </span>
                                            <span className="lives_con_tags_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
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
                                                <img src={subscribe_ico}/></span>
                                        </div>
                                        <div className="lives_con_tags">
                                            <span className="lives_con_tags_avatar">
                                                <img src={joblife_con_other_avatar}/>
                                            </span>
                                            <span className="lives_con_tags_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
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
                                                <img src={subscribe_ico}/></span>
                                        </div>
                                        <div className="lives_con_tags">
                                            <span className="lives_con_tags_avatar">
                                                <img src={joblife_con_other_avatar}/>
                                            </span>
                                            <span className="lives_con_tags_teacher">来自：刘晶波教授</span>
                                        </div>
                                    </a>
                                </div>
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
                                                <img src={subscribe_ico}/></span>
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
                <Footer />
            </>
        )
    }
}

export default LifeJob;
