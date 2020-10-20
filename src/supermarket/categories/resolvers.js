import { generalRequest, getRequest } from '../../utilities';
import {
		urlLogsign,
		portLogsign,
		//Foro
		urlForum,
		portForum,
		entryPointForum,
		threadsForum,
		entrysForum,
		//Soporte
		urlTicket,
		portTicket,
		entryPointTicket,
		//Examenes
		UQurl, 
		UQport, 
		UQentryPoint,

		Examurl,
		Examport,
		ExamentryPoint,

		WQurl,
		WQport,
		WQentryPoint,
		//Vocabulario
		categoryUrl, 
		categoryPort, 
		categoryEntryPoint,

		wordsUrl,
		wordsPort,
		wordsEntryPoint,
		//Perfil
		nodoPerfiles,
		puertoPerfiles, 
		allProfiles,
		postProfile,
		editProfile,
		editPassword,
		activeProfile,



 } from './server';
//LogSign
const URLLogsign = `http://${urlLogsign}:${portLogsign}`;
//Foro
const URLForumThreads = `http://${urlForum}:${portForum}/${entryPointForum}/${threadsForum}`;
const URLForumEntrys = `http://${urlForum}:${portForum}/${entryPointForum}/${entrysForum}`;
//Soporte
const URLTickets = `http://${urlTicket}:${portTicket}/${entryPointTicket}`;
//Examenes
const UQURL = `http://${UQurl}:${UQport}/${UQentryPoint}`;
const ExamURL = `http://${Examurl}:${Examport}/${ExamentryPoint}`;
const WQURL = `http://${WQurl}:${WQport}/${WQentryPoint}`;
//Vocabulario
const categoryURL = `http://${categoryUrl}:${categoryPort}/${categoryEntryPoint}`;
const wordsURL = `http://${wordsUrl}:${wordsPort}/${wordsEntryPoint}`;
//Perfiles 
const URLAllPerfiles = `http://${nodoPerfiles}:${puertoPerfiles}/${allProfiles}`;
const URLPostPerfiles = `http://${nodoPerfiles}:${puertoPerfiles}/${postProfile}`;
const URLEditarPerfiles = `http://${nodoPerfiles}:${puertoPerfiles}/${editProfile}`;
const URLEditarPassword = `http://${nodoPerfiles}:${puertoPerfiles}/${editPassword}`;
const URLActivarPerfile = `http://${nodoPerfiles}:${puertoPerfiles}/${activeProfile}`;

