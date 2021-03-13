const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Rib extends Command {

    static match(message, args) {
        if(message.content === '!rib') {
            return true 
        }
    }

    static action(message, args) {
        const response = Math.floor(Math.random() * 27);

        if(response == 0) {
            message.channel.send("C'est vrai qu'on vient de jouer contre une équipe qui sont vraiment très forte.")
        }
        else if(response == 1) {
            message.channel.send("C'est beau ce stade Vélodrome qui est toujours plein à domicile comme à l'extérieur.")
        }
        else if(response == 2) {
            message.channel.send("Il fait attention pour qu'on a du peps.")
        }
        else if(response == 3) {
            message.channel.send("Inconsciemment, il faut pas s'endormir.")
        }
        else if(response == 4) {
            message.channel.send("Je pense qu'on espère qu'on va gagner.")
        }
        else if(response == 5) {
            message.channel.send("On est des joueurs qu'on va vite avec le ballon.")
        }
        else if(response == 6) {
            message.channel.send("Au niveau des sensations, je n'ai rien ressenti.")
        }
        else if(response == 7) {
            message.channel.send("C'est vrai que Scolari est un grand joueur.")
        }
        else if(response == 8) {
            message.channel.send("Maintenant il faudra faire avec sans Zizou.")
        }
        else if(response == 9) {
            message.channel.send("J'ai couru jusqu'à quand ce que je pouvais.")
        }
        else if(response == 10) {
            message.channel.send("Arrêtez de vous battez !")
        }
        else if(response == 11) {
            message.channel.send("Je suis quelqu'un que j'aime beaucoup rigoler, que j'aime blaguer.")
        }
        else if(response == 12) {
            message.channel.send("Je me sens énormément très bien avec ces joueurs.")
        }
        else if(response == 13) {
            message.channel.send("On dirait que c'était comme si que y avait rien changé hier.")
        }
        else if(response == 14) {
            message.channel.send("Le Touquet, c'est toujours une ville que j'aime bien venir.")
        }
        else if(response == 15) {
            message.channel.send("J'espère que la routourne va vite tourner.")
        }
        else if(response == 16) {
            message.channel.send("J'ai revenu en Coupe du Monde, j'avais beaucoup d'envie.")
        }
        else if(response == 17) {
            message.channel.send("Je suis passé par d'autres chemins aussi qu'a pas été facile.")
        }
        else if(response == 18) {
            message.channel.send("On a dur, franchement, on a dur !")
        }
        else if(response == 19) {
            message.channel.send("Chaque année je vieillis d'un an.")
        }
        else if(response == 20) {
            message.channel.send("Je pense que toute les personnes du Nord sont chaleureux")
        }
        else if(response == 21) {
            message.channel.send("On va jouer les tongolais")
        }
        else if(response == 22) {
            message.channel.send("C'est pour ça que ici j'ai passé de bons moments ici")
        }
        else if(response == 23) {
            message.channel.send("C'est deux joueurs qui sont importants pour nous et qu'on aura besoin de ces deux joueurs là")
        }
        else if(response == 24) {
            message.channel.send("Demain est un autre jour, faut avancer de l'avant")
        }
        else if(response == 25) {
            message.channel.send("Je pense que ce soir ça à été beaucoup meilleur")
        }
        else if(response == 26) {
            message.channel.send("Moi personnellement je me critique moi tout seul")
        }
        else if(response == 27) {
            message.channel.send("C'est un match qui se joue en deux matchs")
        }
    }
}