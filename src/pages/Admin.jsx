import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class Admin extends Component {
  render() {
    const userStr = sessionStorage.getItem('user') || localStorage.getItem('user') || '{}'
    const user = JSON.parse(userStr)
    if(!user._id){
      // 如果没有存储用户信息，就跳转到登录组件（注意：render()中跳转得这样跳）
      return <Navigate to="/login" />
    }else{
      return (
        <div>
          <h1>管理员界面</h1>
        </div>
      )
    }
  }
}
