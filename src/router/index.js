import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/containers/home/Home'
import Document from '@/containers/document/Document'

// Document
import {
  Introduction,
  Installation,
  GettingStart,
  AtomicAlignment,
  AtomicBorder,
  AtomicBoxPosition,
  AtomicBoxSize,
  AtomicColor,
  AtomicCursor,
  AtomicDisplay,
  AtomicFloat,
  AtomicMargin,
  AtomicOpacity,
  AtomicPadding,
  AtomicTypography
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
        },
        {
          path: 'atomic/alignment',
          name: 'AtomicAlignment',
          component: AtomicAlignment
        },
        {
          path: 'atomic/border',
          name: 'AtomicBorder',
          component: AtomicBorder
        },
        {
          path: 'atomic/box-position',
          name: 'AtomicBoxPosition',
          component: AtomicBoxPosition
        },
        {
          path: 'atomic/box-size',
          name: 'AtomicBoxSize',
          component: AtomicBoxSize
        },
        {
          path: 'atomic/color',
          name: 'AtomicColor',
          component: AtomicColor
        },
        {
          path: 'atomic/cursor',
          name: 'AtomicCursor',
          component: AtomicCursor
        },
        {
          path: 'atomic/display',
          name: 'AtomicDisplay',
          component: AtomicDisplay
        },
        {
          path: 'atomic/float',
          name: 'AtomicFloat',
          component: AtomicFloat
        },
        {
          path: 'atomic/margin',
          name: 'AtomicMargin',
          component: AtomicMargin
        },
        {
          path: 'atomic/opacity',
          name: 'AtomicOpacity',
          component: AtomicOpacity
        },
        {
          path: 'atomic/padding',
          name: 'AtomicPadding',
          component: AtomicPadding
        },
        {
          path: 'atomic/typography',
          name: 'AtomicTypography',
          component: AtomicTypography
        }
      ]
    }
  ]
})
