exports.run = function(Client, message, args) {
	message.channel.sendMessage(`**pong beep boop** \`${Date.now() - message.createdTimestamp} ms\``);
};