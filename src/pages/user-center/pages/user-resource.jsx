import React, {Component} from 'react';
import {Pagination, message} from 'antd'

import {getUserBuyResource, getUser} from './../../../api/userApi'
import config from './../../../config/config'

import resource_con_pic_1 from './../../../static/images/resource_con_pic_1.jpg'
import {saveObj} from "../../../tools/cache-tool";

export default class UserResource extends Component{
    constructor(props) {
        super(props);

        this.state = {
            user_buy_resource_count: 0,
            user_buy_resource_list: []
        }
    }

    componentDidMount() {
        this.loadListData()
    }

    loadListData(page_num = 1, page_size = 3){
        getUserBuyResource(page_num, page_size, getUser().id).then((result)=>{
            if(result && result.status === 1){
                this.setState({
                    user_buy_resource_count: result.data.user_resource_count,
                    user_buy_resource_list: result.data.user_resource_list
                });
            }
        }).catch((error)=>{
            message.error(error.msg);
        })

    }

    render() {
        const {user_buy_resource_count, user_buy_resource_list} = this.state;
        return (
            <div className="member_right">
                <div className="member_right_title">
                    已购买的资源
                </div>
                <div className="member_right_content">
                    {
                        user_buy_resource_list.map((item)=>{
                           return (
                               <div className="resource_con" key={item.id}>
                                   <a onClick={(e)=>{
                                       e.preventDefault();
                                       // 存储资源到本地
                                       saveObj('buy_user_resource', item);
                                       this.props.history.push({
                                           pathname: '/resource/detail'
                                       })
                                   }}>
                                       <div className="resource_con_pic">
                                           <img src={config.BASE_URL + item.resource_img} alt=""/>
                                       </div>
                                       <div className="resource_con_title">{item.resource_name}</div>
                                   </a>
                               </div>
                           )
                        })
                    }
                    <div
                        className="page-boxs clearfix"
                        style={{marginLeft: '290px', marginBottom: '50px'}}
                    >
                        <div className="page-listx">
                            <Pagination
                                defaultCurrent={1}
                                pageSize={3}
                                total={user_buy_resource_count}
                                onChange={(page, pageSize)=>{
                                    // 重新加载数据
                                    this.loadListData(page, pageSize);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}