const { userMention } = require("@discordjs/builders");
const custom = require("../models/customCommands");

module.exports = {
    name: 'owoify',
    aliases: [],
    permissions: [],
    description: "Create user profile",
    async execute(client, message, cmd, args, Discord){
        
        

        var endingEmotes = ["._.", ";-;", "(；ω；)", "UwU", "(人◕ω◕)", "(●´ω｀●)", "(✿ ♡‿♡)", "(◠‿◠✿)", "^-^", "^_^", ">_<", ">_>", ":P", ":3", ";3", "x3", ":D", "xD", "XD", "ㅇㅅㅇ", "(• o •)", "ʕ•̫͡•ʔ", "ʕʘ‿ʘʔ", "(　'◟ ')", "<3"];
        var beginningEmotes = ["OWO", "OwO", "0w0", "UwU", "HIIII!", "H-hewwo??", "Huohhhh"];

        if (Array.isArray(args) && args.length == 0) return message.channel.send("Please specify a message to Owoify");
        var mes = args.join(" ").toLowerCase();

        var front = beginningEmotes[Math.floor(Math.random()*beginningEmotes.length)];
        var back = endingEmotes[Math.floor(Math.random()*endingEmotes.length)];
        
        
        var newString = mes.replace("no", "nu");
        newString = newString.replace(/have|has/gi, "haz");
        newString = newString.replace("you", "u");
        newString = newString.replace("the", "da");
        newString = newString.replace("love", "wuv");
        newString = newString.replace(/l|r/gi, "w");
        newString = front + " " + newString + " " + back;

        

        message.channel.send({content: newString, allowedMentions: {parse: []}});



        
        



    }
}
