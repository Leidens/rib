const Discord = require('discord.js')
const bot = new Discord.Client()

const Command = require('./command/command')
const Rib = require('./command/rib')

bot.login ('ODIwMjI1ODQ0OTY2MDY0MTYw.YEyE2A.Z9eOH0f03UwHU9eQ3gulnO6jR3U')

bot.on('ready', function() {
    bot.user.setActivity("Je sais qu'est ce que je dit")
  })

bot.on('message', message => {
    Rib.parse(message)
})

