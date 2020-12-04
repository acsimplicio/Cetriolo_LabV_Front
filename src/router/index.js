import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Usuario from '../views/Usuario.vue'
import Tarefa from '../views/Tarefa.vue'
import Materia from '../views/Materia.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
        authRequired: true
    }
  },
  {
      path: '/usuarios',
      name: 'Usuario',
      component: Usuario,
      meta: {
        authRequired: true
    }
  },
  {
      path: '/materias',
      name: 'Materia',
      component: Materia,
      meta: {
        authRequired: true
    }
  },
  {
      path: '/tarefas',
      name: 'Tarefa',
      component: Tarefa,
      meta: {
        authRequired: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.currentUser) {
            next({ name: 'Login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
