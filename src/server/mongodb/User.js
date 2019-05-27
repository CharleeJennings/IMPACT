import mongoose from 'mongoose'
import bcryptjs from  'bcryptjs' ;


const typeDefs = `
type Query
{
	users: [User]
	fetchUser(id: ID!) : User
}
type User
{
	id: ID!
  firstname : String!
  lastname : String!
	email : String!
	password : String!
	admin : Boolean
	points : Int
}
type Mutation{
	createUser(firstname: String!, lastname: String!, email : String!, password: String!, admin: Boolean ,  points: Int) : User
	updateAccess (id: ID!, accessCode : String!) : User
	updateAdmin(id: ID!, admin: Boolean!) : User
	deleteUser(id:ID!) : User
	deleteAllUser : User

}


`



const UserSchema =mongoose.Schema({


		email : String,
    firstname: String,
    lastname: String,
		password: String,
		admin: Boolean,
		points: Number,


	});

export var Dup = false


		UserSchema.methods.validPassword = function( pwd ) {
			    return ( bcryptjs.compareSync(pwd , this.password) );
			};


const User = mongoose.model("Users" , UserSchema );

	const resolvers = {

		Query:
		{
			users : () => User.find(),
			fetchUser:  async (_ , {id}) =>
			{
				var sessionUser = {}
				await User.findById(id, function (err, user){sessionUser = user})
				return sessionUser
		  }
		},

		Mutation:
		{
			createUser: async (_ , {firstname, lastname,email , password}) => {
				var salt = bcryptjs.genSaltSync(10);
				var hash = bcryptjs.hashSync(password, salt);
				var dup = false
				await User.findOne({firstname: firstname, lastname: lastname}, (err, res) => {if (err){console.log("Error in connecting to MongoDB");} else if (res){  dup = true;};})
				if (dup)
				{
					console.log("Duplicate found on Database found on the name: " + firstname + " " + lastname);
					return null
				}
				else
				{
					const user = new User ({firstname ,lastname, email , password: hash, points: 0})
					await user.save();
					return user;
				}
			},

			updateAccess: async (_ , {id, accessCode}) => {await User.findByIdAndUpdate(id, {accessCode});
			return true;},

			updateAdmin: async (_ , {id, admin}) => {await User.findByIdAndUpdate(id, {admin})},

			deleteUser: async (_ , {id}) => {await User.findByIdAndRemove(id)},

			deleteAllUser : async (_) =>{await User.deleteMany()}


},


	}




export  {typeDefs, UserSchema, User, resolvers}
