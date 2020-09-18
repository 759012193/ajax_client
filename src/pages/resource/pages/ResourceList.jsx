import React from 'react'

// 引入路由组件
import {Link} from 'react-router-dom'

// 引入静态资源
import banner from "../../../static/images/banner.jpg";
import resource_con_pic_1 from "../../../static/images/resource_con_pic_1.jpg";
import fav_ico_ed from "../../../static/images/fav_ico_ed.png";



class ResourceList extends React.Component{
    render() {
        return (
            <>
                <div className="mainWrap clearfix">
                    <div className="banner_pagex">
                        <ul className="banner_box">
                            <li className="one" style={{background: `url(${banner}) no-repeat top center` }}>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mainwraper">
                    {/*条件选择*/}
                    <div className="content content01x clearfix">
                        <div className="mainbox clearfix">
                            <div className="catalog__category-container--3Wcuj">
                                <ul>
                                    <li className="catalog__category-item--1xiWA">
                                        <div className="catalog__category-name-container--31pkW">
                                            <span>分类：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">教学活动小助手</a>
                                                </li>
                                                <li>
                                                    <a className="catalog__active--LrCRX">亲子小学堂 </a>
                                                </li>
                                                <li>
                                                    <a className="">培训教室</a>
                                                </li>
                                                <li>
                                                    <a className="">GT课程</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="catalog__category-item--1xiWA top-border">
                                        <div className="catalog__category-name-container--31pkW">
                                            <span>班级：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="catalog__active--LrCRX">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">托班</a>
                                                </li>
                                                <li>
                                                    <a className="">小班</a>
                                                </li>
                                                <li>
                                                    <a className="">中班</a>
                                                </li>
                                                <li>
                                                    <a className="">大班</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="catalog__category-item--1xiWA">
                                        <div className="catalog__category-name-container--31pkW">
                                            <span>领域：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="catalog__active--LrCRX">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">健康</a>
                                                </li>
                                                <li>
                                                    <a className="">语言</a>
                                                </li>
                                                <li>
                                                    <a className="">社会</a>
                                                </li>
                                                <li>
                                                    <a className="">科学</a>
                                                </li>
                                                <li>
                                                    <a className="">艺术</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="catalog__category-item--1xiWA">
                                        <div className="catalog__category-name-container--31pkW">
                                            <span>素材：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="catalog__active--LrCRX">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">教学设计</a>
                                                </li>
                                                <li>
                                                    <a className="">教学课件</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="catalog__category-item--1xiWA bottom-border">
                                        <div className="catalog__category-name-container--31pkW">
                                            <span>格式：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="catalog__active--LrCRX">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">图片</a>
                                                </li>
                                                <li>
                                                    <a className="">文档</a>
                                                </li>
                                                <li>
                                                    <a className="">音频</a>
                                                </li>
                                                <li>
                                                    <a className="">视频</a>
                                                </li>
                                                <li>
                                                    <a className="">课件</a>
                                                </li>
                                                <li>
                                                    <a className="">综合多媒体</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*列表内容*/}
                    <div className="content content01y clearfix">
                        <div className="mainbox clearfix">
                            <div className="sort_title">
                                <span>排序：</span>
                            </div>
                            <div className="sort_conts">
                                <ul className="sort_conts_ul">
                                    <li>
                                        <a className="">最多下载</a>
                                    </li>
                                    <li>
                                        <a className="">最新</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sort_right">共有<span className="lm_desc_num">3732</span>条资源，供您选择学习</div>
                            <div className="resource_cons no_top">
                                <div className="resource_con">
                                    <Link to={"/res/detail"}>
                                        <div className="resource_con_pic">
                                            <img src={resource_con_pic_1}/>
                                        </div>
                                        <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                                        <div className="resource_con_other">
                                        <span className="resource_con_other_favico">
                                            <img src={fav_ico_ed}/></span>
                                            <span className="resource_con_other_fav">收藏</span>
                                            <span className="resource_con_other_price">￥199</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="resource_con">
                                    <a href="resources_content.html">
                                        <div className="resource_con_pic">
                                            <img src={resource_con_pic_1}/>
                                        </div>
                                        <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                                        <div className="resource_con_other">
                                        <span className="resource_con_other_favico">
                                            <img src={fav_ico_ed}/></span>
                                            <span className="resource_con_other_fav">收藏</span>
                                            <span className="resource_con_other_price">￥199</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="resource_con">
                                    <a href="resources_content.html">
                                        <div className="resource_con_pic">
                                            <img src={resource_con_pic_1}/>
                                        </div>
                                        <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                                        <div className="resource_con_other">
                                        <span className="resource_con_other_favico">
                                            <img src={fav_ico_ed}/></span>
                                            <span className="resource_con_other_fav">收藏</span>
                                            <span className="resource_con_other_price">￥199</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="resource_con">
                                    <a href="resources_content.html">
                                        <div className="resource_con_pic">
                                            <img src={resource_con_pic_1}/>
                                        </div>
                                        <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                                        <div className="resource_con_other">
                                        <span className="resource_con_other_favico">
                                            <img src={fav_ico_ed}/></span>
                                            <span className="resource_con_other_fav">收藏</span>
                                            <span className="resource_con_other_price">￥199</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="resource_con">
                                    <a href="resources_content.html">
                                        <div className="resource_con_pic">
                                            <img src={resource_con_pic_1}/>
                                        </div>
                                        <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                                        <div className="resource_con_other">
                                        <span className="resource_con_other_favico">
                                            <img src={fav_ico_ed}/></span>
                                            <span className="resource_con_other_fav">收藏</span>
                                            <span className="resource_con_other_price">￥199</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="resource_con">
                                    <a href="resources_content.html">
                                        <div className="resource_con_pic">
                                            <img src={resource_con_pic_1}/>
                                        </div>
                                        <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                                        <div className="resource_con_other">
                                        <span className="resource_con_other_favico">
                                            <img src={fav_ico_ed}/></span>
                                            <span className="resource_con_other_fav">收藏</span>
                                            <span className="resource_con_other_price">￥199</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="resource_con">
                                    <a href="resources_content.html">
                                        <div className="resource_con_pic">
                                            <img src={resource_con_pic_1}/>
                                        </div>
                                        <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                                        <div className="resource_con_other">
                                        <span className="resource_con_other_favico">
                                            <img src={fav_ico_ed}/></span>
                                            <span className="resource_con_other_fav">收藏</span>
                                            <span className="resource_con_other_price">￥199</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="resource_con">
                                    <a href="resources_content.html">
                                        <div className="resource_con_pic">
                                            <img src={resource_con_pic_1}/>
                                        </div>
                                        <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                                        <div className="resource_con_other">
                                        <span className="resource_con_other_favico">
                                            <img src={fav_ico_ed}/></span>
                                            <span className="resource_con_other_fav">收藏</span>
                                            <span className="resource_con_other_price">￥199</span>
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

export default ResourceList;
