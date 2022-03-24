const Command = require('../str/command.js')

const db = require('quick.db')
module.exports = new Command({
  name: 'start',
  run: async (client, message, args) => {
    var channel = await db.fetch(`guilds.${message.guild.id}.channel`)
    if (!channel) {
      db.set(`guilds.${message.guild.id}.channel`, `${message.channelId}`)
      db.set(`guilds.${message.guild.id}.number`, 0)
      return message.reply({ content: "Canal setado com sucesso! Começe a contar!" })
    }
    if (channel) {
      return message.reply({ content: "Já tem um canal configurado neste servidor" })
    }
  }
})
