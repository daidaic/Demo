
import React, { Component } from "react";
import './Login.less'
import { Tabs, Form, Button, Checkbox,Input ,message} from 'antd';
import {UserOutlined} from '@ant-design/icons'
import { withRouter } from "react-router-dom";

const { TabPane } = Tabs;

function Login(props) {

  const onFinish = (msg)=>{
    console.log(msg);
    message.success('登录成功');
    localStorage.setItem("username",msg.username);
    props.history.push('/upload')
  }

  const onxxFinish = (msg) => {
    message.success('注册用户成功')
  }

  return (<div className="loginGlobal">
    <div className="ant-pro-form-login-main">
      <Tabs defaultActiveKey="1" centered >
        <TabPane tab="帐号密码登录" key="1">
          <Form
            name="basic"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input placeholder="请输入用户名"  prefix={<UserOutlined style={{color:'#1890ff'}} />} />
            </Form.Item>

            <Form.Item
             
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password  placeholder="请输入密码" prefix={<svg t="1617691301824" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2050" width="16" height="16"><path d="M866.329807 354.473707h-708.694309A78.715689 78.715689 0 0 0 78.793256 433.252673v433.12612a157.494655 157.494655 0 0 0 157.494655 157.494654H787.487565a157.494655 157.494655 0 0 0 157.494655-157.494654V433.252673a78.778966 78.778966 0 0 0-78.652413-78.778966z m-314.98931 413.447198a39.357845 39.357845 0 0 1-78.778966 0V610.42625a39.357845 39.357845 0 0 1 78.778966 0z" p-id="2051" fill="#1890ff"></path><path d="M511.919376 78.842242a197.042328 197.042328 0 0 1 196.852499 196.852499V354.410431H315.0036V275.631465a197.042328 197.042328 0 0 1 196.8525-196.852499m0-78.778966a275.631465 275.631465 0 0 0-275.568189 275.694741v157.494655h551.26293V275.694741A275.631465 275.631465 0 0 0 511.919376 0.063276z" p-id="2052" fill="#1890ff"></path></svg>} />
            </Form.Item>

            <Form.Item  noStyle wrapperCol={{ offset: 0, span: 16 }}>
              <Form.Item valuePropName="checked" name="remember">
              <Checkbox>记住密码</Checkbox>
              </Form.Item>
              
              {/* <span style={{float: 'right',color:'#ff4d4f',fontSize:'12px'}}>忘记密码联系管理员</span> */}
            </Form.Item>

            <Form.Item >
              <Button block type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="注册用户" key="2">
        <Form
            name="basic"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            // initialValues={{ remember: true }}
            onFinish={onxxFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              
              name="username"
              // rules={[{ required: true, message: 'Please input your username!' }]}
              rules={[{ required: true, message: '输入用户名' }]}
            >
              <Input  placeholder="请输入用户名" prefix={<UserOutlined style={{color:'#1890ff'}} />} />
            </Form.Item>

            <Form.Item
             
              name="password"
              rules={[{ required: true, message: '输入密码' }]}
            >
              <Input.Password  placeholder="请输入密码" prefix={<svg t="1617691301824" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2050" width="16" height="16"><path d="M866.329807 354.473707h-708.694309A78.715689 78.715689 0 0 0 78.793256 433.252673v433.12612a157.494655 157.494655 0 0 0 157.494655 157.494654H787.487565a157.494655 157.494655 0 0 0 157.494655-157.494654V433.252673a78.778966 78.778966 0 0 0-78.652413-78.778966z m-314.98931 413.447198a39.357845 39.357845 0 0 1-78.778966 0V610.42625a39.357845 39.357845 0 0 1 78.778966 0z" p-id="2051" fill="#1890ff"></path><path d="M511.919376 78.842242a197.042328 197.042328 0 0 1 196.852499 196.852499V354.410431H315.0036V275.631465a197.042328 197.042328 0 0 1 196.8525-196.852499m0-78.778966a275.631465 275.631465 0 0 0-275.568189 275.694741v157.494655h551.26293V275.694741A275.631465 275.631465 0 0 0 511.919376 0.063276z" p-id="2052" fill="#1890ff"></path></svg>} />
            </Form.Item>

           

            <Form.Item >
              <Button block type="primary" htmlType="submit">
                注册
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>

      {/* <Button type="primary" block>xxx</Button> */}
    </div>
  </div>)
}

export default withRouter(Login)