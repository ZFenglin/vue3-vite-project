/**
 * 用户请求模块
 */
import request from '@/utils/request'
import { IUserInfo } from './types/user'

export const getUserInfo = () => {
  return request<IUserInfo>({
    method: 'GET',
    url: 'get_user'
  })
}
