import React from 'react'

// 引入静态资源
import resources_cat_ico_1 from './../../../static/images/resources_cat_ico_1.png'
import resources_cat_ico_2 from './../../../static/images/resources_cat_ico_2.png'
import resources_cat_ico_3 from './../../../static/images/resources_cat_ico_3.png'
import resources_cat_ico_4 from './../../../static/images/resources_cat_ico_4.png'

class HomeCard extends React.Component{
    render() {
        return (
            <div className="content content01 clearfix">
                <div className="mainbox clearfix">
                    <div className="resources_cat">
                        <div className="resources_cat_ico">
                            <img src={resources_cat_ico_1} alt=""/>
                        </div>
                        <div className="resources_cat_name">教学活动小助手</div>
                    </div>
                    <div className="resources_cat">
                        <div className="resources_cat_ico">
                            <img src={resources_cat_ico_2} alt=""/>
                        </div>
                        <div className="resources_cat_name">亲子小学堂</div>
                    </div>
                    <div className="resources_cat">
                        <div className="resources_cat_ico">
                            <img src={resources_cat_ico_3} alt=""/>
                        </div>
                        <div className="resources_cat_name">培训教学</div>
                    </div>
                    <div className="resources_cat">
                        <div className="resources_cat_ico">
                            <img src={resources_cat_ico_4} alt=""/>
                        </div>
                        <div className="resources_cat_name">GT课程</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeCard;
