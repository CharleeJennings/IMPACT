import mongoose from 'mongoose'
import bcryptjs from  'bcryptjs' ;
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';


const typeDefs = `
type Query
{
	users: [User]
	fetchUser(id: ID!) : User
  leaders: [Leader]
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
	birthday: String!
}

type Leader{


  email: String
  firstname: String!
  lastname: String
  password: String!
}

type Mutation{
	createUser(firstname: String!, lastname: String!, email : String!, password: String!, admin: Boolean ,  points: Int) : User
	updateAccess (id: ID!, accessCode : String!) : User
	updateAdmin(id: ID!, admin: Boolean!) : User
	deleteUser(id:ID!) : User
	deleteAllUser : User
  createLeader(firstname: String!, lastname: String!, password: String!) : Leader

}


`


const LeaderSchema = mongoose.Schema({


  email: String,
  firstname: String,
  lastname: String,
  password: String,




})



const UserSchema =mongoose.Schema({


		email : String,
    firstname: String,
    lastname: String,
		password: String,
		admin: Boolean,
		points: Number,
		birthday:  { type: Date, default: Date },


	});

export var Dup = false

LeaderSchema.methods.validPassword = function( pwd ) {
      return ( pwd == this.password );
  };
		UserSchema.methods.validPassword = function( pwd ) {
			    return ( bcryptjs.compareSync(pwd , this.password)  );
			};
const Leader = mongoose.model("Leaders", LeaderSchema)

const User = mongoose.model("user" , UserSchema )

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

				var dup = false
				await User.findOne({firstname: firstname, lastname: lastname}, (err, res) => {if (err){console.log("Error in connecting to MongoDB");} else if (res){  dup = true;};})
				if (dup)
				{
					console.log("Duplicate found on Database found on the name: " + firstname + " " + lastname);
					return null
				}
				else
				{
          var salt = bcryptjs.genSaltSync(10);
          var hash = bcryptjs.hashSync(password, salt);
					const user = new User ({firstname ,lastname, email , password: hash, points: 0})
					await user.save();
					return user;
				}
			},

			updateAccess: async (_ , {id, accessCode}) => {await User.findByIdAndUpdate(id, {accessCode});
			return true;},

			updateAdmin: async (_ , {id, admin}) => {await User.findByIdAndUpdate(id, {admin})},

			deleteUser: async (_ , {id}) => {await User.findByIdAndRemove(id)},

			deleteAllUser : async (_) =>{await User.deleteMany()},

      createLeader: async (_ , {firstname, lastname, password}) => {
        const lead = new Leader({firstname, lastname, password})
        await lead.save();
        return lead
      }


},


	}




export  {typeDefs, UserSchema, User, resolvers, Leader}
