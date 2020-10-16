export const userTypeDef = `
  type User {
    status: String
    id: Int
    name: String

}

  input UserInput {

    email:String
    name:String
    nickname:String
    password:Int
    password_confirmation:Int
  }`;

export const userQueries = `
      userById(id: Int!): User
  `;

export const userMutations = `
    createUser(user: UserInput!): User

`;
// Foro soporte
export const threadTypeDef = `
    type Thread{
        _id: String!
        title: String!
        description: String!
        levelId: String!
        userName: String!
        userId: String!
        active: Boolean!
    }
  input ThreadInput {
        _id: String
        title: String!
        description: String
        levelId: String
        userName: String
        userId: String
        active: Boolean
  }`;

export const threadQueries = `
      allThreads: [Thread]!
      threadLevel(id: String!, active: String!): [Thread]!
      threadById(id: String!): Thread!
  `;

export const threadMutations = `
    createThread(thread: ThreadInput!): Thread!
    updateThread(id: String!, thread: ThreadInput!): Thread!
    deleteThread(id: String!): String
`;


export const entryTypeDef = `
    type Entry{
        _id: String!
        message: String!
        threadId: String!
        userName: String!
        userId: String!
        active: Boolean!
        isAuthor: Boolean!
    }
  input EntryInput {
        _id: String
        message: String!
        threadId: String!
        userName: String!
        userId: String!
        active: Boolean
        isAuthor: Boolean
  }`;

export const entryQueries = `
      allEntrys: [Entry]!
      entryThread(id: String!, active: String!): [Entry]!
      entryById(id: String!): Entry!
  `;

export const entryMutations = `
    createEntry(entry: EntryInput!): Entry!
    updateEntry(id: String!, entry: EntryInput!): Entry!
    deleteEntry(id: String!): String
`;

export const ticketTypeDef = `
    type Ticket{
        id: String!
        userName: String!
        section: String!
        issue: String!
        response: String!
    }
  input TicketInput {
        id: String
        userName: String!
        section: String!
        issue: String!
        response: String!
  }`;

export const ticketQueries = `
      allTickets: [Ticket]!
      ticketById(id: String!): Ticket!
  `;

export const ticketMutations = `
    createTicket(ticket: TicketInput!): Ticket!
    updateTicket(id: String!, ticket: TicketInput!): Ticket!
    deleteTicket(id: String!): String
`;
// Examenes
export const examLevelTypeDef = `
 type ExamLevel {
    _id: String
    userId: Int
    level: String
    words: [String]
    date: String
    correctWords: [String]
    pass: Boolean
 }
 input ExamLevelInput {
     _id: String
     userId: Int
     level: String
     words: [String]
     date: String
     correctWords: [String]
     pass: Boolean
 }`;

export const examLevelQueries = `
     allExamLevels: [ExamLevel]
     examById(body: ExamLevelInput): ExamLevel
 `;

export const examLevelMutations = `
   createExam(body: ExamLevelInput): ExamLevel
   updateExam(body: ExamLevelInput): ExamLevel
   deleteExam(body: ExamLevelInput): ExamLevel
`;


export const userQuizTypeDef = `
 type UserQuiz {
     userId: Int
     idQuiz: Int
     words:  [String]
    date: String
     correctWords: [String]
     score: Int
 }
 input UserQuizInput {
     userId: Int
     idQuiz: Int
     words: [String]
     date: String
     correctWords: [String]
     score: Int
 }`;

 export const userQuizQueries = `
      allUserQuiz: [UserQuiz]
      userQuizByIdQuiz(body: UserQuizInput): UserQuiz
      userQuizByUserID(body: UserQuizInput): UserQuiz
  `;

 export const userQuizMutations = `
    createUserQuiz(body: UserQuizInput): UserQuiz
    updateUserQuiz(body: UserQuizInput): UserQuiz
    deleteUserQuiz(body: UserQuizInput): UserQuiz
 `;


export const weekQuizTypeDef = `
 type WeekQuiz {
     words: [String]
     date: String
     active: Boolean
 }
 input WeekQuizInput {
     words: [String]
     date: String
     active: Boolean
 }`;

export const weekQuizQueries = `
     allWeekQuiz: [WeekQuiz]
     weekQuizById(body: WeekQuizInput): WeekQuiz
 `;

export const weekQuizMutations = `
   createWeekQuiz(body: WeekQuizInput): WeekQuiz
   updateWeekQuiz(body: WeekQuizInput): WeekQuiz
   deleteWeekQuiz(body: WeekQuizInput): WeekQuiz
`;
// Perfiles
export const perfilTypeDef = `
  type User2 {
      id: Int!
      nombre: String!
      apellido:String!
      email: String!
      password: String!
  }
  input User2Input {
    id:Int
    nombre: String
    apellido:String
    email: String
    password: String
  }`;

export const perfilQueries = `
      allUser: [User2]!
      perfilById(id: Int!): User2!
  `;
