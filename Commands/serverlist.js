exports.run = function(Client, message, args){
    var str = ""; 
    var guilds = Client.guilds.array(); 
    for (var i = 0; i < guilds.length; i++) { 
        str += `${i} - ${guilds[i].name.replace('@', '@ ')}\n`; 
    } 
    message.channel.send(str);
    }