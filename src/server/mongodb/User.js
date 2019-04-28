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
	pin : Int!
	admin : Boolean
	accessCode: String
	points : Int
}
type Mutation{
	createUser(firstname: String!, lastname: String!, email : String!, pin: String!, admin: Boolean , accessCode: String) : User
	updateAccess (id: ID!, accessCode : String!) : User
	updateAdmin(id: ID!, admin: Boolean!) : User
}
`


const UserSchema =mongoose.Schema({


		email : String,
    firstname: String,
    lastname: String,
		pin: String,
		admin: Boolean,
		accessCode: String,
		points: Number,


	});




		UserSchema.methods.validPin = function( pwd ) {
			    return ( bcryptjs.compareSync(pwd , this.pin) );
			};


const User = mongoose.model("Users" , UserSchema );


	const resolvers = {

		Query: {

			users : () => User.find()

		},


		Mutation:
		{
			createUser: async (_ , {firstname, lastname,email , pin}) => {
				var salt = bcryptjs.genSaltSync(10);
				var hash = bcryptjs.hashSync(pin, salt);
				const user = new User ({firstname ,lastname, email , pin: hash});
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
