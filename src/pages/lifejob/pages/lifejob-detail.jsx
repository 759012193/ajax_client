import React, {Component} from 'react';

import {shareToSinaWB, shareToqq, shareToQQZone} from './../../../tools/share-tool'

import copyright_ico from "../../../static/images/copyright_ico.png";
import view_ico from "../../../static/images/view_ico.png";
import date_ico from "../../../static/images/date_ico.png";


export default class LifeJobDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            job: {}
        }
    }

    componentDidMount() {
        // 1. 拦截
        if(!this.props.location.state){
            this.setState = ()=> false;
            this.props.history.goBack();
        }

        if(this.props.location.state) {
            const job = this.props.location.state.job;
            this.setState({
                job
            })
        }
    }


    render() {
        const {job} = this.state;
        return (
            <div className="mainwraper">
                <div className="content content01y clearfix">
                    <div className="mainbox clearfix">
                        <div className="here_url">
                            <span>幼教服务系统 > 职场人生 > </span>
                            <span className="here_url_title">正文</span>
                        </div>
                        <div className="resource_cons no_top">
                            <div className="resource_cons_left">
                                <div className="resource_cons_left_top">
                                    <div className="resource_cons_left_top_title">
                                        {job.job_name}
                                    </div>
                                    <div className="resource_cons_left_top_desc">
                                        <div className="resource_cons_left_top_descx">
                                            <img src={copyright_ico} alt={""}/>来自：{job.author}
                                        </div>
                                        <div className="resource_cons_left_top_descx">
                                            <img src={view_ico} alt=""/>{job.job_views || 1}
                                        </div>
                                        <div className="resource_cons_left_top_descx">
                                            <img src={date_ico} alt=""/>{job.job_publish_time}
                                        </div>
                                    </div>
                                </div>
                                <div className="resource_cons_left_left" id="LeftTool">
                                    <div className="share-title through" data-bossirs="share"><span>分享</span></div>
                                    <div className="share" data-bosszone="share">
                                        <a className="wxWrap">
                                            <i className="iconfont icon-icon-" />
                                            <div className="qrcode hidden">
                                                <div id="qrcode" title="" />
                                            </div>
                                        </a>
                                        <a
                                            className="qqWrap"
                                            onClick={(e)=>{
                                                e.preventDefault();
                                                shareToqq('itlike.com', '我是一个分享者');
                                            }}
                                        >
                                            <i className="iconfont icon-qq1"/>
                                        </a>
                                        <a className="kjWrap"
                                           onClick={(e)=>{
                                               e.preventDefault();
                                               shareToQQZone('itlike.com', 100, '我是一个描述', '我是一个简介', '我是一个标题', 'itlike.com', 'http://www.itlike.com/template/simple/res/images/logo.png');
                                           }}
                                        >
                                            <i className="iconfont icon-qqkongjian"/>
                                        </a>
                                        <a
                                            className="wbWrap"
                                            onClick={(e)=>{
                                                e.preventDefault();
                                                shareToSinaWB('itlike.com', '我是哈哈哈哈哈哈', 'http://www.itlike.com/template/simple/res/images/logo.png');
                                            }}
                                        >
                                            <i className="iconfont icon-weibo1"/>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="resource_cons_left_right"
                                    dangerouslySetInnerHTML={{__html: job.job_content}}
                                    style={{paddingBottom: '100px'}}
                                >
                                </div>
                                <div className="resource_cons_left_bottom">
                                    <div className="comment_box">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}