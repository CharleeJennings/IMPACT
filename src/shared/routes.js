import Login from './components/Login'

import SignUp from './components/Signup'

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
