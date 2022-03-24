const Event = require('../str/event.js')

module.exports = class extends Event {
  constructor(client) {
    super(client, {
      name: 'ready'
    })
  }
  execute = async () => {
    this.client.user.setActivity(
      'Couting....',
      {
        type: "PLAYING"
      }
    )
    this.client.user.setStatus('online')

    console.log(`Bot ${this.client.user.username} has logged!`)

  }
}