import express from 'express'
const app = express()

import server from './schema.js'

server.applyMiddleware({
	app: app
})

const port = 4004 || process.env

app.listen(port, () => {
	console.log('Express server starts on port: 4004! 📊')
	console.log('http://localhost:4004/graphql')
})

export default app