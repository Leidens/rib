const Discord = require('discord.js')
const client = new Discord.Client()

const Command = require('./command/command')
const Rib = require('./command/rib')
const PORT = process.env.PORT || 3000;


client.on('ready', function() {
    client.user.setActivity("Je sais qu'est ce que je dit")
  })

client.on('message', message => {
    Rib.parse(message)
})

client.login(process.env.TOKEN);
