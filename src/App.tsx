import React from 'react';
import './App.css';
import "antd/dist/antd.css";

import Header from './HeaderComponent';
import Sider from './SiderComponent';
import Student from "./StudentComponent";
import { Layout } from 'antd';

// ページのコンテンツIDかなんかを渡して表示を切り替える？
const App: React.FC = () => {
  return (
    <div className="App">
      <Layout style={{ "minHeight": '100vh'}}>
        <Header/>
        <Layout>
          <Sider/>
          <Student/>
          </Layout>
      </Layout>
    </div>
  );
}

export default App;
