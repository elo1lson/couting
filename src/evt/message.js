const Event = require('../str/event.js')
const engine = require('../engine.js')
module.exports = class extends Event {
  constructor(client) {
    super(client, {
      name: 'messageCreate'
    })
  }
  execute = async (message) => {
    if (message.attachments.size > 0) return
    if (message.author.bot) return;

    engine(message)

    let prefix = process.env.PREFIX
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase()
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    if (!message.content.startsWith(prefix)) return;
    if (cmd.length === 0) return;
    let command = this.client.commands.get(cmd)

    try {
      command.run(this.client, message, args)
    } catch (err) {
      console.error('Erro:' + err);
    }
  }
}