const resolvers = {
	Query: {
	//Logsign
		userById: (_, { id }) =>
			generalRequest(`${URLLogsign}/users/${id}`, 'GET'),
		allUsers: (_) =>
			generalRequest(`${URLLogsign}/users/`, 'GET'),
		
	// Foro
		allThreads: (_) =>
	        getRequest(URLForumThreads, ''),
	    threadById: (_, { id }) =>
	        generalRequest(`${URLForumThreads}/${id}`, 'GET'),
	    threadLevel: (_, { id, active }) =>
	        generalRequest(`${URLForumThreads}/level/${id}/${active}`, 'GET'),


	    allEntrys: (_) =>
	        getRequest(URLForumEntrys, ''),
	    entryById: (_, { id }) =>
	        generalRequest(`${URLForumEntrys}/${id}`, 'GET'),
	    entryThread: (_, { id, active }) =>
	        generalRequest(`${URLForumEntrys}/thread/${id}/${active}`, 'GET'),

	// Soporte
	    allTickets: (_) =>
	        getRequest(URLTickets, ''),
	    ticketById: (_, { id }) =>
	        generalRequest(`${URLTickets}/${id}`, 'GET'),
	// Examenes
		allUserQuiz: (_) =>
			getRequest(`${UQURL}/userQuizes`, ''),
		userQuizByIdQuiz: (_, { body }) =>
			generalRequest(`${UQURL}/usersQuizes`, 'GET', body),
		userQuizByUserID: (_, { body }) =>
			generalRequest(`${UQURL}/quizOfUser`, 'GET', body),

		allExamLevels: (_) =>
			getRequest(`${ExamURL}/AllExams`, ''),
		examById: (_, { body }) =>
			generalRequest(`${ExamURL}/userExamLevel`, 'GET',body),

		allWeekQuiz: (_) =>
			getRequest(`${WQURL}/Quizes`, ''),
		weekQuizById: (_, { body }) =>
			generalRequest(`${WQURL}/thisWeekQuiz`, 'GET', body),
	//Vocabulario
		allCategories: (_) =>
			getRequest(`${categoryURL}/AllCategories`, ''),
		categoryByName: (_, { body }) =>
			generalRequest(`${categoryURL}/category`, 'GET',body),
		categoryByLevel: (_, { body }) =>
			generalRequest(`${categoryURL}'/levelCategory'`, 'GET',body),

		allWords: (_) =>
			getRequest(`${wordsURL}/AllWords`, ''),
		wordsByName: (_, { body }) =>
			generalRequest(`${wordsURL}/word`, 'GET', body),
		wordsByCategory: (_, { body }) =>
			generalRequest(`${wordsURL}/categoryWord`, 'GET', body),
	//Perfil
		allPerfiles: (_) =>
			getRequest(URLAllPerfiles, ''),
		profileById: (_, { id }) =>
			generalRequest(`${URLPostPerfiles}/${id}`, 'GET'),


	},
	Mutation: {
	//LogSign
		registerUser: (_, { user }) =>
			generalRequest(`${URLLogsign}/auth/`, 'POST', user),
		logInUser: (_, { user }) =>
			generalRequest(`${URLLogsign}/auth/sign_in`, 'POST', user),

	// Foro
		createThread: (_, { thread }) =>
			generalRequest(`${URLForumThreads}/`, 'POST', thread),
		updateThread: (_, { id, thread }) =>
			generalRequest(`${URLForumThreads}/${id}/`, 'PUT', thread),
		deleteThread: (_, { id }) =>
			generalRequest(`${URLForumThreads}/${id}/`, 'DELETE'),

		createEntry: (_, { entry }) =>
			generalRequest(`${URLForumEntrys}/`, 'POST', entry),
		updateEntry: (_, { id, entry }) =>
			generalRequest(`${URLForumEntrys}/${id}/`, 'PUT', entry),
		deleteEntry: (_, { id }) =>
			generalRequest(`${URLForumEntrys}/${id}/`, 'DELETE'),
	//Soporte
		createTicket: (_, { ticket }) =>
			generalRequest(`${URLTickets}/`, 'POST', ticket),
		updateTicket: (_, { id, ticket }) =>
			generalRequest(`${URLTickets}/${id}/`, 'PUT', ticket),
		deleteTicket: (_, { id }) =>
			generalRequest(`${URLTickets}/${id}/`, 'DELETE'),

	//Examenes
		createUserQuiz: (_, { body }) =>
			generalRequest(`${UQURL}/newQuiz`, 'POST', body),
		deleteUserQuiz: (_, { body }) =>
			generalRequest(`${UQURL}/deleteUserQuiz`, 'DELETE', body),

		createExam: (_, { body }) =>
			generalRequest(`${ExamURL}/newExamLevel`, 'POST', body),
		updateExam: (_, { body }) =>
			generalRequest(`${ExamURL}/completeExamLevel`, 'PUT', body),
		deleteExam: (_, { body }) =>
			generalRequest(`${ExamURL}/deleteExamLevel`, 'DELETE', body),
		
		createWeekQuiz: (_, { body }) =>
			generalRequest(`${WQURL}/newQuiz`, 'POST', body),
		updateWeekQuiz: (_, { body }) =>
			generalRequest(`${WQURL}/deactivateQuiz`, 'PUT', body),
		deleteWeekQuiz: (_, { body }) =>
			generalRequest(`${WQURL}/deleteQuiz`, 'DELETE', body),

	//Vocabulario
		createCategory: (_, { body }) =>
			generalRequest(`${categoryURL}/newCategory`, 'POST', body),
		updateCategory: (_, { body }) =>
			generalRequest(`${categoryURL}/updateCategory`, 'PUT', body),
		deleteCategory: (_, { body }) =>
			generalRequest(`${categoryURL}/deleteCategory`, 'DELETE', body),

		createWord: (_, { body }) =>
			generalRequest(`${wordsURL}/newWord`, 'POST', body),
		updateWord: (_, { body }) =>
			generalRequest(`${wordsURL}/updateWord`, 'PUT', body),
		deleteWord: (_, { body }) =>
			generalRequest(`${wordsURL}/deleteWord`, 'DELETE', body),
	//Perfil
		createProfile: (_, { perfil }) =>
			generalRequest(`${URLPostPerfiles}/`, 'POST', perfil),
		updateProfile: (_, { id, perfil }) =>
			generalRequest(`${URLEditarPerfiles}/${id}`, 'PUT', perfil),
		updateProfilePassword: (_, { id, perfil }) =>
			generalRequest(`${URLEditarPassword}/${id}`, 'PUT', perfil),
		deleteProfile: (_, { id ,perfil }) =>
			generalRequest(`${URLActivarPerfile}/${id}`, 'PUT', perfil),

			 
}

};

export default resolvers;
