import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './index.css'
import Routers from './router/router';
// import 'antd/dist/antd.css';
import Footer from './pages/layout/Footer';

const App = () => {
    return (
      <ConfigProvider locale={zhCN}>
        <Routers />
      </ConfigProvider>
        // <div className="App"> 
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>9000
        //       Edit <code>src/App.js</code> and save to reload.2222
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //     <h1>hello world！</h1>
        //   </header>
        // </div>
      );
};

export default App;
  