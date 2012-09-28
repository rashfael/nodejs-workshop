express = require 'express'

app = module.exports = express()

app.configure ->
	app.use app.router
	app.set 'views', __dirname + '/views'
	app.set 'view engine', 'jade'
	app.use express.errorHandler {dumpExceptions: true, showStack:true }

app.get '/', (req, res) ->
	# res.send 'Hello World'
	res.sendfile __dirname + '/views/index.html'
	# res.render 'index'

app.get '/echo', (req, res) ->
	res.send req.query.echo

app.listen 9000, ->
	console.log 'server listening on http://localhost:9000'