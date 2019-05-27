import Login from './components/Login'

import SignUp from './components/SignUp'

import Profile_page from './components/Profile'

const routes = [

{
	path: '/',
	exact: true,
	component: Login,
},
{
	path: '/profile',
	exact: true,
	component: Profile_page,
},
{
	path: '/signup',
	exact: true,
	component: SignUp,
}

]



export default routes
