
const routes = [
  {
    path: 'auth',
    component: () => import('layouts/Authorization.vue'),
    children: [
      { 
        path: '/main', 
        component: () => import('pages/Auth/Authorization.vue')
      },
      { 
        path: '/login', 
        component: () => import('pages/Auth/Login.vue')
      },
      { 
        path: '/registration', 
        component: () => import('pages/Auth/Registration.vue')
      },
      {
        path: '/forgot',
        component: () => import('pages/Auth/Forgot.vue') 
      },
      {
        path: '/forgot/password',
        component: () => import('pages/Auth/ForgotPassword.vue')
      }

    ]
  },
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Main.vue') }
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
