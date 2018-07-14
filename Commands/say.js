

exports.run = function(Client,message,args){
message.delete();
message.channel.send(args.join(" "));
}