import { Layout, Menu, Breadcrumb } from 'antd';
import {Component} from "react";
 
// eslint-disable-next-line no-unused-vars
const { Header, Content, Footer } = Layout;
 
export default class Home extends Component{
    render() {
        return(
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
                        <Menu.Item key="2"><a href="/login">Login</a></Menu.Item>
                        <Menu.Item key="3"><a href="/register">Register</a></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
                </Content>
            </Layout>
        )
    }
}