const Discord = require('discord.js')
const bot = new Discord.Client()

const Command = require('./command/command')
const Rib = require('./command/rib')
const port = process.env.PORT || 3000;


bot.on('ready', function() {
    bot.user.setActivity("Je sais qu'est ce que je dit")
  })

bot.on('message', message => {
    Rib.parse(message)
})

bot.login(process.env.TOKEN);
