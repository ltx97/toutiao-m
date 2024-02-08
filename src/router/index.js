import { createRouter, createWebHashHistory } from 'vue-router'
import LoginIndex from '@/views/login/LoginIndex'
import UserCenter from '@/views/usercenter/UserCenter'
import MyTabbar from '@/views/tabbar/MyTabbar'
import shipin from '@/views/shipin/MyShiPin'
import wenda from '@/views/wenda/WenDa'
import shouye from '@/views/shouye/ShouYe'
import wode from '@/views/wode/WoDe'

const routes = [
  {
    path: '/login',
    component: LoginIndex
  },
  {
    path: '/usercenter',
    component: UserCenter
  },
  {
    path: '/',
    component: MyTabbar,
    children: [
      {
        path: '/shipin',
        component: shipin
      },
      {
        path: '',
        component: shouye
      },
      {
        path: '/wenda',
        component: wenda
      },
      {
        path: '/wode',
        component: wode
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
