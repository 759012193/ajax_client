import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 2. 本地化配置
import {ConfigProvider} from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import "antd/dist/antd.css"

// 全局引入所有的css样式文件
import './static/css/common.css'
import './static/css/index.css'

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>,
  document.getElementById('root')
);
