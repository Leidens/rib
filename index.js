const Discord = require('discord.js')
const bot = new Discord.Client()

const Command = require('./command/command')
const Rib = require('./command/rib')
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Exemple app écoute le port 3000`)
});


bot.on('ready', function() {
    bot.user.setActivity("Je sais qu'est ce que je dit")
  })

bot.on('message', message => {
    Rib.parse(message)
})

bot.login(process.env.TOKEN);
