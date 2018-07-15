exports.run = function(Client,message,args){
    const Discord = require('discord.js');
    const server = message.guild;
    const serverEmbed = new Discord.RichEmbed()

        .setTitle(`Information about: ${server.name}`)
        .setColor('#2a35d2')
        .addField('Name', server.name)
        .addField('Owner', server.owner.displayName)
        .addField('Created', server.createdAt, true)
        .addField('Channels', server.channels.size, true)
        .addBlankField(true)
        .addField('Members', server.members.size, true)
        .setThumbnail(server.iconURL)
        .setTimestamp()
    message.channel.send({
    embed: serverEmbed
});
};
