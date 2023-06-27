import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb,Avatar} from 'antd';
import $ from "jquery";
 
const { Header, Footer,Content } = Layout;
 
class Register extends Component {
 
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            confirmpwd:''
        }
    }
    handleInput(){
        let username=$("#username").val();
        let password=$("#password").val();
        let confirmpwd=$("#confirmpwd").val();
        this.setState({
            username:username,
            password:password,
            confirmpwd:confirmpwd,
        })
    }
 
    handleRegister(){
        let {username,password,confirmpwd}=this.state
        console.log(username,password,confirmpwd)
        $.ajax({
            url:"http://127.0.0.1:7001/api/user/register",
            dataType:"json",
            type:"POST",
            data:{
                username:username,
                password:password,
                confirmpwd:confirmpwd
            },
            success:function (result){
                if(result.code==="202"){
                    alert(result.msg);
                    window.location.href='/';
                }
                else {
                    alert(result.msg);
                }
            }
        })
    }
 
    handleCancel(){
        window.location.href='/register';
    }
 
    render() {
        return (
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
                        defaultSelectedKeys={['3']}
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
                        <h1 style={{textAlign: 'center'}}>正确的</h1>
                        <br/>
                        <div align="center">
                            账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号:<input placeholder="请输入用户名" id="username" type="text"
                                      defaultValue={this.state.username} onChange={this.handleInput.bind(this)}/>
                            <br/>
                            <br/>
                            密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:<input placeholder="请输入密码" id="password" type="password" defaultValue={this.state.password} onChange={this.handleInput.bind(this)}/>
                            <br/>
                            <br/>
                            确认密码:<input placeholder="请再次输入密码" id="confirmpwd" type="password" defaultValue={this.state.confirmpwd} onChange={this.handleInput.bind(this)}/>
                            <br/>
                            <br/>
                            <br/>
                            <button onClick={this.handleRegister.bind(this)}>注册</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={this.handleCancel.bind(this)}>取消</button>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        );
    }
}
 
export default Register;