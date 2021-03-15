const Discord = require('discord.js')
const client = new Discord.Client()

const Command = require('./command/command')
const Rib = require('./command/rib')
const Ping = require('./command/ping')
const PORT = process.env.PORT || 5000;


client.on('ready', function() {
    client.user.setActivity("Je sais qu'est ce que je dit")
  })

client.on('message', message => {
    Rib.parse(message)
    Ping.parse(message)
})

client.login(process.env.TOKEN);
