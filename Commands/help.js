
exports.run = function(client, message, args) {
message.channel.send({embed: {
    color: 3447003,
    description: "What bot do. Join my discord server: https://discord.gg/DCpE9Wd",
    author: {
      name: client.user.username
    },
    fields: [
    {
      name: "*Dog",
      value: "Give you the UnderTale Dog because why not"
    },
    {
      name:"*MemeSong",
      value:"Gives you a good meme song",
    },
    {
      name:"*FakeFacts",
      value:"Gives you a fake fact",
      name:"*words",
      vaule:"gives you random words",
    }, 
    {
      name:"*fight or *Fight",
      value:"Fights"
    },

  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: client.user.avatarURL
  }
  }});
}