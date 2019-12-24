import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import people from '@/components/people'
import honor from '@/components/honor'
import source from '@/components/source'
import learning from '@/components/learning'
import getintouch from '@/components/getintouch'
import home from '@/components/home'
import nav from '@/components/nav'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/首页',
      name: 'home',
      component: home,
    },
    {
      path: '/研究方向',
      name: 'about',
      component: about,
  
    },
    {
      path: '/人员组成',
      name: 'people',
      component: people,
    },  
    {
      path: '/学术成果',
      name: 'honor',
      component: honor,
    },
    {
      path: '/资源系统',
      name: 'source',
      component: source,
    },  
    {
      path: '/课程教学',
      name: 'learning',
      component: learning,
    },
    {
      path: '/联系我们',
      name: 'getintouch',
      component: getintouch,
    }
  ]
})
