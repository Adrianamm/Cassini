exports.run = function(Client, message, args){
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setTitle("What the bot can do: Prefix is *")
    .setAuthor("Cassini", "https://cdn.discordapp.com/avatars/362660887850516480/8eb02d0b3d9d908a053e18d3a609ab61.png?size=2048")
    .setTimestamp()

    .addField("6201", "6201's Cube meme video", true)
    .addBlankField(true)
    .addField("botwords","The bot gives you a message about FIRST",true)
    .addBlankField(true)
    .addField("corgi", "The bot gives a random corgi gif", true)
    .addBlankField(true)
    .addField("dog", "The bot gives a random dog gif",true)
    .addBlankField(true)
    .addField("fakefact", "The bot tells you a fake fact",true)
    .addBlankField(true)
    .addField("firsttweets", "Creates its own FIRST Tweets by using a lot of real FIRST Tweets")
    /*no space needed*/
    .addField("kickoff","Tells you how much time we have until DeepSpace")
    /*no space needed*/
    .addField("memesong","Gives you a random meme song", true)
    .addBlankField(true)
    .addField("nou","the bot gives you the nou uno card")
    //.addBlankField(true)
    .addField("ping","lets you ping the bot so you know it's not dead",true)
    /*no space needed*/
    .addField("words","the bot creates it's own messages about FIRST using only given words")

    message.channel.send({embed});
}