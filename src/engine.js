//const db = require('quick.db')
module.exports = function(message) {
  if (message.author.bot) return
  if (message.attachments.size > 0) return
  //let channel = await db.get(`guilds.${message.guild.id}.channel`)

  function isNumber(str) {
    return !isNaN(str)
  }
  if (isNumber(message.content)) {
    let msg = Number(message.content)
    if (msg > 0) {
    /*  if (!channel) {
        return message.channel.send({
          content: 'Parece que você não configurou um canal para contar'
        })
      }*/
      console.log(value)
    }
  }
  /*
  var channel = db.get(`servers.${message.guild.id}.channel`)
  if (message.attachments.size > 0) return
  if (message.content >= 0 && message.channelId == channel && message.attachments == undefined) {
    var last = db.get(`servers.${message.guild.id}.lastuser`)
    console.log(message.attachments.size > 0)
    if (message.author.id == last) {
      return message.channel.send({ content: "Você já digitou um número, Aguarde outro usuário digitar para chegar sua vez!" })
    } else {

      console.log(db.get(`servers.${message.guild.id}.number`))
      var value = Number(message.content)
      console.log(value)
      if (db.get(`servers.${message.guild.id}.number`) == (message.content - 1)) {
        db.add(`servers.${message.guild.id}.number`, 1)
        db.set(`servers.${message.guild.id}.lastuser`, `${message.author.id}`)
        await message.react("✅").then(() => console.log("Adicionado")).catch(e => console.log(e))
      } else {
        await message.react("❌")
        db.delete(`servers.${message.guild.id}.number`)
        db.delete(`servers.${message.guild.id}.lastuser`)
        return message.channel.send({ content: "Você quebrou a sequência! digite `-restart` para reiniciar" })

      }
    }
  }*/
}