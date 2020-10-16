import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	userMutations,
	userQueries,
	userTypeDef,

	threadMutations,
  threadQueries,
  threadTypeDef,
  entryTypeDef,
  entryQueries,
  entryMutations,

  ticketTypeDef,
  ticketQueries,
  ticketMutations,

 	examLevelTypeDef,
 	weekQuizTypeDef,
 	userQuizTypeDef,
 	examLevelMutations,
	weekQuizMutations,
	userQuizMutations,
	examLevelQueries,
	weekQuizQueries,
	userQuizQueries,

  perfilQueries,
  perfilTypeDef,


} from './supermarket/categories/typeDefs';

import categoryResolvers from './supermarket/categories/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		userTypeDef,

		threadTypeDef,
    entryTypeDef,

    ticketTypeDef,

		examLevelTypeDef,
		weekQuizTypeDef,
		userQuizTypeDef,

		perfilTypeDef

	],
	[
		userQueries,

		threadQueries,
    entryQueries,

    ticketQueries,

		examLevelQueries,
		weekQuizQueries,
		userQuizQueries,

		 perfilQueries
	],
	[
		userMutations,

		threadMutations,
    entryMutations,

    ticketMutations,

		examLevelMutations,
		weekQuizMutations,
		userQuizMutations,



	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		categoryResolvers
	)
});
