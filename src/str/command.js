class Command {
  constructor(options) {
    this.name = options.name
    this.aliases = options.aliases
    this.run = options.run
  }
}
module.exports = Command