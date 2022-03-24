const Command = require('../str/command.js')

const db = require('quick.db')
module.exports = new Command({
  name: 'restart',
  run: async (client, message, args) => {
    var game = await db.fetch(`guilds.${message.guild.id}.number`)
    if (game) {
      return message.channel.send({
        content: 'Já estamos em uma contagem, espere alguem quebrar a sequência para poder reiniciar!'
      })
    }
    if (!game) {
      db.set(`guilds.${message.guild.id}.lost`, false)
      db.set(`guilds.${message.guild.id}.number`, 0)
      db.delete(`guilds.${message.guild.id}.last`)
      db.delete(`guilds.${message.guild.id}.user`)

      ;
      return message.reply({ content: "Canal setado com sucesso! Começe a contar!" })
    }
  }
})