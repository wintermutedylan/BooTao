const { userMention } = require("@discordjs/builders");
const custom = require("../models/customCommands");

module.exports = {
    name: 'coinflip',
    aliases: [],
    permissions: [],
    description: "Create user profile",
    async execute(client, message, cmd, args, Discord){
        

        const result = Math.random() < 0.5 ? "Heads!" : "Tails!";

        message.channel.send(result);



        
        



    }
}