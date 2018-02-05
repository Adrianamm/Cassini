exports.run = function(Client,message,args){
    const Discord = require('discord.js');
var server = message.guild;
var serverEmbed = new Discord.RichEmbed()
    .setTitle(`Server stats for ${server.name}`)
    .setColor('#008080')
    .addField('Name', server.name)
    .addField('Owner', server.owner.displayName)
    .addField('Created', server.createdAt, true)
    .addField('Channels', server.channels.size, true)
    .addField('Members', server.members.size, true)
    .addField('Roles', server.roles.size, true)
    .setThumbnail(server.iconURL)
    .setTimestamp()
message.channel.send({
    embed: serverEmbed
});
};
