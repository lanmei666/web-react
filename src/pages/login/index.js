import React, {Component} from 'react';
import $ from 'jquery';
import {Menu, Layout, Breadcrumb, Avatar} from "antd";
const { Header,Footer,Content} = Layout;
class Login extends Component {
    constructor(props) {
        super(props);
        //构造函数初始化，要将改变的数据初始化state中
        this.state={
            username:'',
            password:''
        }
    }
    handleInput(){
        let username=$("#username").val();
        let password=$("#password").val();
        this.setState({
            username:username,
            password:password
        })
    }
    handleLogin(){
        let {username,password}=this.state
        console.log(username,password)
        $.ajax({
            url:"http://127.0.0.1:7001/api/user/login",
            dataType:"json",
            type:"POST",
            data:{
                username:username,
                password:password
            },
            success:function (result){
                if(result.code==="201"){
                    alert(result.msg);
                    localStorage.setItem("user_key",result.data.username);
                    window.location.href='/';
                }
                else {
                    alert(result.msg);
                }
            }
        })
    }
 
    handleOut(){
        localStorage.removeItem("user_key");
        window.location.href='/login';
    }
 
    render() {
        return(
            <Layout className="layout">
                <Header>
                    <Avatar
                        style={{
                            float: 'left',
                            width: 120,
                            height: 31,
                            margin: '16px 24px 16px 0',
                            background: 'rgba(255, 255, 255, 0.2)',
                        }}
                    ><a href={"login"}><span id={"deng"}>{JSON.parse(localStorage.getItem("user_key"))}</span></a></Avatar>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
                        <Menu.Item key="2"><a href={"login"}>Login</a></Menu.Item>
                        <Menu.Item key="3"><a href={"register"}>Register</a></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px'}}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <h1 style={{textAlign: 'center'}}>错误的</h1>
                        <br/>
                        <br/>
                        <div align="center">
                            <div align="center">
                                账号:<input placeholder="请输入用户名" id="username" type="text"
                                          defaultValue={this.state.username} onChange={this.handleInput.bind(this)}/>
                                <br/>
                                <br/>
                                密码:<input placeholder="请输入密码" id="password" type="password" defaultValue={this.state.password} onChange={this.handleInput.bind(this)}/>
                                <br/>
                                <br/>
                                <br/>
                                <button onClick={this.handleLogin.bind(this)}>登录</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={this.handleOut.bind(this)}>退出</button>
                            </div>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        );
    }
}
 
export default Login;