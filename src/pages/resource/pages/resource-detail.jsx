import React, {Component} from 'react';
import {message} from 'antd'

import copyright_ico from './../../../static/images/copyright_ico.png'
import view_ico from './../../../static/images/view_ico.png'
import date_ico from './../../../static/images/date_ico.png'

import {getResourceDownloadList, updateResourceViewsCount} from './../../../api/resourceApi'
import config from './../../../config/config'
import {getObj, removeObj} from "../../../tools/cache-tool";

export default class ResourceDetail extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            resource: {}, // 资源内容
            resource_file_arr: [] // 下载文件的数组
        }
    }


    componentDidMount() {
        // 0. 如果是用户中心来的
       const buyResource = getObj('buy_user_resource');

        // 1. 拦截
       if(!this.props.location.state && buyResource.id === undefined){
           this.setState = ()=> false;
           this.props.history.goBack();
       }

       if(this.props.location.state){
           const resource = this.props.location.state.resource;
           this.setState({
               resource
           }, ()=>{
               this.loadData(resource);
           })
       }

       // 2. 特殊处理
        if(buyResource.id !== undefined){
            this.setState({
                resource: buyResource
            }, ()=>{
                this.loadData(buyResource);
            })
        }
   }

    componentWillUnmount() {
        removeObj('buy_user_resource');
    }

    loadData(resource){
       // 2. 请求下载的资源
       getResourceDownloadList(resource.resource_content).then((result)=>{
           if(result && result.status === 1){
               this.setState({
                   resource_file_arr: result.data
               })
           }
       }).catch((error)=>{
           message.error(error.msg);
       });
       // 3. 更新阅读数量
       updateResourceViewsCount(resource.id).then(()=>{}).catch(()=>{});
   }

    render() {
       const {resource, resource_file_arr} = this.state;
       return (
           <div className="mainwraper">
               <div className="content content01y clearfix">
                   <div className="mainbox clearfix">
                       <div className="here_url">
                           <span>幼教服务系统 > 幼教资源 > </span><span className="here_url_title">下载资源列表</span>
                       </div>
                       <div className="resource_cons no_top">
                           <div className="resource_cons_left">
                               <div className="resource_cons_left_top">
                                   <div className="resource_cons_left_top_title">
                                       {resource.resource_name}
                                   </div>
                                   <div className="resource_cons_left_top_desc">
                                       <div className="resource_cons_left_top_descx">
                                           <img src={copyright_ico}/>来自：{resource.resource_author}
                                       </div>
                                       <div className="resource_cons_left_top_descx">
                                           <img src={view_ico}/>{resource.resource_views === 0 ? 1 : resource.resource_views}
                                       </div>
                                       <div className="resource_cons_left_top_descx">
                                           <img src={date_ico}/>{resource.resource_publish_time}
                                       </div>
                                   </div>
                               </div>
                               <div className="resource_cons_left_right">
                                   <h2>点击下载你需要的资源:</h2>
                                   {
                                       resource_file_arr.map((file)=>{
                                           return (
                                               <p className="one-p" key={file.id}>
                                                   <a
                                                       href={config.BASE_URL + file.url}
                                                       download={file.name}
                                                       target={"_blank"}
                                                   >
                                                       {file.name}
                                                   </a>
                                               </p>
                                           )
                                       })
                                   }
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