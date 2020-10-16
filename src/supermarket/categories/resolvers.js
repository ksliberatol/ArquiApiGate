import { generalRequest, getRequest } from '../../utilities';
import { urlLogsign,
		portLogsign,
	 	entryPointLogsign,
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
		urlExam,
		portExam,
		entryPointExam,
		entryPointUQuiz,
		entryPointWQuiz,
		//Perfiles
		linkPerfiles,
		portPerfiles,
		entrada,



 } from './server';

const URLLogsign = `http://${urlLogsign}:${portLogsign}`;
const URLForumThreads = `http://${urlForum}:${portForum}/${entryPointForum}/${threadsForum}`;
const URLForumEntrys = `http://${urlForum}:${portForum}/${entryPointForum}/${entrysForum}`;
const URLTickets = `http://${urlTicket}:${portTicket}/${entryPointTicket}`;
const URLExam = `http://${urlExam}:${portExam}/${entryPointExam}`;
const URLUQuiz = `http://${urlExam}:${portExam}/${entryPointUQuiz}`;
const URLWQuiz = `http://${urlExam}:${portExam}/${entryPointWQuiz}`;
const URLper = `http://${linkPerfiles}:${portPerfiles}/${entrada}`;
const resolvers = {
	Query: {
		userById: (_, { id }) =>
			generalRequest(`${URLLogsign}/users/${id}`, 'GET'),
//Foro y soporte
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


	    allTickets: (_) =>
	        getRequest(URLTickets, ''),
	    ticketById: (_, { id }) =>
	        generalRequest(`${URLTickets}/${id}`, 'GET'),
// Examenes

		allExamLevels: (_) =>
			 getRequest(`${URLExam}/AllExams`, ''),
		examById: (_, {body}) =>
			 generalRequest(`${URLExam}/userExamLevel`, 'GET',body),

		 allUserQuiz: (_) =>
				getRequest(`${URLUQuiz}/userQuizes`, ''),
		 userQuizByIdQuiz: (_, {body}) =>
				generalRequest(`${URLUQuiz}/usersQuizes`, 'GET', body),
		 userQuizByUserID: (_, { body }) =>
				generalRequest(`${URLUQuiz}/quizOfUser`, 'GET', body),

		allWeekQuiz: (_) =>
			getRequest(`${URLWQuiz}/Quizes`, ''),
		weekQuizById: (_, { body }) =>
			generalRequest(`${URLWQuiz}/thisWeekQuiz`, 'GET', body),

			//Perfiles
			allUser: (_) =>
            getRequest(`${URLper}/all-users`, ''),
        perfilById: (_, { id }) =>
            generalRequest(`${URLper}/${id}`, 'GET'),




	},
	Mutation: {

		createUser: (_, { user }) =>
			generalRequest(`${URLLogsign}/auth/`, 'POST', user),

		// Foro Soporte
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

    createTicket: (_, { ticket }) =>
        generalRequest(`${URLTickets}/`, 'POST', ticket),
    updateTicket: (_, { id, ticket }) =>
        generalRequest(`${URLTickets}/${id}/`, 'PUT', ticket),
    deleteTicket: (_, { id }) =>
        generalRequest(`${URLTickets}/${id}/`, 'DELETE'),

	//Examenes
		createExam: (_, { body}) =>
			 generalRequest(`${URLExam}/newExamLevel`, 'POST', body),
		updateExam: (_, { body}) =>
			 generalRequest(`${URLExam}/completeExamLevel`, 'PUT', body),
		deleteExam: (_, { body }) =>
			 generalRequest(`${URLExam}/deleteExamLevel`, 'DELETE', body),

		createUserQuiz: (_, { body }) =>
			 generalRequest(`${URLUQuiz}/newQuiz`, 'POST', body),
		updateUserQuiz: (_, { body }) =>
			 generalRequest(`${URLUQuiz}/safeUserQuiz`, 'PUT', body),
		deleteUserQuiz: (_, { body}) =>
			 generalRequest(`${URLUQuiz}/deleteUserQuiz`, 'DELETE', body),

		createWeekQuiz: (_, { body }) =>
			 generalRequest(`${URLWQuiz}/newQuiz`, 'POST', body),
		updateWeekQuiz: (_, { body }) =>
			 generalRequest(`${URLWQuiz}/deactivateQuiz`, 'PUT', body),
		deleteWeekQuiz: (_, { body }) =>
			 generalRequest(`${URLWQuiz}/deleteQuiz`, 'DELETE', body),

			 //Perfil
			 
}

};

export default resolvers;
