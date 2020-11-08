export const userTypeDef = `
type aUser {
  id: Int
  provider: String
  uid: String
  allow_password_change: String
  name: String
  nickname: String
  image: String
  email: String
  created_at: String
  updated_at: String
}
type data {
  id: Int
  provider: String
  uid: String
  allow_password_change: String
  name: String
  nickname: String
  image: String
  email: String
  created_at: String
  updated_at: String
}
type User {
  data: data
}
type Response {
  status: String
  data:data
}
input UserInput {

  email:String
  name:String
  nickname:String
  password:String
  password_confirmation:String
}

type sessionData {
  id: Int!
  email: String!
  name: String!
  nickname: String!
  image: String
  token: String!
  type: String!
  client: String!
  uid: String!
}
input SessionInput {
  email: String!
  password: String!
}
`;

export const userQueries = `
      userById(id: Int!): User
      allUsers: [aUser]!
  `;

export const userMutations = `
    registerUser(user: UserInput!): Response
    logInUser(session: SessionInput!): sessionData!

`;
// Foro
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
// Soporte
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
export const userQuizTypeDef = `
  type UserQuiz {
      userId: Int
      idQuiz: Int
      words: [String]
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
    deleteUserQuiz(body: UserQuizInput): UserQuiz
`;

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
export const weekQuizTypeDef = `
  type WeekQuiz {
      idQuiz: Int
      words: [String]
      date: String
      active: Boolean
  }
  input WeekQuizInput {
      idQuiz: Int
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

//Vocabulario

export const categoryTypeDef = `
  type Category {
     name: String
     level: String
  }
  input CategoryInput {
     name: String
     level: String
  }`;

export const categoryQueries = `
      allCategories: [Category]
      categoryByName(body: CategoryInput): Category
      categoryByLevel(body: CategoryInput): Category
  `;

export const categoryMutations = `
    createCategory(body: CategoryInput): Category
    updateCategory(body: CategoryInput): Category
    deleteCategory(body: CategoryInput): Category
`;

export const wordsTypeDef = `
  type Words {
    name: String
    category: String
    image: String
    linkW: String
    meaning: String
  }
  input WordsInput {
    name: String
    category: String
    image: String
    linkW: String
    meaning: String
  }`;

export const wordsQueries = `
      allWords: [Words]
      wordsByName(body: WordsInput): Words
      wordsByCategory(body: WordsInput): Words
  `;

export const wordsMutations = `
    createWord(body: WordsInput): Words
    updateWord(body: WordsInput): Words
    deleteWord(body: WordsInput): Words
`;

//Perfil

export const perfilTypeDef = `
  type Perfil {
      id: Int
      nombre: String
      segundoNombre: String
      apellido: String
      segundoApellido: String
      email: String
      constrasena: String
      estado: Boolean
      ubicacion: String
      descripcion: String
  }
  input PerfilInput {
      id: Int
      nombre: String
      segundoNombre: String
      apellido: String
      segundoApellido: String
      email: String
      constrasena: String
      estado: Boolean
      ubicacion: String
      descripcion: String
  }`;
 
export const perfilQueries = `
      allPerfiles: [Perfil!]
      profileById(id: Int!): Perfil!
  `;
 
export const perfilMutations = `
    createProfile(perfil: PerfilInput!): String!
    updateProfile(id: Int!, perfil: PerfilInput!): String!
    updateProfilePassword(id: Int!, perfil: PerfilInput!): String!
    deleteProfile(id: Int!, perfil: PerfilInput!): String!
`;
 
