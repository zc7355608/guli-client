import React from 'react'
import {useNavigate} from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Flex, message } from 'antd'
import './index.css'
import logo from './imgs/logo.png'
import { reqLogin } from '../../api'

const App = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()

  const onFinish = async ({username,password,remember}) => {
    // console.log('Received values of form: ', values)
    const data = await reqLogin(username,password)
    if(data.status===0){ // 登录成功
      messageApi.open({
        type: 'success',
        content: '登录成功！',
        duration: 1.5,
      })
      // 登录成功就将用户信息保存在浏览器中，这样刷新也不会丢失登录信息
      if(remember){
        // 如果勾选了记住密码，那么就放在localStorage中
        localStorage.setItem('user',JSON.stringify(data.data))
      }else{
        // 如果没有保存密码，那么就放在sessionStorage中
        sessionStorage.setItem('user',JSON.stringify(data.data))
      }
      // 跳转到用户信息页面
      setTimeout(()=>{
        navigate('/', {
          replace: true
        })
      },1500)
    }else{ // 登录失败
      messageApi.open({
        type: 'error',
        content: data.msg,
      })
    }
  }

  const rules = v => {
    return [
      {
        required: true,
        message: `${v}不能为空！`,
      },
      {
        min: 4,
        message: `${v}不能小于4位！`
      },
      {
        max: 12,
        message: `${v}不能大于12位！`
      },
      {
        pattern: /^[a-zA-Z0-9_]+$/,
        message: `${v}只能是数字、字母、下划线组成！`
      },
    ]
  }

  return (
    <div className='login'>
      {contextHolder}
      <header className='login-header'>
        <img src={logo} alt="logo"/>
        <h1>React项目：谷粒后台</h1>
      </header>
      <div className='login-content'>
        <h2>用户登录</h2>
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          style={{
            maxWidth: 360,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={rules('用户名')}
          >
            <Input prefix={<UserOutlined />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={rules('密码')}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
              <a href="" onClick={ e=>{e.preventDefault()} }>忘记密码</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">登录</Button>
            或 <a href="" onClick={ e=>{e.preventDefault()} }>去注册</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default App