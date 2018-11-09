const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = function(Client, message, args) {
	console.log('${client.guilds.name}');
	var prefix = "*";
	if(message.content.startsWith(prefix + "ping")){
		//message.channel.send(`**pong** \`1254 ms\``);
	message.channel.send(`**pong beep boop** \`${Date.now() - message.createdTimestamp} ms\``);
	}
};