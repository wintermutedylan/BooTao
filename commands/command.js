module.exports = {
    name: 'milim',
    aliases: [],
    permissions: ["ADMINISTRATOR"],
    description: "embeds",
    async execute(client, message,cmd,args,Discord){
        //var person = message.mentions.members.first();
        //message.channel.send(`${person.nickname}`);
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#E76AA3')
        .setTitle("Arcade Tao")
        .setURL('https://discord.gg/ganyumains')
        .setDescription("Milim!!!!!!!!!")
        .setImage('https://i.redd.it/s2754m4u81m51.jpg')
        .addFields(
            {name: 'Rule 1', value: 'Be nice'},
            {name: 'Rule 2', value: 'Praise Milim :heart: '},
            {name: 'Rule 3', value: 'bully melody <:hehehe:850914083967729676>'}

        )
        
        .setFooter('MILIM');
        
        
        

        message.channel.send({ embeds: [newEmbed] });
        
        

        
    }

    
}