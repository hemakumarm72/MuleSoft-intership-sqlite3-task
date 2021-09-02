export default `
type User {
    id: String
    email: String
    password: String
}

type AuthResponse {
    data: User
    message: String!
}

type Query {
    getUser: [User]
    getUserById(id: String!): User
}
type Mutation {
    createdRegister(
        email: String!,
        password: String!
    ): AuthResponse

    loginUser(
        email: String!,
        password: String!
    ): Boolean
}
`;
