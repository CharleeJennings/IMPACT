import mongoose from 'mongoose'
import bcryptjs from  'bcryptjs' ;


const typeDefs = `
type Query
{
	users: [User]
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




		UserSchema.methods.validPassword = function( pwd ) {
			    return ( bcryptjs.compareSync(pwd , this.password) );
			};


const User = mongoose.model("Users" , UserSchema );

	const resolvers = {

		Query:
		{
			users : () => User.find()
		},

		Mutation:
		{
			createUser: async (_ , {firstname, lastname,email , password}) => {
				var salt = bcryptjs.genSaltSync(10);
				var hash = bcryptjs.hashSync(password, salt);
				const user = new User ({firstname ,lastname, email , password: hash, points: 0});
				 await user.save();
				return user;

			},

			updateAccess: async (_ , {id, accessCode}) => {await User.findByIdAndUpdate(id, {accessCode});
			return true;},

			updateAdmin: async (_ , {id, admin}) => {await User.findByIdAndUpdate(id, {admin})},

			deleteUser: async (_ , {id}) => {await User.findByIdAndRemove(id)},

			deleteAllUser : async (_) =>{await User.deleteMany()}


},


	}




export  {typeDefs, UserSchema, User, resolvers}
