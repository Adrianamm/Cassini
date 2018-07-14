module.exports = async (client, member) => {
	client.log("log", `${member.guild.name} got a new member - ${member.user.username} (${member.id})`, 'MEMBR');
	security = await client.getSetting('securityEnabled', member.guild);
	welcome = await client.getSetting('welcomeMessagesEnabled', member.guild);
	if (security) {
		secChanS = await client.getSetting('securityChannel', member.guild);
		secChan = member.guild.channels.find('name', secChanS);
		if(!secChan) return;
		secMessage = await client.getSetting('securityJoinMessage', member.guild);
		secMessage = secMessage.replace('{user}', member.user).replace('{guild}', member.guild.name);
		secChan.send(secMessage);
	} else if (welcome) {
		welcomeChanS = await client.getSetting('welcomeMessagesChannel', member.guild);
		welcomeChan = member.guild.channels.find('name', welcomeChanS);
		welcomeMessage = await client.getSetting('welcomeMessage', member.guild);
		welcomeMessage = welcomeMessage.replace('{user}', member.user).replace('{guild}', member.guild.name);
		if (!welcomeChan) return;
		welcomeChan.send(welcomeMessage);
	}
};