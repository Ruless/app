
const routes = [
  {
    path: '',
    component: () => import('layouts/Authorization.vue'),
    children: [
      { path: '', component: () => import('pages/Auth/Authorization.vue') },
      { path: '/login', component: () => import('pages/Auth/Login.vue') },
      { path: '/registration', component: () => import('pages/Auth/Registration.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
