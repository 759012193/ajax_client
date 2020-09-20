import React, {Component} from 'react';
import TopNav from "../../components/top-nav";
import Footer from "../../components/footer";
import Share from "../../components/share";
import TopLink from "../../components/top-link";
import banner_activity from "../../static/images/banner_activity.jpg";

import activities_con_pic_1 from "../../static/images/activities_con_pic_1.jpg";


export default class Activities extends Component{
    render() {
        return (
            <div>
                <TopNav />
                <TopLink />
                {/*封面*/}
                <div className="mainWrap clearfix">
                    <div className="banner_pagex">
                        <ul className="banner_box">
                            <li className="one"
                                style={{background: "url("+ banner_activity +") no-repeat top center"}}>
                                <a href="#" target="_blank" />
                            </li>
                        </ul>
                    </div>
                </div>
                {/*主面板*/}
                <div className="mainwraper">
                    <div className="content content01x clearfix">
                        <div className="mainbox clearfix">
                            <div className="catalog__category-container--3Wcuj">
                                <ul>
                                    <li className="catalog__category-item--1xiWA">
                                        <div className="catalog__category-name-container--31pkW w100">
                                            <span>活动地点：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW w1180">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="catalog__active--LrCRX">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">北京</a>
                                                </li>
                                                <li>
                                                    <a className="">上海</a>
                                                </li>
                                                <li>
                                                    <a className="">南京</a>
                                                </li>
                                                <li>
                                                    <a className="">杭州</a>
                                                </li>
                                                <li>
                                                    <a className="">深圳</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="catalog__category-item--1xiWA">
                                        <div className="catalog__category-name-container--31pkW w100">
                                            <span>招生对象：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW w1180">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="catalog__active--LrCRX">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">托班（2-3岁）</a>
                                                </li>
                                                <li>
                                                    <a className="">小班（3-4岁）</a>
                                                </li>
                                                <li>
                                                    <a className="">中班（4-5岁）</a>
                                                </li>
                                                <li>
                                                    <a className="">大班（5-6岁）</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="catalog__category-item--1xiWA bottom-border">
                                        <div className="catalog__category-name-container--31pkW w100">
                                            <span>营&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
                                        </div>
                                        <div className="catalog__sub-category-container--396VW w1180">
                                            <ul className="catalog__sub-category-list--2KWmC">
                                                <li>
                                                    <a className="catalog__active--LrCRX">全部</a>
                                                </li>
                                                <li>
                                                    <a className="">1天</a>
                                                </li>
                                                <li>
                                                    <a className="">2天</a>
                                                </li>
                                                <li>
                                                    <a className="">3天</a>
                                                </li>
                                                <li>
                                                    <a className="">4天</a>
                                                </li>
                                                <li>
                                                    <a className="">5天</a>
                                                </li>
                                                <li>
                                                    <a className="">6天</a>
                                                </li>
                                                <li>
                                                    <a className="">7天</a>
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
                                        <a className="">报名量</a>
                                    </li>
                                    <li>
                                        <a className="">最新</a>
                                    </li>
                                    <li>
                                        <a className="">价格</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sort_right">共有<span className="lm_desc_num">3732</span>项活动，供您选择参加</div>
                            <div className="activities_cons no_top">
                                <div className="activities_con">
                                    <a href="activities_content.html">
                                        <div className="activities_con_pic">
                                            <img src={activities_con_pic_1} alt=""/>
                                        </div>
                                        <div className="activities_con_title">黄埔军校7天军事体验营（广州)</div>
                                        <div className="activities_con_other">
                                            <span className="activities_con_other_date">活动时间：2020年7月1日</span>
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
                <Share />
            </div>
        )
    }
}