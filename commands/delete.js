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
        var milimRole = "879846023449690122"; //take this out later only for testing stuff

        if (target.roles.cache.some(role => role.id === modRole || role.id === staffRole || role.id === milimRole)){
            const name = args[0].toLowerCase();
            
            if (!name) return message.channel.send('Please specify a name');
            

            customCommand = await custom.findOne({ guildID: message.guild.id, commandName: name});
            const resp = customCommand.responseContent;
            if (!customCommand) return message.channel.send('That custom command does not exist!');

            await custom.findOneAndDelete({ guildID: message.guild.id, commandName: name});

            message.channel.send(`Removed **${name}**`);
            const d = new Date(message.createdTimestamp);
            d.setMilliseconds(0);
            d.setSeconds(0);

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
            
            client.channels.cache.get("925457848375336960").send({ embeds: [newEmbed] });


            

            
        } else {
            message.channel.send("You don't have the required permissions to use this command");
            

        }

        


        
    }
}