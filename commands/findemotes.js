const { bold, italic, strikethrough, underscore, spoiler, quote, blockQuote, inlineCode, codeBlock  } = require('@discordjs/builders');
const custom = require("../models/customCommands");


module.exports = {
    name: 'findemotes',
    aliases: [],
    permissions: ["ADMINISTRATOR"],
    description: "Create user profile",
    async execute(client, message, cmd, args, Discord){
        let emotestring = "";
        let emoteArray = Array.from(message.guild.emojis.cache.values())
        

        for (let i = 0; i < emoteArray.length; i++){
            emotestring =  emotestring + `<${emoteArray[i].name}:${emoteArray[i].id}>\n`
        }
        

        message.channel.send(codeBlock(emotestring));
        
    }
}