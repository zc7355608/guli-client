import axios from 'axios'
const ajax = (url, data={}, type='GET') => {
  const t = type.toUpperCase()
  if(t==='GET'){
    return axios.get(url, {params: data})
  }else if(t==='POST'){
    return axios.post(url, data)
  }else{
    return new Promise()
  }
}
export default ajax