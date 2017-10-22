import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/containers/home/Home'
import Document from '@/containers/document/Document'

// Document Fragment
import {
  Introduction,
  Installation,
  GettingStart
} from '@/components/document-pages'

Vue.use(Router)

export default new Router({
  mode: 'history',

  // Reset scroll position to top when route change
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },

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
          path: 'introduction',
          name: 'Introduction',
          component: Introduction
        },
        {
          path: 'installation',
          name: 'Installation',
          component: Installation
        },
        {
          path: 'getting-start',
          name: 'GettingStart',
          component: GettingStart
        }
        // {
        //   path: 'atomic/border',
        //   name: 'AtomicBorder',
        //   component: Border
        // }
      ]
    }
  ]
})
