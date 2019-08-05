import Login from './components/Login-Student'

import SignUp from './components/SignUp'

import Profile_page from './components/Profile'
import TextMobileStepper from './components/SignUpStepper'

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
},
{
	path: '/step',
	exact: true,
	component: TextMobileStepper,
}

]



export default routes
