import Login from './components/Login'
import Contact from './components/Contact'
import SignUp from './components/Signup'
import TextFields from './components/Login'
import Profile from './components/Profile'

const routes = [

{
	path: '/',
	exact: true,
	component: Login,
},
{
	path: '/profile',
	exact: true,
	component: Profile,
},
{
	path: '/signup',
	exact: true,
	component: SignUp,
}

]



export default routes
