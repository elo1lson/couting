const db = require('quick.db')
module.exports = async (message) => {

  function isNumber(str) {
    return !isNaN(str)
  }
  if (isNumber(message.content)) {
    let msg = Number(message.content)

    if (msg > 0) {

      let channel = await db.get(`guilds.${message.guild.id}.channel`)
      let last = await db.get(`guilds.${message.guild.id}.last`)
      let cont = await db.get(`guilds.${message.guild.id}.number`)
      let user = await db.get(`guilds.${message.guild.id}`)
      let lost = await db.get(`guilds.${message.guild.id}.lost`)

      if (!channel) {
        return message.channel.send({
          content: 'Parece que você não configurou um canal para contar'
        })
      }

      if (message.channel.id === channel) {
        if (lost) {
          let user = await db.get(`guilds.${message.guild.id}.user`)
          let complete = ', e ele não reiniciou, por favor digite \`-restart\` para começar uma nova contagem'

          return message.reply({
            content: `A sequência foi quebrada por ${user}${complete}`
          })
        }
        console.log(message.author)
        if (message.author.id === last) {
          return message.channel.send({
            content: 'Você já digitou um numero! espere alguem digitar para chegar a sua vez novamente!'
          })
        }
        if (cont === msg - 1) {
          await db.add(`guilds.${message.guild.id}.number`, 1)
          var a = await db.set(`guilds.${message.guild.id}.last`, `${message.author.id}`)
          await message.react('✅')
          console.log(a)
        }
        if (cont != msg - 1) {
          await db.set(`guilds.${message.guild.id}.user`, `${message.author}`)
          await db.set(`guilds.${message.guild.id}.lost`, true)
          await db.delete(`guilds.${message.guild.id}.number`)
          await message.react('❌').then(m => {
            message.channel.send({
              content: 'Você quebrou a sequência! Digite `-restart` para começar uma nova contagem!'
            })
          })
        }
      }
    }
  }
}