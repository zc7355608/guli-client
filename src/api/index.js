// 该模块包含所有接口的请求函数，每个函数的返回值都是一个promise实例
import ajax from '../utils/ajax'
export const reqLogin = (username, password) => ajax('/login', { username, password }, 'POST')
export const reqAddUser = user => ajax('/manage/user/add', user, 'POST')