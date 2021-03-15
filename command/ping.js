const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Ping extends Command {

    static match(message, args) {
        if(message.content === '!ping') {
            return true 
        }
    }

    static action(message, args) {
        const response = Math.floor(Math.random() * 2);

        if(response == 0) {
            message.channel.send("D'ou tu me paing ? Tu croivés que j'ai que ça à fait ?")
        }
        else if(response == 1) {
            message.channel.send("Si tu continuez, ça va pas être très froid pour ta tronche !")
        }
    }
}