import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/home/Home'
import Document from '@/containers/document/Document'
import Border from '@/components/atomic/Border'
import BoxPosition from '@/components/atomic/BoxPosition'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/document',
      name: 'Document',
      component: Document,
      children: [
        {
          path: 'atomic/border',
          name: 'AtomicBorder',
          component: Border
        }
      ]
    },
    {
      path: '/atomic/box-position',
      name: 'AtomicBoxPosition',
      component: BoxPosition
    }
  ]
})
