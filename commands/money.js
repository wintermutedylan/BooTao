module.exports = {
    name: 'money',
    aliases: [],
    permissions: [],
    description: "embeds",
    async execute(client, message,cmd,args,Discord){
        //var person = message.mentions.members.first();
        //message.channel.send(`${person.nickname}`);

        
        
        

        
        var milimArray = ["https://media.discordapp.net/attachments/830700056448860181/1058784121016557578/SPOILER_image.png?width=563&height=844", 
        "https://cdn.discordapp.com/attachments/903273200731951104/1077194166355898478/20210729_150255.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077194167198957670/Money_Tao.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077194167710658601/20220511_143618.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077194168788602952/20211105_201013.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077194224082112582/20200923_141140.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077194248056737874/IMG-20220826-WA0002.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077194298606497852/20220827_181051.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077195158606581780/IMG20230126164106.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077195159697096764/20210505_112852.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077195161089609779/Kleeney.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077195161748123648/IMG20230125215419.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077195163044155432/20200504_211516.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077195164180819999/Moneyluc.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077195164797374524/Ginevra_de_Money.png",
        "https://cdn.discordapp.com/attachments/903273200731951104/1077195166210863155/20230111_221035.png"
    ]

        var picture = milimArray[Math.floor(Math.random()*milimArray.length)];
        message.channel.send(picture);
    

        
        
        
        
        

        
    }

    
}
