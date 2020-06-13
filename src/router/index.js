import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import Home from '../components/app/index.vue';
import Login from '../views/login/index.vue';
import Register from '../views/register/index.vue';
import TodoList from '../components/todoList/index.vue';
import AddTodo from '../components/addTodo/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/todoList',
    name: 'TodoList',
    component: TodoList,
  },
  {
    path: '/addTodo',
    name: 'AddTodo',
    component: AddTodo,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const { currentUser } = firebase.auth();

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
