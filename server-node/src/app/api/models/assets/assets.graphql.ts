import {
    GraphQLInterfaceType,
    GraphQLFieldConfig,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInputObjectType,
    GraphQLUnionType,
    GraphQLEnumType,
    GraphQLObjectType,
    GraphQLNonNull
} from "graphql";

export const AssetInterface: GraphQLInterfaceType = new GraphQLInterfaceType({
	name: "AssetInterface",
	fields: {
		id: { type: GraphQLID },
		path: { type: GraphQLString },
		originalname: { type: GraphQLString },
		mimetype: { type: GraphQLString},
		filename: { type: GraphQLString }
	},
	resolveType(value) {
        return Asset
    }
})

export const Asset: GraphQLObjectType = new GraphQLObjectType({
	name: "Asset",
	interfaces: [AssetInterface],
	fields: {
		id: { type: GraphQLID },
		path: { type: GraphQLString },
		originalname: { type: GraphQLString },
		mimetype: { type: GraphQLString},
		filename: { type: GraphQLString }
	}
})
