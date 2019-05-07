import Vue from 'vue'
import Router from 'vue-router'
import sku from '@/components/sku'
import skuEdit from '@/components/sku-edit'
import layout from '@/view/layout'
import wxXx from '@/view/wx-xx'
import selectItem from '@/view/select-item'
import enlayout from '@/view/enlayout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sku',
      name: 'sku',
      component: sku
    }, {
      path: '/edit',
      name: 'skuEdit',
      component: skuEdit
    }, {
      path: '/layout',
      name: 'Layout',
      component: layout
    }, 
    {
      path: '/wx',
      name: 'wx',
      component: wxXx
    }, 
    {
      path: '/a',
      redirect: '/'
    },
    {
      path: '/',
      name: 'selectItem',
      component: selectItem
    },
    {
      path: '/enlayout',
      name: 'enlayout',
      component: enlayout
    }
  ]
})
