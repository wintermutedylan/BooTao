const { userMention } = require("@discordjs/builders");
const custom = require("../models/customCommands");

module.exports = {
    name: 'editcommand',
    aliases: [],
    permissions: [],
    description: "edit custom command",
    async execute(client, message, cmd, args, Discord){

        var ID = message.author.id;
        let customCommand;
        var target = message.guild.members.cache.get(ID);
        var modRole = "830700055539089456";
        var staffRole = "915603340744871986";
        

        if (target.roles.cache.some(role => role.id === modRole || role.id === staffRole)){
            const name = args[0].toLowerCase();
            const response = args.slice(1).join(" ");
            if (!name) return message.channel.send('Please specify a name for the Command');
            if (!response) return message.channel.send('Please specify a response for the Command');

            customCommand = await custom.findOne({ guildID: message.guild.id, commandName: name});
            if (!customCommand) return message.channel.send('This custom commands does not exist!');
            var oldResponse = customCommand.responseContent;

            try {
                await custom.findOneAndUpdate({ guildID: message.guild.id, commandName: name},
                    {
                        $set: {
                            responseContent: response
                        },
                    }
                );

            } catch(err){
                client.channels.cache.get("838666046327619604").send(codeBlock('js', err));
            }

            message.channel.send(`Edited **${name}**`);
            const d = new Date(message.createdTimestamp);
            d.setMilliseconds(0);
            d.setSeconds(0);
            try {
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#FFBD33')
                .setTitle("Quote Edited")
                .setDescription(`**${name}** has been edited`)
                .addFields(
                    {name: 'Responsible Staff', value: `${userMention(message.author.id)}`, inline: true},
                    {name: 'Quote Name', value: `${name}`, inline: true},
                    {name: 'Quote Was', value: `${oldResponse}`},
                    {name: 'Quote Is', value: `${response}`},
                    {name: 'Edited At', value: `${d.toUTCString()}`}

                )
                
                client.channels.cache.get("838666031332851713").send({ embeds: [newEmbed] });
            }catch(err){
                message.reply("There was an error using this command, make sure to mention a channel");
                 
                client.channels.cache.get("838666046327619604").send(codeBlock('js', err));
            }


            

            
        } else {
            message.channel.send("You don't have the required permissions to use this command");
            

        }

        


        
    }
}