const fs = require('fs')
const path = require('path')
const { Collection, Client } = require('discord.js');

class base extends Client {
  constructor(opts) {
    super({
      intents: 32767,
      allowedMentions: {
        parse: ["users", "roles"],
        repliedUser: false
      },
      ...opts
    })
    this.commands = new Collection();
  }
  loadcommand() {
    try {
      let folder = 'src/cmd'
      let pasta = fs.readdirSync(folder)
      let command;
      for (let file of pasta) {
        command = require(path.join(process.cwd(), `${folder}/${file}`));
        console.log('Comando ' + command.name + ' carregado com sucesso!')
        this.commands.set(command.name, command);
      }
      console.log('Sucesso!')
    }
    catch (e) {
      console.log('Erro nos comandos: ' + e)
    }
  }
  loadevent() {
    let folder = 'src/evt'
    const categories = fs.readdirSync(folder)

    for (const event of categories) {
      const eventClass = require(path.join(process.cwd(), `${folder}/${event}`))
      const evt = new(eventClass)(this)

      this.on(evt.name, evt.execute)
    }

  }
}
module.exports = base