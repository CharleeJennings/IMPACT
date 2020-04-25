import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import {GraphQLDate, GraphQLTime, GraphQLDateTime} from "graphql-iso-date";
import {GraphQLScalarType} from "graphql";

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
	birthday: Date!
}
  scalar Date
type Leader{


  email: String
  firstname: String!
  lastname: String
  password: String!
}

type Mutation{
	createUser(firstname: String!, lastname: String!, email : String!, password: String!, admin: Boolean ,  points: Int, birthday: Date!) : User
	updateAccess (id: ID!, accessCode : String!) : User
	updateAdmin(id: ID!, admin: Boolean!) : User
	deleteUser(id:ID!) : User
	deleteAllUser : User
  createLeader(firstname: String!, lastname: String!, password: String!) : Leader

}

`;

const LeaderSchema = mongoose.Schema({
	email: String,
	firstname: String,
	lastname: String,
	password: String,
});

const UserSchema = mongoose.Schema({
	email: String,
	firstname: String,
	lastname: String,
	password: String,
	admin: Boolean,
	points: Number,
	birthday: {type: Date, default: Date},
});

LeaderSchema.methods.validPassword = function(pwd) {
	return pwd == this.password;
};
UserSchema.methods.validPassword = function(pwd) {
	return pwd == this.password;
	//bcryptjs.compareSync(pwd, this.password);
};
const Leader = mongoose.model("Leaders", LeaderSchema);

const User = mongoose.model("user", UserSchema);

const resolvers = {
	Date: new GraphQLScalarType({
		name: "Date",
		description: "A date and time, represented as an ISO-8601 string",
		serialize: value => value.toISOString(),
		parseValue: value => new Date(value),
		parseLiteral: ast => new Date(ast.value),
	}),
	Query: {
		users: () => User.find(),
		fetchUser: async (_, {id}) => {
			var sessionUser = {};
			await User.findById(id, function(err, user) {
				sessionUser = user;
			});
			return sessionUser;
		},
	},

	Mutation: {
		createUser: async (_, {firstname, lastname, email, password, birthday}) => {
			var dup = false;
			await User.findOne({firstname: firstname, lastname: lastname}, (err, res) => {
				if (err) {
					console.log("Error in connecting to MongoDB");
				} else if (res) {
					dup = true;
				}
			});
			if (dup) {
				console.log("Duplicate found on Database found on the name: " + firstname + " " + lastname);
				return user;
			} else {
				var salt = bcryptjs.genSaltSync(10);
				var hash = bcryptjs.hashSync(password, salt);
				const user = new User({
					firstname,
					lastname,
					email,
					password: password,
					points: 0,
					birthday,
				});
				await user.save();
				return user;
			}
		},

		updateAccess: async (_, {id, accessCode}) => {
			await User.findByIdAndUpdate(id, {accessCode});
			return true;
		},

		updateAdmin: async (_, {id, admin}) => {
			await User.findByIdAndUpdate(id, {admin});
		},

		deleteUser: async (_, {id}) => {
			await User.findByIdAndRemove(id);
		},

		deleteAllUser: async _ => {
			await User.deleteMany();
		},

		createLeader: async (_, {firstname, lastname, password}) => {
			const lead = new Leader({firstname, lastname, password});
			await lead.save();
			return lead;
		},
	},
};

export {typeDefs, UserSchema, User, resolvers, Leader};
