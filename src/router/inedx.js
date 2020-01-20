import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const ShopCar = () => import('../views/shopcar/Shopcar')
const Profile = () => import('../views/porfile/Profile')

Vue.use(VueRouter)

const routes = [
	// 默认渲染
	{
		path: '',
		redirect: './home'
	},
	// Home的路由映射
	{
		path: '/home',
		component: Home
	},
	// Category的路由映射
	{
		path: '/category',
		component: Category
	},
	// ShopCar的路由映射
	{
		path: '/shopcar',
		component: ShopCar
	},
	// Profile的路由映射
	{
		path: '/profile',
		component: Profile
	}
]

const router = new VueRouter({
	routes,
	mode: 'history',
})

export default router