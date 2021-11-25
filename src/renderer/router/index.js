import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/sample',
      name: 'Sample',
      component: require('@/components/Sample').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
