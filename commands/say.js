const { userMention } = require("@discordjs/builders");
const custom = require("../models/customCommands");
const { inlineCode, codeBlock } = require('@discordjs/builders');

module.exports = {
    name: 'say',
    aliases: [],
    permissions: [],
    description: "Create user profile",
    async execute(client, message, cmd, args, Discord){
        var channel = args[0];
        var response = args.slice(1).join(" ");

        if (channel.startsWith('<#') && channel.endsWith('>')) {
            channel = channel.slice(2, -1);
        }
        try {
            client.channels.cache.get(channel).send(response);
        } catch(err){
            message.reply("There was an error using this command, make sure to mention a channel");
            
            client.channels.cache.get("838666046327619604").send(codeBlock('js', err));
        }

        
    }
}