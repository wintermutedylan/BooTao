const { userMention } = require("@discordjs/builders");
const custom = require("../models/customCommands");

module.exports = {
    name: 'create',
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
                var response = args.slice(1).join(" ");
                if (!name) return message.channel.send('Please specify a name for the Command');
                if (!response) return message.channel.send('Please specify a response for the Command');
                name = name.toLowerCase();
    

            } catch(err){
                client.channels.cache.get("838666046327619604").send(codeBlock('js', err));
            }

            customCommand = await custom.findOne({ guildID: message.guild.id, commandName: name});
            if (customCommand) return message.channel.send('This custom commands alreayd exists!');

            try{
                let command = await custom.create({
                    guildID: message.guild.id,
                    commandName: name,
                    responseContent: response
                });
                command.save();

            } catch(err){
                client.channels.cache.get("838666046327619604").send(codeBlock('js', err));
            }

            message.channel.send(`Saved **${name}**`);
            const d = new Date(message.createdTimestamp);
            d.setMilliseconds(0);
            d.setSeconds(0);
            try {
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#90fcc0')
                .setTitle("Quote Added")
                .setDescription(`**${name}** has been added`)
                .addFields(
                    {name: 'Responsible Staff', value: `${userMention(message.author.id)}`, inline: true},
                    {name: 'Quote Name', value: `${name}`, inline: true},
                    {name: 'Quote Content', value: `${response}`},
                    {name: 'Added At', value: `${d.toUTCString()}`}

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



