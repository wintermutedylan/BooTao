const { userMention } = require("@discordjs/builders");
const custom = require("../models/customCommands");
const { inlineCode, codeBlock } = require('@discordjs/builders');

module.exports = {
    name: 'say',
    aliases: [],
    permissions: [],
    description: "Create user profile",
    async execute(client, message, cmd, args, Discord){
        var modRole = "830700055539089456";
        var guideRole = "831221217364017202";
        var ID = message.author.id;
        var target = message.guild.members.cache.get(ID);
        var channel = args[0];
        var response = args.slice(1).join(" ");
        
        if (target.roles.cache.some(role => role.id === modRole || role.id === guideRole)){

        if (channel.startsWith('<#') && channel.endsWith('>')) {
            channel = channel.slice(2, -1);
        }
        try {
            client.channels.cache.get(channel).send(response);
        } catch(err){
            message.reply("There was an error using this command, make sure to mention a channel");
            
            client.channels.cache.get("838666046327619604").send(codeBlock('js', err));
        }
    } else {
        message.channel.send("You don't have the required permissions to use this command");
        

    }

        
    }
}