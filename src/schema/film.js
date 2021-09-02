export default `
type Film {
    id: String
    film: String
    times: Int
    watched: Boolean
    createdOn: String
}
type Query {
    getFilms: [Film]
    getFilmById(id: String!): Film
}
type Mutation {
    createFilm(
        film: String!, 
        times: Int!, 
        watched: Boolean!, 
        createdOn: String!
    ): Film
    updateFilm(
        id: Int!
        film: String, 
        times: Int, 
        watched: Boolean, 
        createdOn: String
    ): Boolean
    deleteFilm(id: Int!): Boolean
}
`;
