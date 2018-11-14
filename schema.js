import { ApolloServer } from 'apollo-server-express'

import typedefs from './types.js'
import resolvers from './resolvers.js'

const server = new ApolloServer({
	typeDefs: typedefs,
	resolvers: resolvers,
	playground: {
		endpoint: 'http://localhost:4004/graphql',
		settings: {
			'editor.theme': 'dark'
		}
	}
})

export default server