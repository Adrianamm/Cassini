exports.run = function(Client, message, args) {
    if (!message.mentions.users.array()[0]) {
      message.channel.send(`*hugs* ***${message.author.username}***`)
    } else {
      let huggee = message.mentions.users.array()[0];
      message.channel.send(`*hugs* ***${huggee.username}***`);
  };
}