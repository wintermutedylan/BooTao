const { userMention } = require("@discordjs/builders");
const custom = require("../models/customCommands");

module.exports = {
    name: 'delete',
    aliases: [],
    permissions: [],
    description: "Create user profile",
    async execute(client, message, cmd, args, Discord){

        var ID = message.author.id;
        let customCommand;
        var target = message.guild.members.cache.get(ID);
        var modRole = "830700055539089456";
        var staffRole = "915603340744871986";
        

        if (target.roles.cache.some(role => role.id === modRole || role.id === staffRole)){
            
            
            try{
                var name = args[0];
            
                if (!name) return message.channel.send('Please specify a name');
                name = name.toLowerCase();
    

            } catch(err){
                client.channels.cache.get("838666046327619604").send(codeBlock('js', err));
            }
            

            customCommand = await custom.findOne({ guildID: message.guild.id, commandName: name});
            
            if (!customCommand) return message.channel.send('That custom command does not exist!');
            const resp = customCommand.responseContent;

            await custom.findOneAndDelete({ guildID: message.guild.id, commandName: name});

            message.channel.send(`Removed **${name}**`);
            const d = new Date(message.createdTimestamp);
            d.setMilliseconds(0);
            d.setSeconds(0);
            try{

                const newEmbed = new Discord.MessageEmbed()
                .setColor('#f0263e')
                .setTitle("Quote Removed")
                .setDescription(`**${name}** has been removed`)
                .addFields(
                    {name: 'Responsible Staff', value: `${userMention(message.author.id)}`, inline: true},
                    {name: 'Quote Name', value: `${name}`, inline: true},
                    {name: 'Quote Content', value: `${resp}`},
                    {name: 'Removed At', value: `${d.toUTCString()}`}

                )
            
                client.channels.cache.get("838666031332851713").send({ embeds: [newEmbed] });
            } catch(err){
                
                
                client.channels.cache.get("838666046327619604").send(codeBlock('js', err));
            }


            

            
        } else {
            message.channel.send("You don't have the required permissions to use this command");
            

        }

        


        
    }
}