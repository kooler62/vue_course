import VueRouter from 'vue-router';
import Home from "./pages/Home";
import Pizzas from "./pages/Pizzas";

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/pizzas',
      component: Pizzas
    }
  ],
  mode: 'history'
});
