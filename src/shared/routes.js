import Login from "./components/Login/Login-Student";
import SignUp from "./components/SignUp";
import StudentDash from "./components/StudentDash/StudentDash";
import TextMobileStepper from "./components/SignUpStepper";

const routes = [
	{
		path: "/",
		exact: true,
		component: Login,
	},
	{
		path: "/profile",
		exact: true,
		component: StudentDash,
	},
	{
		path: "/signup",
		exact: true,
		component: SignUp,
	},
	{
		path: "/step",
		exact: true,
		component: TextMobileStepper,
	},
];

export default routes;
