exports.run = function(client, message, args) {
const Discord = require('discord.js');
	if (!message.mentions.users.array()[0]) {
		user = message.author;
		member = message.member;
	} else {
		user = message.mentions.users.array()[0];
		member = message.mentions.members.array()[0];
	}
	var info = new Discord.RichEmbed();	
	if (!member.colorRole) {
		var color = "None"
	} else {
		var color = member.colorRole.name;
	};
	var exclusive = member.roles.array()[0].name,
		num = member.roles.array()[0].members.size;
	member.roles.forEach(role => {
		if (role.members.size < num) {
			exclusive = role.name,
				num = role.members.size;
		}
	});
	info.setTitle(`Info on ${user.username}:`)
		.setThumbnail(user.avatarURL)
		.setTimestamp()
		.addField('Username', user.username, true)
		.addField('Nick Name', member.displayName, true)
		.addField('Status', user.pre)
		.addField('Account Created', user.createdAt, true)
		.addField('Join Date', member.joinedAt, true)
		//.addField("Roles: " + user.member.roles.map(role => role.name).join(", "),true) // user, roles
		.addField('Color Role', color, true)
		.addField('Icon URL', user.avatarURL, true)
	message.channel.send({
		embed: info
	})

};