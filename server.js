import express from 'express'
const app = express()

import server from './schema.js'

server.applyMiddleware({
	app: app
})

const port = 4004 || process.env

app.listen(port, () => {
	console.log('Express server starts on port: ${port}!')
	console.log('http://localhost:${port}/graphql')
})

export default app