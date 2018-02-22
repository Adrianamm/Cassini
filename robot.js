const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
require('./util/eventLoader')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};



//none of the guild events more. Will work on fixing up later
/*
client.on('guildBanAdd', (guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} was just banned!`);
});
client.on('guildBanRemove', (guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} was just unbanned!`);
});
*/

//this seems to work
var reload = (message, cmd) => {
	delete require.cache[require.resolve('./commands/' + cmd)];
	try {
		let cmdFile = require('./commands/' + cmd);
	} catch (err) {
		message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then(
			response => response.delete(1000).catch(error => console.log(error.stack))
		).catch(error => console.log(error.stack));
	}
	message.channel.sendMessage(`${cmd} reload was a success!`).then(
		response => response.delete(1000).catch(error => console.log(error.stack))
	).catch(error => console.log(error.stack));
};
exports.reload = reload;


client.login(settings.token);