const token = process.env.TOKEN
const client = require('./structures/client/NewClient.js')

client.login(token);