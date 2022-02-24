const { bold, italic, strikethrough, underscore, spoiler, quote, blockQuote, inlineCode, codeBlock  } = require('@discordjs/builders');
const custom = require("../models/customCommands");


module.exports = {
    name: 'findemotes',
    aliases: [],
    permissions: ["ADMINISTRATOR"],
    description: "Create user profile",
    async execute(client, message, cmd, args, Discord){
        
        let emoteArray = Array.from(message.guild.emojis.cache.values())
        

        for (let i = 0; i < emoteArray.length; i++){
            if (emoteArray[i].animated){
                message.channel.send(codeBlock(`<a:${emoteArray[i].name}:${emoteArray[i].id}> Animated`));
            } else {
                message.channel.send(codeBlock(`<:${emoteArray[i].name}:${emoteArray[i].id}>`));
            }
            
        }
        

        
        
    }
}