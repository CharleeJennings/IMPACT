import mongoose from 'mongoose'
import bcrypt from 'bcrypt';


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
	accessCode: String
}
type Mutation{
	createUser(firstname: String!, lastname: String!, email : String!, password: String!, admin: Boolean , accessCode: String) : User
	updateAccess (id: ID!, accessCode : String!) : User
	updateAdmin(id: ID!, admin: Boolean!) : User
}
`


const UserSchema =mongoose.Schema({


		email : String,
    firstname: String,
    lastname: String,
		password: String,
		admin: Boolean,
		accessCode: String


	});



		UserSchema.methods.validPassword = function( pwd ) {
			    return ( this.password === pwd );
			};


const User = mongoose.model("Users" , UserSchema );


	const resolvers = {

		Query: {

			users : () => User.find()

		},


		Mutation:
		{
			createUser: async (_ , {firstname, lastname,email , password}) => {
				
				const user = new User ({firstname ,lastname, email , password});
				 await user.save();
				return user;

			},
			updateAccess: async (_ , {id, accessCode}) => {await User.findByIdAndUpdate(id, {accessCode});
			return true;
		},
		updateAdmin: async (_ , {id, admin}) => {await User.findByIdAndUpdate(id, {admin})}
	}
	}




export  {typeDefs, UserSchema, User, resolvers}
