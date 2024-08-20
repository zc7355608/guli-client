import axios from 'axios'
import {message} from 'antd'
const ajax = (url, data={}, type='GET') => {
  const t = type.toUpperCase()
  let p
  return new Promise((resolve,reject) => {
    if(t==='GET'){
      p = axios.get(url, {params: data})
    }else if(t==='POST'){
      p = axios.post(url, data)
    }else{ }
    p.then(
      response => { resolve(response.data) },
      error => { message.error('请求出错了：'+ error.message) }
    )
  })
}

export default ajax