import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
//Logsign
	userMutations,
	userQueries,
	userTypeDef,
//Foro
	threadMutations,
	threadQueries,
	threadTypeDef,
	entryTypeDef,
	entryQueries,
	entryMutations,
//Soporte
	ticketTypeDef,
	ticketQueries,
	ticketMutations,
//Examenes
	examLevelTypeDef,
	weekQuizTypeDef,
	userQuizTypeDef,
	examLevelQueries,
	weekQuizQueries,
	userQuizQueries,
	examLevelMutations,
	weekQuizMutations,
	userQuizMutations,
//Vocabulario
	categoryMutations,
	wordMutations,
	categoryQueries,
	wordQueries,
	categoryTypeDef,
	wordTypeDef,



} from './supermarket/categories/typeDefs';

import categoryResolvers from './supermarket/categories/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
	//LogSign
		userTypeDef,
	//Foro
		threadTypeDef,
    	entryTypeDef,
	//Soporte
    	ticketTypeDef,
	//Examenes
		examLevelTypeDef,
		weekQuizTypeDef,
		userQuizTypeDef,
	//Vocabulario
		categoryTypeDef,
		wordTypeDef,
	],
	[ 
	//Logsign
		userQueries,
	//Foro
		threadQueries,
    	entryQueries,
	//Soporte
   		ticketQueries,
	//Examenes
		examLevelQueries,
		weekQuizQueries,
		userQuizQueries,
	//Vocabulario
		categoryQueries,
		wordQueries,
	],
	[
	//LogSign
		userMutations,
	//Foro
		threadMutations,
    	entryMutations,
	//Soporte
   		ticketMutations,
	//Examenes
		examLevelMutations,
		weekQuizMutations,
		userQuizMutations,
	//Vocabulario
		categoryMutations,
		wordMutations,
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
