import React, {Component} from 'react';

import resource_con_pic_1 from './../../../static/images/resource_con_pic_1.jpg'
import fav_ico_ed from './../../../static/images/fav_ico_ed.png'

export default class HomeResource extends Component {
    render() {
        return (
            <div className="content content01 clearfix">
                <div className="mainbox clearfix">
                    <div className="lm_title">幼教资源</div>
                    <div className="lm_desc">共有<span className="lm_desc_num">3732</span>条资源，供您选择学习</div>
                    <div className="lm_more">
                        <span className="lm_more_ico"/>
                        <span className="lm_mores">查看更多</span>
                    </div>
                    <div className="resource_cons">
                        <div className="resource_con">
                            <a href="#">
                                <div className="resource_con_pic">
                                    <img src={resource_con_pic_1} alt=""/>
                                </div>
                                <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                                <div className="resource_con_other">
                                <span className="resource_con_other_favico">
                                    <img src={fav_ico_ed} alt=""/>
                                </span>
                                    <span className="resource_con_other_fav">收藏</span>
                                    <span className="resource_con_other_price">￥199</span>
                                </div>
                            </a>
                        </div>
                        <div className="resource_con">
                            <a href="#">
                                <div className="resource_con_pic">
                                    <img src={resource_con_pic_1} alt=""/>
                                </div>
                                <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                                <div className="resource_con_other">
                                <span className="resource_con_other_favico">
                                    <img src={fav_ico_ed} alt=""/>
                                </span>
                                    <span className="resource_con_other_fav">收藏</span>
                                    <span className="resource_con_other_price">￥199</span>
                                </div>
                            </a>
                        </div>
                        <div className="resource_con">
                            <a href="#">
                                <div className="resource_con_pic">
                                    <img src={resource_con_pic_1} alt=""/>
                                </div>
                                <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                                <div className="resource_con_other">
                                <span className="resource_con_other_favico">
                                    <img src={fav_ico_ed} alt=""/>
                                </span>
                                    <span className="resource_con_other_fav">收藏</span>
                                    <span className="resource_con_other_price">￥199</span>
                                </div>
                            </a>
                        </div>
                        <div className="resource_con">
                            <a href="#">
                                <div className="resource_con_pic">
                                    <img src={resource_con_pic_1} alt=""/>
                                </div>
                                <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                                <div className="resource_con_other">
                                <span className="resource_con_other_favico">
                                    <img src={fav_ico_ed} alt=""/>
                                </span>
                                    <span className="resource_con_other_fav">收藏</span>
                                    <span className="resource_con_other_price">￥199</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}