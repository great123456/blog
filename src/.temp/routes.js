const c1 = () => import(/* webpackChunkName: "page--src--pages--post--id-vue" */ "/Users/liyuelin/Desktop/web/面试/vue/静态站点/blog/src/pages/post/[id].vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/liyuelin/Desktop/web/面试/vue/静态站点/blog/src/pages/contact.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/liyuelin/Desktop/web/面试/vue/静态站点/blog/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/liyuelin/Desktop/web/面试/vue/静态站点/blog/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/liyuelin/Desktop/web/面试/vue/静态站点/blog/src/pages/Index.vue")

export default [
  {
    name: "__post_id",
    path: "/post/:id",
    component: c1,
    meta: {
      dataPath: "/post/_id.json",
      dynamic: true
    }
  },
  {
    path: "/contact/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
