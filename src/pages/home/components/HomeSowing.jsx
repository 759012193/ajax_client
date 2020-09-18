import React from 'react'

// 引入静态资源
import banner from './../../../static/images/banner.jpg'

class HomeSowing extends React.Component{
    render() {
        return (
            <div className="mainWrap clearfix">
                <div className="banner_page">
                    <ul className="banner_box">
                        <li className="one" style={{background: `url(${banner}) no-repeat top center` }}>
                            <a href="#" target="_blank" />
                        </li>
                    </ul>
                    <ul className="btn_list clearfix">
                        <li className="on" />
                        <li />
                        <li />
                        <li />
                    </ul>
                </div>
            </div>
        )
    }
}

export default HomeSowing;
