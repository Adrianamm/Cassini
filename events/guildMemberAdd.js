/*
module.exports = (client, message) => {
    let guild = member.guild;
    message.channel.send(`welcome ${member.user.username}!`);
            let role = message.guild.roles.find("name", "member");
            message.member.addRole(role);
           
    };
    */
    module.exports = (client, message) => {
      let guild = member.guild;
      if (message.author.bot) return;
      if (message.member.guild.id !== client.config.guildID && message.author.id !== client.config.owner) return;
    
          if (message.member.nickname == null) {
              message.channel.send(`Hi there ${message.author}! `);
          } else {
              let role = message.guild.roles.find("name", "member");
              message.member.addRole(role);
              var lobby = message.guild.channels.find('name', 'general');
              lobby.send(`Welcome ${message.author} to Adriana's bot place!`);
          };

      if (message.content.indexOf(bot.config.prefix) !== 0) return;
      const args = message.content.split(/\s+/g);
      const command = args.shift().slice(bot.config.prefix.length).toLowerCase();
      const cmd = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));
      let perms = bot.permLevel(message);
      if (cmd && perms >= cmd.conf.permLevel) {
          bot.log("log", `${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`, " CMD ");
          cmd.run(bot, message, args, perms);
      };
  };