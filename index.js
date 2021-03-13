const Discord = require('discord.js')
const bot = new Discord.Client()

const Command = require('./command/command')
const Rib = require('./command/rib')


bot.on('ready', function() {
    bot.user.setActivity("Je sais qu'est ce que je dit")
  })

bot.on('message', message => {
    Rib.parse(message)
})

client.login(process.env.TOKEN);

