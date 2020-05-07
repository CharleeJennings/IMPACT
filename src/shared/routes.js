import Login from "./components/Login/Login-Student";
import SignUp from "./components/SignUp";
import StudentDash from "./components/StudentDash/StudentDash";
import TextMobileStepper from "./components/SignUpStepper";
import TeacherSuit from "./components/TeacherSuit/index";

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
		path: "/teacher",
		exact: true,
		component: TeacherSuit,
	},
];

export default routes;
