

const User = mongoose.model("Users" , {


		name : String,
		password: String,
		admin: Boolean,
		accessCode: String


	});

export default User
