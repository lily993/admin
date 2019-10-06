import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: '首页',
      component: () => import('@/views/home/index'),
      meta: { title: '首页', icon: 'home' }
    }]
  },



]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [
  {
    path: '/control  ',
    component: Layout,
    redirect: '/control/user',
    name: '系统功能',
    meta: { title: '系统功能', icon: 'example' },
    children: [
      {
        path: 'user',
        name: '用户管理',
        component: () => import('@/views/control/user/index'),
        meta: { title: '用户管理', icon: 'tree' }
      },
      {
        path: 'role',
        name: '角色管理',
        component: () => import('@/views/control/role/index'),
        meta: { title: '角色管理', icon: 'tree' }
      },
      {
        path: 'menu',
        name: '菜单管理',
        component: () => import('@/views/control/menu/index'),
        meta: { title: '菜单管理', icon: 'tree' }
      },
      {
        path: 'domain',
        name: '域名管理',
        component: () => import('@/views/control/domain/index'),
        meta: { title: '域名管理', icon: 'tree' }
      },
      {
        path: 'product',
        name: '产品管理',
        component: () => import('@/views/control/product/index'),
        meta: { title: '产品管理', icon: 'tree' }
      },
      {
        path: 'aptitude',
        name: '客户资质审核',
        component: () => import('@/views/control/aptitude/index'),
        meta: { title: '客户资质审核', icon: 'tree' }
      },
      {
        path: 'system',
        name: '系统参数设置',
        component: () => import('@/views/control/system/index'),
        meta: { title: '系统参数设置', icon: 'tree' }
      },
    ]
  },

  {
    path: '/order  ',
    component: Layout,
    redirect: '/order/orderList',
    name: '订单管理',
    meta: { title: '订单管理', icon: 'example' },
    children: [
      {
        path: 'orderList',
        name: '订单列表',
        component: () => import('@/views/order/orderList/index'),
        meta: { title: '订单列表', icon: 'tree' }
      },
      {
        path: 'orderLead',
        name: '导入订单',
        component: () => import('@/views/order/orderLead/index'),
        meta: { title: '导入订单', icon: 'tree' }
      },
      {
        path: 'orderAllot',
        name: '分配订单',
        component: () => import('@/views/order/orderAllot/index'),
        meta: { title: '分配订单', icon: 'tree' }
      },
      {
        path: 'leadRecord',
        name: '订单导入记录',
        component: () => import('@/views/order/leadRecord/index'),
        meta: { title: '订单导入记录', icon: 'tree' }
      },
      {
        path: 'allotRecord',
        name: '订单分配记录',
        component: () => import('@/views/order/allotRecord/index'),
        meta: { title: '订单分配记录', icon: 'tree' }
      },
      {
        path: 'domainRecord',
        name: '域名订单提交记录',
        component: () => import('@/views/order/domainRecord/index'),
        meta: { title: '域名订单提交记录', icon: 'tree' }
      },
    ]
  },

  {
    path: '/port  ',
    component: Layout,
    redirect: '/port/portLeaf',
    name: '接口管理',
    meta: { title: '接口管理', icon: 'example' },
    children: [
      {
        path: 'portLeaf',
        name: '趣头条-枫叶',
        component: () => import('@/views/port/portLeaf/index'),
        meta: { title: '趣头条-枫叶', icon: 'tree' }
      },
      {
        path: 'portHare',
        name: '趣头条-赤兔',
        component: () => import('@/views/port/portHare/index'),
        meta: { title: '趣头条-赤兔', icon: 'tree' }
      }
    ]
  },

  {
    path: '/mine  ',
    component: Layout,
    redirect: '/mine/minePassword',
    name: '个人功能',
    meta: { title: '个人功能', icon: 'example' },
    children: [
      {
        path: 'minePassword',
        name: '修改密码',
        component: () => import('@/views/mine/minePassword/index'),
        meta: { title: '修改密码', icon: 'tree' }
      },
      {
        path: 'mineAptitude',
        name: '我的资质',
        component: () => import('@/views/mine/mineAptitude/index'),
        meta: { title: '我的资质', icon: 'tree' }
      },
      {
        path: 'mineAccount',
        name: '我的账户',
        component: () => import('@/views/mine/mineAccount/index'),
        meta: { title: '我的账户', icon: 'tree' }
      },
      {
        path: 'table',
        name: '表格',
        component: () => import('@/views/table/index'),
        meta: { title: '表格', icon: 'tree' }
      },
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
