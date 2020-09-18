import React from 'react'

// 引入静态资源
import resource_con_pic_1 from "../../../static/images/resource_con_pic_1.jpg";

class UserResource extends React.Component{
    render() {
        return (
            <div className="member_right">
                <div className="member_right_title">
                    已购买的资源
                </div>
                <div className="member_right_content">
                    <div className="resource_con">
                        <a href="#">
                            <div className="resource_con_pic">
                                <img src={resource_con_pic_1}/>
                            </div>
                            <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                        </a>
                    </div>
                    <div className="resource_con">
                        <a href="#">
                            <div className="resource_con_pic">
                                <img src={resource_con_pic_1}/>
                            </div>
                            <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                        </a>
                    </div>
                    <div className="resource_con">
                        <a href="#">
                            <div className="resource_con_pic">
                                <img src={resource_con_pic_1}/>
                            </div>
                            <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                        </a>
                    </div>
                    <div className="resource_con">
                        <a href="#">
                            <div className="resource_con_pic">
                                <img src={resource_con_pic_1}/>
                            </div>
                            <div className="resource_con_title">走出幼儿园环境创设的误区</div>
                        </a>
                    </div>
                    <div className="page-boxs clearfix" style={{marginLeft:'290px', marginBottom:'50px'}}>
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
        )
    }
}

export default UserResource;
