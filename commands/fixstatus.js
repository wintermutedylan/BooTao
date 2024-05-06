const { userMention } = require("@discordjs/builders");
const custom = require("../models/customCommands");

module.exports = {
    name: 'fixstatus',
    aliases: [],
    permissions: [],
    description: "Create user profile",
    async execute(client, message, cmd, args, Discord){
        
        
        var ID = message.author.id;
        var target = message.guild.members.cache.get(ID);
        var modRole = "830700055539089456";
        var staffRole = "915603340744871986";
       
        if (target.roles.cache.some(role => role.id === modRole || role.id === staffRole)){
            client.user.setActivity("Pranks", {type: 'PLAYING'});
            message.channel.send(`Status Fixed.`);

        } else {
            message.channel.send("You don't have the required permissions to use this command");
            

        }
        

       


        
        



    }
}