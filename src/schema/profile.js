export default `
type Profile {
    id: String
    username: String
    email: String
    gender: String
    age: Int
    address: String
    education: String
    mobileno: String
    linkedin: String
    description: String
}
type Query {
    getProfile: [Profile]
    getProfileById(id: String!): Profile
}
type Mutation {
    createProfile(
        username: String!,
        email: String!,
        gender: String,
        age: Int,
        address: String,
        education: String,
        mobileno: String,
        linkedin: String,
        description: String
    ): Profile
    updateProfile(
        id: String!,
        username: String,
        email: String,
        gender: String,
        age: Int,
        address: String,
        education: String,
        mobileno: String,
        linkedin: String,
        description: String
    ): Boolean
    deleteProfile(id: String!): Boolean
}
`;
