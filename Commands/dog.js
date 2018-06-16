exports.run = function(Client, message, args){
   // message.channel.send("", {files: ["https://68.media.tumblr.com/0a51a580a4da096df6a705bb8f49c8ec/tumblr_ny67j0KPTf1txvwmco1_250.png"]});
   var Array_but = [
    'https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif',
    'https://media.giphy.com/media/Qt7ZKXj42izpm/giphy.gif',
    'https://media.giphy.com/media/f4HpCDvF84oh2/giphy.gif',
    'https://media.giphy.com/media/Yjc9l1Q6Al1DO/giphy.gif',
    'https://media.giphy.com/media/26FPqut4lzK3AECEo/giphy.gif',
    'https://media.giphy.com/media/WZP3qaxYj10gU/giphy.gif',
    'https://media.giphy.com/media/14rtlR7b01cjQI/giphy.gif',
    'https://media.giphy.com/media/FTJfA8RiHaOfS/giphy.gif',
    'https://media.giphy.com/media/1lvovaZHOnhCgroDma/giphy.gif',
    'https://media.giphy.com/media/TmzqWbXnmPHBS/giphy.gif',
    'https://media.giphy.com/media/F5Az0OxCZa73G/giphy.gif',
    'https://media.giphy.com/media/UwSmMxcl9V5Kw/giphy.gif',
    'https://media.giphy.com/media/C8YSDFsmJIeWU4Sj8K/giphy.gif',
    'https://media.giphy.com/media/6u38x5BzPipQ4/giphy.gif',
    'https://media.giphy.com/media/jp2KXzsPtoKFG/giphy.gif',
    'https://media.giphy.com/media/kOEYOwSaKbFra/giphy.gif',
    'https://media.giphy.com/media/HlYYLuI3WsAW4/giphy.gif',
    'https://media.giphy.com/media/OI8TsOa9KFAPu/giphy.gif',
    'https://media.giphy.com/media/1P2puPdOem9tC/giphy.gif',
    'https://media.giphy.com/media/fvmz3gCAip1M4/giphy.gif',
    'https://media.giphy.com/media/U000eKf9fZ2q4/giphy.gif'

    
  ];
  var Meme = Math.floor(Math.random()*Array_but.length);
  message.channel.send(`${Array_but[Meme]}`)
};



