import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact"
import AllProduct from "./components/AllProduct";
import EditProduct from "./components/EditProduct";
import CreateProduct from "./components/CreateProduct";

Vue.use(VueRouter);

export default new VueRouter({
   routes:[
       // { path:'/',component: Home },
       // { path:'/about',component: About },
       // { path:'/contact',component: Contact },
       {
           name: 'home',
           path: '/',
           component: AllProduct
       },
       {
           name: 'create',
           path: '/create',
           component: CreateProduct
       },
       {
           name: 'edit',
           path: '/edit/:id',
           component: EditProduct
       }
   ],
   mode:'history'
});
