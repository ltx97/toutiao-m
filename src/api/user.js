/**
 * 用户相关请求模块
 */
import request from '@/util/request'

export const login = data => {
  return request({
    method: 'POST',
    url: '/login',
    data
  })
}

export const code = mobile => {
  return request({
    method: 'GET',
    url: `/code/${mobile}`
  })
}
