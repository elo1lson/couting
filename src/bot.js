const base = require('./str/client.js')
const token = process.env.TOKEN

const bot = new base()
//bot.loadcommand()
bot.loadevent()
bot.login(token);
